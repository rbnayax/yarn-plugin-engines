import { readFileSync, existsSync } from "fs";
import { resolve } from "path";
import { satisfies, validRange, subset } from "semver";
import { npath } from "@yarnpkg/fslib";
import { formatUtils } from "@yarnpkg/core";
import { EngineChecker, EngineCheckerOptions } from "./engine-checker";

export class NodeDependencyEngineChecker extends EngineChecker {
  constructor(
    options: EngineCheckerOptions,
    private readonly nodeRequiredVersion: string,
    private readonly dependencyName: string,
  ) {
    super(options);
  }

  get engine(): string {
    return this.dependencyName;
  }

  verifyEngine(engines: Record<string, string> | undefined): string | undefined {
    let depNodeRequiredVersion = engines?.node;
    if (!depNodeRequiredVersion) {
      return;
    }
    if (!subset(this.nodeRequiredVersion, depNodeRequiredVersion, { includePrerelease: true })) {
      this.throwWrongEngineError(
        depNodeRequiredVersion.replace(/^v/i, ""),
        this.nodeRequiredVersion.replace(/^v/i, ""),
      );
    }
    return depNodeRequiredVersion;
  }
}
