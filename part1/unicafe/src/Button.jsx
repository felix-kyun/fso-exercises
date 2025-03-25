import "./Button.css";

export function Button({ text, onClick }) {
  return <button className="myButton" onClick={onClick}>{text}</button>;
}
