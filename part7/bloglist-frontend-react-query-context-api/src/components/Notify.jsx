export function Notify({ notification, setNotification }) {
  if (!notification) {
    return null;
  }

  setTimeout(() => {
    setNotification(null);
  }, 3000);

  return (
    <div>
      <h2>{notification}</h2>
    </div>
  );
}
