export function morganCustomFormat(tokens, req, res) {
  const responseBody =
    tokens.method(req, res) === "POST" ? JSON.stringify(req.body) : "";

  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, "content-length"),
    "-",
    tokens["response-time"](req, res),
    "ms",
    responseBody,
  ].join(" ");
}
