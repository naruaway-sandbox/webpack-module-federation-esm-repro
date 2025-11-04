import something from "test-pkg-123";
import { formatResultAsHtml } from "./lib.js";

export function logRegularJsResult() {
  document.body.innerHTML += `<div>regular-js.js: ${formatResultAsHtml(something)}</div>`;
}
