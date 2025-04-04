import chalk from "chalk";
import stringLength from "string-length";

function rpad(str, len) {
  const strlen = stringLength(str);
  return str + (strlen > len ? "" : " ".repeat(len - strlen));
}

export function log(content, { prefix = "log", color = "white" } = {}) {
  if (process.env.NODE_ENV !== "test") {
    const time = new Date().toTimeString().split(" ")[0];
    const log_prefix = `[${rpad(`${chalk[color].bold(prefix)}`, 7)}] ${time}`;
    console.log(`${log_prefix} ${chalk[color](content)}`);
  }
}

export function logError(content, prefix = "error") {
  log(content, { prefix, color: "red" });
}

export function logSuccess(content, prefix = "success") {
  log(content, { prefix, color: "green" });
}

export function logWarning(content, prefix = "warning") {
  log(content, { prefix, color: "yellow" });
}

export function logInfo(content, prefix = "info") {
  log(content, { prefix, color: "blue" });
}
