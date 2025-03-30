import express from "express";

const port = 3000;
const app = express();
app.use(express.json());

let dummyData = [
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

app.delete("/api/persons/:id", async (req, res) => {
  const { id } = req.params;

  const newData = dummyData.filter((p) => p.id !== id);

  if (newData.length === dummyData.length) {
    // res.statusMessage = "Person doesn't exsist";
    return res.status(404).send();
  }

  dummyData = newData;
  return res.status(204).send();
});

function generateRandomId() {
  return Math.floor(Math.random() * 1000000);
}

function checkDuplicateId(persons, newId) {
  return persons.some((p) => Number(p.id) === newId);
}

app.post("/api/persons", async (req, res) => {
  let newId = generateRandomId();

  while (checkDuplicateId(dummyData, newId)) {
    newId = generateRandomId();
  }

  const { name, number } = req.body;

  if (!name || !number) {
    return res.status(400).send();
  }

  const newPerson = { id: newId, name, number };

  dummyData.push(newPerson);
  res.status(201).send(newPerson);
});

app.listen(port, () => console.log(`Server started on :${port}`));
