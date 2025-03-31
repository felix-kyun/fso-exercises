export async function logger(req, res, next) {
  const { log } = console;

  log(`${req.method} ${req.path} ${new Date().toISOString()}`);
  log(`Body: ${JSON.stringify(req.body)}`);

  next();
}
