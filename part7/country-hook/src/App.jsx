import React, { useState } from "react";
import axios from "axios";
import { useField } from "./hooks/useField";
import { useCountry } from "./hooks/useCountry";
import { Country } from "./components/Country";

const App = () => {
  const nameInput = useField("text");
  const [name, setName] = useState("");
  const country = useCountry(name);

  const fetch = (e) => {
    e.preventDefault();
    setName(nameInput.value);
  };

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  );
};

export default App;
