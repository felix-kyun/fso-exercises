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

app.get("/api/info", async (req, res) => {
  res.status(200).send(
    `Phonebook has info for ${dummyData.length} people
${new Date().toString()}`,
  );
});

app.get("/api/persons/:id", async (req, res) => {
  const { id } = req.params;
  const person = dummyData.find(({ id: pid }) => pid === id);

  if (!id || !person) {
    res.statusMessage = "Person doesn't exsist";
    return res.status(404).send();
  }

  return res.status(200).json(person);
});

app.listen(port, () => console.log(`Server started on :${port}`));
