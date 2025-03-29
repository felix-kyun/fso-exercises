import "./Notify.css";

export function Notify({ message, setMessage }) {
  if (message === null) {
    return null;
  } else {
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  }

  return <div className={`notification notify-${message.level}`}> {message.data}</div>;
}
