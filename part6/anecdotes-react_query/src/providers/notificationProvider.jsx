import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notification, notificationDispatcher] = useReducer(
    notificationReducer,
    null,
  );

  return (
    <NotificationContext.Provider
      value={[notification, notificationDispatcher]}
    >
      {children}
    </NotificationContext.Provider>
  );
};

function notificationReducer(state, { type, payload }) {
  switch (type) {
    case "SET":
      return payload;

    case "RESET":
      return null;

    default:
      return state;
  }
}

export function setNotification(content) {
  return {
    type: "SET",
    payload: content,
  };
}
export function clearNotification() {
  return {
    type: "RESET",
  };
}

export function useNotification() {
  const notificationAndDispatcher = useContext(NotificationContext);
  return notificationAndDispatcher;
}

export function useNotificationDispatcher() {
  const notificationAndDispatcher = useContext(NotificationContext);
  return notificationAndDispatcher[1];
}
