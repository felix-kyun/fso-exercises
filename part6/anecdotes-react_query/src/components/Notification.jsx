import { useContext } from "react";
import {
  clearNotification,
  NotificationContext,
  useNotification,
} from "../providers/notificationProvider";
import { useEffect } from "react";

const Notification = () => {
  const [notification, notficationDispatcher] = useNotification();

  // timeout to clear notification after 5 seconds
  useEffect(() => {
    if (notification) {
      setTimeout(() => notficationDispatcher(clearNotification()), 5000);
    }
  }, [notification, notficationDispatcher]);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  };

  if (!notification) return null;

  return <div style={style}>{notification}</div>;
};

export default Notification;
