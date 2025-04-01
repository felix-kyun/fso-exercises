export function morganCustomFormat(tokens, req, res) {
  const responseBody = ["POST", "PUT"].includes(tokens.method(req, res))
    ? JSON.stringify(req.body)
    : "";

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
