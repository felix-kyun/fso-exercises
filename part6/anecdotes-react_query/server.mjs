import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const validateRequest = (req, res, next) => {
  const { content } = req.body;

  console.log(req.body);

  if (request.method === "POST" && (!content || content.length < 5)) {
    return res.status(400).json({
      error: "Content must be at least 5 characters long.",
    });
  } else next();
};

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(validateRequest);
server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});
