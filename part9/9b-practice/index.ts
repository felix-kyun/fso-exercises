import express from "express";

const PORT = 3000;
const app = express();

app.get("/ping", async (_req, res) => {
    res.send("pong");
});

app.get("/hello", async (_req, res) => {
    res.send("Hello Full Stack!");
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
