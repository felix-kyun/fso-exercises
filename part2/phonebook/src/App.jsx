import { useState } from "react";
import { CreationForm } from "./CreationForm";
import { PersonRenderer } from "./PersonsRenderer";
import { useEffect } from "react";
import { getAllPersons } from "./misc/server.mjs";
import { Notify } from "./Notify";

function App() {
  const [persons, setPersons] = useState([]);
  const [message, setMessage] = useState({ level: "info", data: "hii there!!"});

  useEffect(() => {
    getAllPersons().then((p) => setPersons(p));
  }, []);

  return (
    <>
      <h1>PhoneBook</h1>
      <Notify message={message} setMessage={setMessage} />
      <CreationForm persons={persons} setPersons={setPersons} setMessage={setMessage}/>
      <PersonRenderer persons={persons} setPersons={setPersons} setMessage={setMessage}/>
    </>
  );
}

export default App;
