import express from "express";

const port = 3000;
const app = express();
const dummyData = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", async (req, res) => {
  res.status(200).json(dummyData);
});

app.listen(port, () => console.log(`Server started on :${port}`));
