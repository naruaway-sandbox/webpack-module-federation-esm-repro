import something from "test-pkg-123";
import { formatResultAsHtml } from "./lib.js";

export function logPureEsmResult() {
  document.body.innerHTML += `<div>pure-esm.mjs: ${formatResultAsHtml(something)}</div>`;
}
