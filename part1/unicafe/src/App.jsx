import { useState } from "react";
import { Button } from "./Button";
import { Stats } from "./Stats";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <div>
        <h1>Give Feedback</h1>
        <Button text="Good" onClick={() => setGood(good + 1)} />
        <Button text="Neutral" onClick={() => setNeutral(neutral + 1)} />
        <Button text="Bad" onClick={() => setBad(bad + 1)} />
      </div>
      <div>
        <h1>Statistics</h1>
        <Stats text="Good" value={good} />
        <Stats text="Neutral" value={neutral} />
        <Stats text="Bad" value={bad} />
      </div>
    </>
  );
}

export default App;
