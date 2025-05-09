import { useEffect } from "react";
import {
  notificationInitialState,
  notificationReducer,
} from "../reducers/notification.reducer.jsx";
import { NotificationContext } from "../contexts/notification.context.mjs";
import { useContext, useReducer } from "react";
import { setNotificationAction } from "../reducers/notification.reducer.jsx";

export const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    notificationReducer,
    notificationInitialState,
  );

  // automatically reset the notification after 5 seconds
  useEffect(() => {
    if (state.notification) {
      const timeout = setTimeout(() => {
        dispatch({ type: "RESET" });
      }, 5000);

      dispatch({ type: "SET_TIMEOUT", payload: timeout });
    }
  }, [dispatch, state.notification]);

  return (
    <NotificationContext.Provider value={[state, dispatch]}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useSetNotification = () => {
  const [_, dispatch] = useContext(NotificationContext);

  const setNotification = (notification) =>
    dispatch(setNotificationAction(notification));

  return setNotification;
};

export const useNotification = () => {
  const [state, _] = useContext(NotificationContext);

  return state.notification;
};
