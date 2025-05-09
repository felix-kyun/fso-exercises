import { useSelector } from "react-redux";

export function Notify() {
  const notification = useSelector((state) => state.notify.content);

  if (notification === "") {
    return null;
  }

  return (
    <div>
      <h2>{notification}</h2>
    </div>
  );
}
