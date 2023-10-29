import { Plugin, Project, Hooks, HardDependencies } from "@yarnpkg/core";
import { EngineCheckerOptions, ErrorReporter, NodeEngineChecker, YarnEngineChecker } from "./engine-checkers";
import { sync } from "resolve";
import path from "path";
import { readFileSync } from "fs";
import { NodeDependencyEngineChecker } from "./engine-checkers/node.dep.engine-checker";

const verifyEngines =
  (errorReporter: ErrorReporter) =>
  (project: Project): void => {
    if (process.env.PLUGIN_YARN_ENGINES_DISABLE != null) {
      return;
    }

    const { engines = {} } = project.getWorkspaceByCwd(project.cwd).manifest.raw;
    const options: EngineCheckerOptions = { project, errorReporter };
    new YarnEngineChecker(options).verifyEngine(engines);
    const nodeRequiredVersion = new NodeEngineChecker(options).verifyEngine(engines);
    if (nodeRequiredVersion && !process.env.PLUGIN_YARN_DEP_ENGINES_DISABLE) {
      const checked = new Set<string>();
      for (const workspace of project.workspaces) {
        for (const dependencyType of [`dependencies`, `devDependencies`] as Array<HardDependencies>) {
          for (const descriptor of workspace.manifest[dependencyType].values()) {
            if (project.tryWorkspaceByDescriptor(descriptor) === null) {
              let fullName = descriptor.name;
              if (descriptor.scope) {
                fullName = path.join(`@${descriptor.scope}`, fullName);
              }
              const pkgJsonPath = sync(path.join(fullName, "package.json"), {
                includeCoreModules: false,
                basedir: workspace.cwd,
              });
              if (checked.has(pkgJsonPath)) {
                continue;
              }
              checked.add(pkgJsonPath);
              const engines = JSON.parse(readFileSync(pkgJsonPath, { encoding: "utf-8" })).engines;
              new NodeDependencyEngineChecker(options, nodeRequiredVersion, fullName).verifyEngine(engines);
            }
          }
        }
      }
    }
  };

const setupScriptEnvironment = verifyEngines(ErrorReporter.Console);

const plugin: Plugin<Hooks> = {
  hooks: {
    validateProject: verifyEngines(ErrorReporter.Yarn),
    setupScriptEnvironment: async (project: Project) => setupScriptEnvironment(project),
  },
};

export default plugin;
