/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-engines",
factory: function (require) {
var plugin=(()=>{var fr=Object.create;var ae=Object.defineProperty;var vr=Object.getOwnPropertyDescriptor;var mr=Object.getOwnPropertyNames;var hr=Object.getPrototypeOf,gr=Object.prototype.hasOwnProperty;var P=(i=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(i,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):i)(function(i){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+i+'" is not supported')});var b=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports),yr=(i,e)=>{for(var t in e)ae(i,t,{get:e[t],enumerable:!0})},Ne=(i,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of mr(e))!gr.call(i,n)&&n!==t&&ae(i,n,{get:()=>e[n],enumerable:!(r=vr(e,n))||r.enumerable});return i};var Se=(i,e,t)=>(t=i!=null?fr(hr(i)):{},Ne(e||!i||!i.__esModule?ae(t,"default",{value:i,enumerable:!0}):t,i)),_r=i=>Ne(ae({},"__esModule",{value:!0}),i);var he=b((Ft,Te)=>{"use strict";var wr=P("os");Te.exports=wr.homedir||function(){var e=process.env.HOME,t=process.env.LOGNAME||process.env.USER||process.env.LNAME||process.env.USERNAME;return process.platform==="win32"?process.env.USERPROFILE||process.env.HOMEDRIVE+process.env.HOMEPATH||e||null:process.platform==="darwin"?e||(t?"/Users/"+t:null):process.platform==="linux"?e||(process.getuid()===0?"/root":t?"/home/"+t:null):e||null}});var ge=b((Tt,qe)=>{qe.exports=function(){var i=Error.prepareStackTrace;Error.prepareStackTrace=function(t,r){return r};var e=new Error().stack;return Error.prepareStackTrace=i,e[2].getFileName()}});var Oe=b((qt,K)=>{"use strict";var Er=process.platform==="win32",kr=/^(((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?[\\\/]?)(?:[^\\\/]*[\\\/])*)((\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))[\\\/]*$/,ye={};function Pr(i){return kr.exec(i).slice(1)}ye.parse=function(i){if(typeof i!="string")throw new TypeError("Parameter 'pathString' must be a string, not "+typeof i);var e=Pr(i);if(!e||e.length!==5)throw new TypeError("Invalid path '"+i+"'");return{root:e[1],dir:e[0]===e[1]?e[0]:e[0].slice(0,-1),base:e[2],ext:e[4],name:e[3]}};var Nr=/^((\/?)(?:[^\/]*\/)*)((\.{1,2}|[^\/]+?|)(\.[^.\/]*|))[\/]*$/,_e={};function Sr(i){return Nr.exec(i).slice(1)}_e.parse=function(i){if(typeof i!="string")throw new TypeError("Parameter 'pathString' must be a string, not "+typeof i);var e=Sr(i);if(!e||e.length!==5)throw new TypeError("Invalid path '"+i+"'");return{root:e[1],dir:e[0].slice(0,-1),base:e[2],ext:e[4],name:e[3]}};Er?K.exports=ye.parse:K.exports=_e.parse;K.exports.posix=_e.parse;K.exports.win32=ye.parse});var we=b((Ot,Ae)=>{var De=P("path"),Ie=De.parse||Oe(),je=function(e,t){var r="/";/^([A-Za-z]:)/.test(e)?r="":/^\\\\/.test(e)&&(r="\\\\");for(var n=[e],o=Ie(e);o.dir!==n[n.length-1];)n.push(o.dir),o=Ie(o.dir);return n.reduce(function(h,v){return h.concat(t.map(function(m){return De.resolve(r,v,m)}))},[])};Ae.exports=function(e,t,r){var n=t&&t.moduleDirectory?[].concat(t.moduleDirectory):["node_modules"];if(t&&typeof t.paths=="function")return t.paths(r,e,function(){return je(e,n)},t);var o=je(e,n);return t&&t.paths?o.concat(t.paths):o}});var Ee=b((It,Ce)=>{var Q=P("path");Ce.exports=function(i,e){if(e=e||{},e.forceNodeResolution||!process.versions.pnp)return e;let{findPnpApi:t}=P("module"),r=(d,c)=>{let p=d.match(/^((?:@[^/]+\/)?[^/]+)(\/.*)?/);if(!p)throw new Error(`Assertion failed: Expected the "resolve" package to call the "paths" callback with package names only (got "${d}")`);c.charAt(c.length-1)!=="/"&&(c=Q.join(c,"/"));let N=t(c);if(N===null)return;let q;try{q=N.resolveToUnqualified(`${p[1]}/package.json`,c,{considerBuiltins:!1})}catch{return null}if(q===null)throw new Error(`Assertion failed: The resolution thinks that "${p[1]}" is a Node builtin`);let F=Q.dirname(q),I=typeof p[2]<"u"?Q.join(F,p[2]):F;return{packagePath:F,unqualifiedPath:I}},n=(d,c)=>{for(let p=0;p<c.length;p++){let N=r(d,c[p]);if(N||p===c.length-1)return N}return null},o=Array.isArray(e.paths)?e.paths:[],h=(d,c,p,N)=>{let q=[c].concat(o),F=n(d,q);return F==null?p():[F.unqualifiedPath]},v=(d,c,p,N)=>{let q=[c].concat(o),F=n(d,q);if(F==null)return p().concat(o);let I=Q.dirname(F.packagePath);return d.match(/^@[^/]+\//)&&(I=Q.dirname(I)),[I]},m=!1;return e.__skipPackageIterator||(e.packageIterator=function(d,c,p,N){m=!0;try{return h(d,c,p,N)}finally{m=!1}}),e.paths=function(d,c,p,N){return m?p().concat(o):v(d,c,p,N)},e}});var $e=b((jt,xe)=>{"use strict";var br="Function.prototype.bind called on incompatible ",Rr=Object.prototype.toString,Fr=Math.max,Tr="[object Function]",Me=function(e,t){for(var r=[],n=0;n<e.length;n+=1)r[n]=e[n];for(var o=0;o<t.length;o+=1)r[o+e.length]=t[o];return r},qr=function(e,t){for(var r=[],n=t||0,o=0;n<e.length;n+=1,o+=1)r[o]=e[n];return r},Or=function(i,e){for(var t="",r=0;r<i.length;r+=1)t+=i[r],r+1<i.length&&(t+=e);return t};xe.exports=function(e){var t=this;if(typeof t!="function"||Rr.apply(t)!==Tr)throw new TypeError(br+t);for(var r=qr(arguments,1),n,o=function(){if(this instanceof n){var c=t.apply(this,Me(r,arguments));return Object(c)===c?c:this}return t.apply(e,Me(r,arguments))},h=Fr(0,t.length-r.length),v=[],m=0;m<h;m++)v[m]="$"+m;if(n=Function("binder","return function ("+Or(v,",")+"){ return binder.apply(this,arguments); }")(o),t.prototype){var d=function(){};d.prototype=t.prototype,n.prototype=new d,d.prototype=null}return n}});var Le=b((Dt,Ue)=>{"use strict";var Ir=$e();Ue.exports=Function.prototype.bind||Ir});var He=b((At,ze)=>{"use strict";var jr=Function.prototype.call,Dr=Object.prototype.hasOwnProperty,Ar=Le();ze.exports=Ar.call(jr,Dr)});var Ye=b((Ct,Cr)=>{Cr.exports={assert:!0,"node:assert":[">= 14.18 && < 15",">= 16"],"assert/strict":">= 15","node:assert/strict":">= 16",async_hooks:">= 8","node:async_hooks":[">= 14.18 && < 15",">= 16"],buffer_ieee754:">= 0.5 && < 0.9.7",buffer:!0,"node:buffer":[">= 14.18 && < 15",">= 16"],child_process:!0,"node:child_process":[">= 14.18 && < 15",">= 16"],cluster:">= 0.5","node:cluster":[">= 14.18 && < 15",">= 16"],console:!0,"node:console":[">= 14.18 && < 15",">= 16"],constants:!0,"node:constants":[">= 14.18 && < 15",">= 16"],crypto:!0,"node:crypto":[">= 14.18 && < 15",">= 16"],_debug_agent:">= 1 && < 8",_debugger:"< 8",dgram:!0,"node:dgram":[">= 14.18 && < 15",">= 16"],diagnostics_channel:[">= 14.17 && < 15",">= 15.1"],"node:diagnostics_channel":[">= 14.18 && < 15",">= 16"],dns:!0,"node:dns":[">= 14.18 && < 15",">= 16"],"dns/promises":">= 15","node:dns/promises":">= 16",domain:">= 0.7.12","node:domain":[">= 14.18 && < 15",">= 16"],events:!0,"node:events":[">= 14.18 && < 15",">= 16"],freelist:"< 6",fs:!0,"node:fs":[">= 14.18 && < 15",">= 16"],"fs/promises":[">= 10 && < 10.1",">= 14"],"node:fs/promises":[">= 14.18 && < 15",">= 16"],_http_agent:">= 0.11.1","node:_http_agent":[">= 14.18 && < 15",">= 16"],_http_client:">= 0.11.1","node:_http_client":[">= 14.18 && < 15",">= 16"],_http_common:">= 0.11.1","node:_http_common":[">= 14.18 && < 15",">= 16"],_http_incoming:">= 0.11.1","node:_http_incoming":[">= 14.18 && < 15",">= 16"],_http_outgoing:">= 0.11.1","node:_http_outgoing":[">= 14.18 && < 15",">= 16"],_http_server:">= 0.11.1","node:_http_server":[">= 14.18 && < 15",">= 16"],http:!0,"node:http":[">= 14.18 && < 15",">= 16"],http2:">= 8.8","node:http2":[">= 14.18 && < 15",">= 16"],https:!0,"node:https":[">= 14.18 && < 15",">= 16"],inspector:">= 8","node:inspector":[">= 14.18 && < 15",">= 16"],"inspector/promises":[">= 19"],"node:inspector/promises":[">= 19"],_linklist:"< 8",module:!0,"node:module":[">= 14.18 && < 15",">= 16"],net:!0,"node:net":[">= 14.18 && < 15",">= 16"],"node-inspect/lib/_inspect":">= 7.6 && < 12","node-inspect/lib/internal/inspect_client":">= 7.6 && < 12","node-inspect/lib/internal/inspect_repl":">= 7.6 && < 12",os:!0,"node:os":[">= 14.18 && < 15",">= 16"],path:!0,"node:path":[">= 14.18 && < 15",">= 16"],"path/posix":">= 15.3","node:path/posix":">= 16","path/win32":">= 15.3","node:path/win32":">= 16",perf_hooks:">= 8.5","node:perf_hooks":[">= 14.18 && < 15",">= 16"],process:">= 1","node:process":[">= 14.18 && < 15",">= 16"],punycode:">= 0.5","node:punycode":[">= 14.18 && < 15",">= 16"],querystring:!0,"node:querystring":[">= 14.18 && < 15",">= 16"],readline:!0,"node:readline":[">= 14.18 && < 15",">= 16"],"readline/promises":">= 17","node:readline/promises":">= 17",repl:!0,"node:repl":[">= 14.18 && < 15",">= 16"],smalloc:">= 0.11.5 && < 3",_stream_duplex:">= 0.9.4","node:_stream_duplex":[">= 14.18 && < 15",">= 16"],_stream_transform:">= 0.9.4","node:_stream_transform":[">= 14.18 && < 15",">= 16"],_stream_wrap:">= 1.4.1","node:_stream_wrap":[">= 14.18 && < 15",">= 16"],_stream_passthrough:">= 0.9.4","node:_stream_passthrough":[">= 14.18 && < 15",">= 16"],_stream_readable:">= 0.9.4","node:_stream_readable":[">= 14.18 && < 15",">= 16"],_stream_writable:">= 0.9.4","node:_stream_writable":[">= 14.18 && < 15",">= 16"],stream:!0,"node:stream":[">= 14.18 && < 15",">= 16"],"stream/consumers":">= 16.7","node:stream/consumers":">= 16.7","stream/promises":">= 15","node:stream/promises":">= 16","stream/web":">= 16.5","node:stream/web":">= 16.5",string_decoder:!0,"node:string_decoder":[">= 14.18 && < 15",">= 16"],sys:[">= 0.4 && < 0.7",">= 0.8"],"node:sys":[">= 14.18 && < 15",">= 16"],"test/reporters":">= 19.9 && < 20.2","node:test/reporters":[">= 18.17 && < 19",">= 19.9",">= 20"],"node:test":[">= 16.17 && < 17",">= 18"],timers:!0,"node:timers":[">= 14.18 && < 15",">= 16"],"timers/promises":">= 15","node:timers/promises":">= 16",_tls_common:">= 0.11.13","node:_tls_common":[">= 14.18 && < 15",">= 16"],_tls_legacy:">= 0.11.3 && < 10",_tls_wrap:">= 0.11.3","node:_tls_wrap":[">= 14.18 && < 15",">= 16"],tls:!0,"node:tls":[">= 14.18 && < 15",">= 16"],trace_events:">= 10","node:trace_events":[">= 14.18 && < 15",">= 16"],tty:!0,"node:tty":[">= 14.18 && < 15",">= 16"],url:!0,"node:url":[">= 14.18 && < 15",">= 16"],util:!0,"node:util":[">= 14.18 && < 15",">= 16"],"util/types":">= 15.3","node:util/types":">= 16","v8/tools/arguments":">= 10 && < 12","v8/tools/codemap":[">= 4.4 && < 5",">= 5.2 && < 12"],"v8/tools/consarray":[">= 4.4 && < 5",">= 5.2 && < 12"],"v8/tools/csvparser":[">= 4.4 && < 5",">= 5.2 && < 12"],"v8/tools/logreader":[">= 4.4 && < 5",">= 5.2 && < 12"],"v8/tools/profile_view":[">= 4.4 && < 5",">= 5.2 && < 12"],"v8/tools/splaytree":[">= 4.4 && < 5",">= 5.2 && < 12"],v8:">= 1","node:v8":[">= 14.18 && < 15",">= 16"],vm:!0,"node:vm":[">= 14.18 && < 15",">= 16"],wasi:[">= 13.4 && < 13.5",">= 18.17 && < 19",">= 20"],"node:wasi":[">= 18.17 && < 19",">= 20"],worker_threads:">= 11.7","node:worker_threads":[">= 14.18 && < 15",">= 16"],zlib:">= 0.5","node:zlib":[">= 14.18 && < 15",">= 16"]}});var X=b((Mt,We)=>{"use strict";var Mr=He();function xr(i,e){for(var t=i.split("."),r=e.split(" "),n=r.length>1?r[0]:"=",o=(r.length>1?r[1]:r[0]).split("."),h=0;h<3;++h){var v=parseInt(t[h]||0,10),m=parseInt(o[h]||0,10);if(v!==m)return n==="<"?v<m:n===">="?v>=m:!1}return n===">="}function Ge(i,e){var t=e.split(/ ?&& ?/);if(t.length===0)return!1;for(var r=0;r<t.length;++r)if(!xr(i,t[r]))return!1;return!0}function $r(i,e){if(typeof e=="boolean")return e;var t=typeof i>"u"?process.versions&&process.versions.node:i;if(typeof t!="string")throw new TypeError(typeof i>"u"?"Unable to determine current node version":"If provided, a valid node version is required");if(e&&typeof e=="object"){for(var r=0;r<e.length;++r)if(Ge(t,e[r]))return!0;return!1}return Ge(t,e)}var Ve=Ye();We.exports=function(e,t){return Mr(Ve,e)&&$r(t,Ve[e])}});var Ze=b((xt,Je)=>{var H=P("fs"),Ur=he(),k=P("path"),Lr=ge(),zr=we(),Hr=Ee(),Yr=X(),Gr=process.platform!=="win32"&&H.realpath&&typeof H.realpath.native=="function"?H.realpath.native:H.realpath,Be=Ur(),Vr=function(){return[k.join(Be,".node_modules"),k.join(Be,".node_libraries")]},Wr=function(e,t){H.stat(e,function(r,n){return r?r.code==="ENOENT"||r.code==="ENOTDIR"?t(null,!1):t(r):t(null,n.isFile()||n.isFIFO())})},Br=function(e,t){H.stat(e,function(r,n){return r?r.code==="ENOENT"||r.code==="ENOTDIR"?t(null,!1):t(r):t(null,n.isDirectory())})},Jr=function(e,t){Gr(e,function(r,n){r&&r.code!=="ENOENT"?t(r):t(null,r?e:n)})},ee=function(e,t,r,n){r&&r.preserveSymlinks===!1?e(t,n):n(null,t)},Zr=function(e,t,r){e(t,function(n,o){if(n)r(n);else try{var h=JSON.parse(o);r(null,h)}catch{r(null)}})},Kr=function(e,t,r){for(var n=zr(t,r,e),o=0;o<n.length;o++)n[o]=k.join(n[o],e);return n};Je.exports=function(e,t,r){var n=r,o=t;if(typeof t=="function"&&(n=o,o={}),typeof e!="string"){var h=new TypeError("Path must be a string.");return process.nextTick(function(){n(h)})}o=Hr(e,o);var v=o.isFile||Wr,m=o.isDirectory||Br,d=o.readFile||H.readFile,c=o.realpath||Jr,p=o.readPackage||Zr;if(o.readFile&&o.readPackage){var N=new TypeError("`readFile` and `readPackage` are mutually exclusive.");return process.nextTick(function(){n(N)})}var q=o.packageIterator,F=o.extensions||[".js"],I=o.includeCoreModules!==!1,G=o.basedir||k.dirname(Lr()),J=o.filename||G;o.paths=o.paths||Vr();var te=k.resolve(G);ee(c,te,o,function(s,a){s?n(s):ne(a)});var j;function ne(s){if(/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/.test(e))j=k.resolve(s,e),(e==="."||e===".."||e.slice(-1)==="/")&&(j+="/"),/\/$/.test(e)&&j===s?E(j,o.package,V):M(j,o.package,V);else{if(I&&Yr(e))return n(null,e);D(e,s,function(a,_,l){if(a)n(a);else{if(_)return ee(c,_,o,function(O,w){O?n(O):n(null,w,l)});var g=new Error("Cannot find module '"+e+"' from '"+J+"'");g.code="MODULE_NOT_FOUND",n(g)}})}}function V(s,a,_){s?n(s):a?n(null,a,_):E(j,function(l,g,O){if(l)n(l);else if(g)ee(c,g,o,function(y,T){y?n(y):n(null,T,O)});else{var w=new Error("Cannot find module '"+e+"' from '"+J+"'");w.code="MODULE_NOT_FOUND",n(w)}})}function M(s,a,_){var l=a,g=_;typeof l=="function"&&(g=l,l=void 0);var O=[""].concat(F);w(O,s,l);function w(y,T,x){if(y.length===0)return g(null,void 0,x);var z=T+y[0],A=x;A?S(null,A):u(k.dirname(z),S);function S(U,W,$){if(A=W,U)return g(U);if($&&A&&o.pathFilter){var ie=k.relative($,z),se=ie.slice(0,ie.length-y[0].length),Z=o.pathFilter(A,T,se);if(Z)return w([""].concat(F.slice()),k.resolve($,Z),A)}v(z,oe)}function oe(U,W){if(U)return g(U);if(W)return g(null,z,A);w(y.slice(1),T,A)}}}function u(s,a){if(s===""||s==="/"||process.platform==="win32"&&/^\w:[/\\]*$/.test(s)||/[/\\]node_modules[/\\]*$/.test(s))return a(null);ee(c,s,o,function(_,l){if(_)return u(k.dirname(s),a);var g=k.join(l,"package.json");v(g,function(O,w){if(!w)return u(k.dirname(s),a);p(d,g,function(y,T){y&&a(y);var x=T;x&&o.packageFilter&&(x=o.packageFilter(x,g)),a(null,x,s)})})})}function E(s,a,_){var l=_,g=a;typeof g=="function"&&(l=g,g=o.package),ee(c,s,o,function(O,w){if(O)return l(O);var y=k.join(w,"package.json");v(y,function(T,x){if(T)return l(T);if(!x)return M(k.join(s,"index"),g,l);p(d,y,function(z,A){if(z)return l(z);var S=A;if(S&&o.packageFilter&&(S=o.packageFilter(S,y)),S&&S.main){if(typeof S.main!="string"){var oe=new TypeError("package \u201C"+S.name+"\u201D `main` must be a string");return oe.code="INVALID_PACKAGE_MAIN",l(oe)}(S.main==="."||S.main==="./")&&(S.main="index"),M(k.resolve(s,S.main),S,function(U,W,$){if(U)return l(U);if(W)return l(null,W,$);if(!$)return M(k.join(s,"index"),$,l);var ie=k.resolve(s,$.main);E(ie,$,function(se,Z,Pe){if(se)return l(se);if(Z)return l(null,Z,Pe);M(k.join(s,"index"),Pe,l)})});return}M(k.join(s,"/index"),S,l)})})})}function f(s,a){if(a.length===0)return s(null,void 0);var _=a[0];m(k.dirname(_),l);function l(w,y){if(w)return s(w);if(!y)return f(s,a.slice(1));M(_,o.package,g)}function g(w,y,T){if(w)return s(w);if(y)return s(null,y,T);E(_,o.package,O)}function O(w,y,T){if(w)return s(w);if(y)return s(null,y,T);f(s,a.slice(1))}}function D(s,a,_){var l=function(){return Kr(s,a,o)};f(_,q?q(s,a,l,o):l())}}});var Ke=b(($t,Qr)=>{Qr.exports={assert:!0,"node:assert":[">= 14.18 && < 15",">= 16"],"assert/strict":">= 15","node:assert/strict":">= 16",async_hooks:">= 8","node:async_hooks":[">= 14.18 && < 15",">= 16"],buffer_ieee754:">= 0.5 && < 0.9.7",buffer:!0,"node:buffer":[">= 14.18 && < 15",">= 16"],child_process:!0,"node:child_process":[">= 14.18 && < 15",">= 16"],cluster:">= 0.5","node:cluster":[">= 14.18 && < 15",">= 16"],console:!0,"node:console":[">= 14.18 && < 15",">= 16"],constants:!0,"node:constants":[">= 14.18 && < 15",">= 16"],crypto:!0,"node:crypto":[">= 14.18 && < 15",">= 16"],_debug_agent:">= 1 && < 8",_debugger:"< 8",dgram:!0,"node:dgram":[">= 14.18 && < 15",">= 16"],diagnostics_channel:[">= 14.17 && < 15",">= 15.1"],"node:diagnostics_channel":[">= 14.18 && < 15",">= 16"],dns:!0,"node:dns":[">= 14.18 && < 15",">= 16"],"dns/promises":">= 15","node:dns/promises":">= 16",domain:">= 0.7.12","node:domain":[">= 14.18 && < 15",">= 16"],events:!0,"node:events":[">= 14.18 && < 15",">= 16"],freelist:"< 6",fs:!0,"node:fs":[">= 14.18 && < 15",">= 16"],"fs/promises":[">= 10 && < 10.1",">= 14"],"node:fs/promises":[">= 14.18 && < 15",">= 16"],_http_agent:">= 0.11.1","node:_http_agent":[">= 14.18 && < 15",">= 16"],_http_client:">= 0.11.1","node:_http_client":[">= 14.18 && < 15",">= 16"],_http_common:">= 0.11.1","node:_http_common":[">= 14.18 && < 15",">= 16"],_http_incoming:">= 0.11.1","node:_http_incoming":[">= 14.18 && < 15",">= 16"],_http_outgoing:">= 0.11.1","node:_http_outgoing":[">= 14.18 && < 15",">= 16"],_http_server:">= 0.11.1","node:_http_server":[">= 14.18 && < 15",">= 16"],http:!0,"node:http":[">= 14.18 && < 15",">= 16"],http2:">= 8.8","node:http2":[">= 14.18 && < 15",">= 16"],https:!0,"node:https":[">= 14.18 && < 15",">= 16"],inspector:">= 8","node:inspector":[">= 14.18 && < 15",">= 16"],"inspector/promises":[">= 19"],"node:inspector/promises":[">= 19"],_linklist:"< 8",module:!0,"node:module":[">= 14.18 && < 15",">= 16"],net:!0,"node:net":[">= 14.18 && < 15",">= 16"],"node-inspect/lib/_inspect":">= 7.6 && < 12","node-inspect/lib/internal/inspect_client":">= 7.6 && < 12","node-inspect/lib/internal/inspect_repl":">= 7.6 && < 12",os:!0,"node:os":[">= 14.18 && < 15",">= 16"],path:!0,"node:path":[">= 14.18 && < 15",">= 16"],"path/posix":">= 15.3","node:path/posix":">= 16","path/win32":">= 15.3","node:path/win32":">= 16",perf_hooks:">= 8.5","node:perf_hooks":[">= 14.18 && < 15",">= 16"],process:">= 1","node:process":[">= 14.18 && < 15",">= 16"],punycode:">= 0.5","node:punycode":[">= 14.18 && < 15",">= 16"],querystring:!0,"node:querystring":[">= 14.18 && < 15",">= 16"],readline:!0,"node:readline":[">= 14.18 && < 15",">= 16"],"readline/promises":">= 17","node:readline/promises":">= 17",repl:!0,"node:repl":[">= 14.18 && < 15",">= 16"],smalloc:">= 0.11.5 && < 3",_stream_duplex:">= 0.9.4","node:_stream_duplex":[">= 14.18 && < 15",">= 16"],_stream_transform:">= 0.9.4","node:_stream_transform":[">= 14.18 && < 15",">= 16"],_stream_wrap:">= 1.4.1","node:_stream_wrap":[">= 14.18 && < 15",">= 16"],_stream_passthrough:">= 0.9.4","node:_stream_passthrough":[">= 14.18 && < 15",">= 16"],_stream_readable:">= 0.9.4","node:_stream_readable":[">= 14.18 && < 15",">= 16"],_stream_writable:">= 0.9.4","node:_stream_writable":[">= 14.18 && < 15",">= 16"],stream:!0,"node:stream":[">= 14.18 && < 15",">= 16"],"stream/consumers":">= 16.7","node:stream/consumers":">= 16.7","stream/promises":">= 15","node:stream/promises":">= 16","stream/web":">= 16.5","node:stream/web":">= 16.5",string_decoder:!0,"node:string_decoder":[">= 14.18 && < 15",">= 16"],sys:[">= 0.4 && < 0.7",">= 0.8"],"node:sys":[">= 14.18 && < 15",">= 16"],"test/reporters":">= 19.9 && < 20.2","node:test/reporters":[">= 18.17 && < 19",">= 19.9",">= 20"],"node:test":[">= 16.17 && < 17",">= 18"],timers:!0,"node:timers":[">= 14.18 && < 15",">= 16"],"timers/promises":">= 15","node:timers/promises":">= 16",_tls_common:">= 0.11.13","node:_tls_common":[">= 14.18 && < 15",">= 16"],_tls_legacy:">= 0.11.3 && < 10",_tls_wrap:">= 0.11.3","node:_tls_wrap":[">= 14.18 && < 15",">= 16"],tls:!0,"node:tls":[">= 14.18 && < 15",">= 16"],trace_events:">= 10","node:trace_events":[">= 14.18 && < 15",">= 16"],tty:!0,"node:tty":[">= 14.18 && < 15",">= 16"],url:!0,"node:url":[">= 14.18 && < 15",">= 16"],util:!0,"node:util":[">= 14.18 && < 15",">= 16"],"util/types":">= 15.3","node:util/types":">= 16","v8/tools/arguments":">= 10 && < 12","v8/tools/codemap":[">= 4.4 && < 5",">= 5.2 && < 12"],"v8/tools/consarray":[">= 4.4 && < 5",">= 5.2 && < 12"],"v8/tools/csvparser":[">= 4.4 && < 5",">= 5.2 && < 12"],"v8/tools/logreader":[">= 4.4 && < 5",">= 5.2 && < 12"],"v8/tools/profile_view":[">= 4.4 && < 5",">= 5.2 && < 12"],"v8/tools/splaytree":[">= 4.4 && < 5",">= 5.2 && < 12"],v8:">= 1","node:v8":[">= 14.18 && < 15",">= 16"],vm:!0,"node:vm":[">= 14.18 && < 15",">= 16"],wasi:[">= 13.4 && < 13.5",">= 18.17 && < 19",">= 20"],"node:wasi":[">= 18.17 && < 19",">= 20"],worker_threads:">= 11.7","node:worker_threads":[">= 14.18 && < 15",">= 16"],zlib:">= 0.5","node:zlib":[">= 14.18 && < 15",">= 16"]}});var rr=b((Ut,er)=>{"use strict";var Xr=X(),Qe=Ke(),Xe={};for(pe in Qe)Object.prototype.hasOwnProperty.call(Qe,pe)&&(Xe[pe]=Xr(pe));var pe;er.exports=Xe});var nr=b((Lt,tr)=>{var et=X();tr.exports=function(e){return et(e)}});var sr=b((zt,ir)=>{var rt=X(),Y=P("fs"),R=P("path"),tt=he(),nt=ge(),ot=we(),it=Ee(),st=process.platform!=="win32"&&Y.realpathSync&&typeof Y.realpathSync.native=="function"?Y.realpathSync.native:Y.realpathSync,or=tt(),at=function(){return[R.join(or,".node_modules"),R.join(or,".node_libraries")]},ct=function(e){try{var t=Y.statSync(e,{throwIfNoEntry:!1})}catch(r){if(r&&(r.code==="ENOENT"||r.code==="ENOTDIR"))return!1;throw r}return!!t&&(t.isFile()||t.isFIFO())},lt=function(e){try{var t=Y.statSync(e,{throwIfNoEntry:!1})}catch(r){if(r&&(r.code==="ENOENT"||r.code==="ENOTDIR"))return!1;throw r}return!!t&&t.isDirectory()},ut=function(e){try{return st(e)}catch(t){if(t.code!=="ENOENT")throw t}return e},re=function(e,t,r){return r&&r.preserveSymlinks===!1?e(t):t},dt=function(e,t){var r=e(t);try{var n=JSON.parse(r);return n}catch{}},pt=function(e,t,r){for(var n=ot(t,r,e),o=0;o<n.length;o++)n[o]=R.join(n[o],e);return n};ir.exports=function(e,t){if(typeof e!="string")throw new TypeError("Path must be a string.");var r=it(e,t),n=r.isFile||ct,o=r.readFileSync||Y.readFileSync,h=r.isDirectory||lt,v=r.realpathSync||ut,m=r.readPackageSync||dt;if(r.readFileSync&&r.readPackageSync)throw new TypeError("`readFileSync` and `readPackageSync` are mutually exclusive.");var d=r.packageIterator,c=r.extensions||[".js"],p=r.includeCoreModules!==!1,N=r.basedir||R.dirname(nt()),q=r.filename||N;r.paths=r.paths||at();var F=re(v,R.resolve(N),r);if(/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/.test(e)){var I=R.resolve(F,e);(e==="."||e===".."||e.slice(-1)==="/")&&(I+="/");var G=j(I)||V(I);if(G)return re(v,G,r)}else{if(p&&rt(e))return e;var J=M(e,F);if(J)return re(v,J,r)}var te=new Error("Cannot find module '"+e+"' from '"+q+"'");throw te.code="MODULE_NOT_FOUND",te;function j(u){var E=ne(R.dirname(u));if(E&&E.dir&&E.pkg&&r.pathFilter){var f=R.relative(E.dir,u),D=r.pathFilter(E.pkg,u,f);D&&(u=R.resolve(E.dir,D))}if(n(u))return u;for(var s=0;s<c.length;s++){var a=u+c[s];if(n(a))return a}}function ne(u){if(!(u===""||u==="/")&&!(process.platform==="win32"&&/^\w:[/\\]*$/.test(u))&&!/[/\\]node_modules[/\\]*$/.test(u)){var E=R.join(re(v,u,r),"package.json");if(!n(E))return ne(R.dirname(u));var f=m(o,E);return f&&r.packageFilter&&(f=r.packageFilter(f,u)),{pkg:f,dir:u}}}function V(u){var E=R.join(re(v,u,r),"/package.json");if(n(E)){try{var f=m(o,E)}catch{}if(f&&r.packageFilter&&(f=r.packageFilter(f,u)),f&&f.main){if(typeof f.main!="string"){var D=new TypeError("package \u201C"+f.name+"\u201D `main` must be a string");throw D.code="INVALID_PACKAGE_MAIN",D}(f.main==="."||f.main==="./")&&(f.main="index");try{var s=j(R.resolve(u,f.main));if(s)return s;var a=V(R.resolve(u,f.main));if(a)return a}catch{}}}return j(R.join(u,"/index"))}function M(u,E){for(var f=function(){return pt(u,E,r)},D=d?d(u,E,f,r):f(),s=0;s<D.length;s++){var a=D[s];if(h(R.dirname(a))){var _=j(a);if(_)return _;var l=V(a);if(l)return l}}}}});var cr=b((Ht,ar)=>{var fe=Ze();fe.core=rr();fe.isCore=nr();fe.sync=sr();ar.exports=fe});var ht={};yr(ht,{default:()=>mt});var C=P("@yarnpkg/core");var L=class{project;errorReporter;constructor(e){this.project=e.project,this.errorReporter=e.errorReporter}throwWrongEngineError=(e,t)=>{let r=this.formatErrorMessage(e,t);this.throwError(r)};throwError=e=>{switch(this.errorReporter){case"Yarn":this.reportYarnError(e);break;case"Console":default:this.reportConsoleError(e);break}};reportYarnError=e=>{throw new C.ReportError(C.MessageName.UNNAMED,e)};reportConsoleError=e=>{console.error(e),process.exit(1)};formatErrorMessage=(e,t)=>{let{configuration:r}=this.project,n=C.formatUtils.applyStyle(r,C.formatUtils.pretty(r,this.engine,"green"),2),o=C.formatUtils.pretty(r,e,"cyan"),h=C.formatUtils.pretty(r,t,"cyan"),v=`The current ${n} version ${o} does not satisfy the required version ${h}.`;return C.formatUtils.pretty(r,v,"red")}};var le=P("fs"),be=P("path"),ue=P("semver"),Re=P("@yarnpkg/fslib"),B=P("@yarnpkg/core");var ce=class extends L{get engine(){return"Node"}verifyEngine(e){let t=e.node;if(t!=null)return t===".nvmrc"&&(t=this.resolveNvmRequiredVersion()),(0,ue.satisfies)(process.version,t,{includePrerelease:!0})||this.throwWrongEngineError(process.version.replace(/^v/i,""),t.replace(/^v/i,"")),t}resolveNvmRequiredVersion=()=>{let{configuration:e,cwd:t}=this.project,r=(0,be.resolve)(Re.npath.fromPortablePath(t),".nvmrc"),n=B.formatUtils.applyStyle(e,B.formatUtils.pretty(e,this.engine,"green"),2);if(!(0,le.existsSync)(r)){this.throwError(B.formatUtils.pretty(e,`Unable to verify the ${n} version. The .nvmrc file does not exist.`,"red"));return}let o=(0,le.readFileSync)(r,"utf-8").trim();if((0,ue.validRange)(o))return o;let h=B.formatUtils.pretty(e,".nvmrc","yellow");this.throwError(B.formatUtils.pretty(e,`Unable to verify the ${n} version. The ${h} file contains an invalid semver range.`,"red"))}};var Fe=P("semver"),me=P("@yarnpkg/core");var de=class extends L{get engine(){return"Yarn"}verifyEngine(e){let t=e.yarn;t!=null&&((0,Fe.satisfies)(me.YarnVersion,t,{includePrerelease:!0})||this.throwWrongEngineError(me.YarnVersion,t))}};var ur=Se(cr()),ke=Se(P("path")),dr=P("fs");var lr=P("semver");var ve=class extends L{constructor(t,r,n){super(t);this.nodeRequiredVersion=r;this.dependencyName=n}get engine(){return`${this.dependencyName} Node`}verifyEngine(t){let r=t?.node;if(!!r)return(0,lr.subset)(this.nodeRequiredVersion,r,{includePrerelease:!0})||this.throwWrongEngineError(r.replace(/^v/i,""),this.nodeRequiredVersion.replace(/^v/i,"")),r}};var pr=i=>e=>{if(process.env.PLUGIN_YARN_ENGINES_DISABLE!=null)return;let{engines:t={}}=e.getWorkspaceByCwd(e.cwd).manifest.raw,r={project:e,errorReporter:i};new de(r).verifyEngine(t);let n=new ce(r).verifyEngine(t);if(n&&!process.env.PLUGIN_YARN_DEP_ENGINES_DISABLE){let o=new Set;for(let h of e.workspaces)for(let v of["dependencies","devDependencies"])for(let m of h.manifest[v].values())if(e.tryWorkspaceByDescriptor(m)===null){let d=m.name;m.scope&&(d=ke.default.join(`@${m.scope}`,d));let c=(0,ur.sync)(ke.default.join(d,"package.json"),{includeCoreModules:!1,basedir:h.cwd});if(o.has(c))continue;o.add(c);let p=JSON.parse((0,dr.readFileSync)(c,{encoding:"utf-8"})).engines;new ve(r,n,d).verifyEngine(p)}}},ft=pr("Console"),vt={hooks:{validateProject:pr("Yarn"),setupScriptEnvironment:async i=>ft(i)}},mt=vt;return _r(ht);})();
return plugin;
}
};
