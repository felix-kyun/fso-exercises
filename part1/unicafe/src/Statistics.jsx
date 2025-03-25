import { Stats } from "./StatisticsLine";

export function Statistics({ good, neutral, bad }) {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  if (total === 0)
    return (
      <div>
        <h1>Statistics</h1>
        <span>No Feedback Given</span>
      </div>
    );

  return (
    <table>
      <thead>
        <tr>
          <th>Statistics</th>
        </tr>
      </thead>
      <tbody>
        <Stats text="Good" value={good} />
        <Stats text="Neutral" value={neutral} />
        <Stats text="Bad" value={bad} />
        <Stats text="Total" value={total} />
        <Stats text="Average" value={average.toFixed(2)} />
        <Stats text="Positive" value={positive.toFixed(2)} />
      </tbody>
    </table>
  );
}
