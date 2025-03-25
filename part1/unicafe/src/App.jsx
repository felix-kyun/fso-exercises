import { useState } from "react";
import { Button } from "./Button";
import { Stats } from "./Stats";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

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
        <Stats text="Total" value={total} />
        <Stats text={"Average"} value={average.toFixed(2)} />
        <Stats text={"Positive"} value={positive.toFixed(2)} />
      </div>
    </>
  );
}

export default App;
