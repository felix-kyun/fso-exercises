import { useNotification } from "../providers/notification.provider";

export function Notify() {
  const notification = useNotification();
  if (!notification) {
    return null;
  }

  return (
    <div>
      <h2>{notification}</h2>
    </div>
  );
}
