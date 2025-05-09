export const notificationInitialState = {
  notification: null,
  timeout: null,
};

export const notificationReducer = (
  { notification, timeout },
  { type, payload },
) => {
  switch (type) {
    case "SET":
      if (timeout) clearTimeout(timeout);

      return {
        notification: payload,
      };

    case "RESET":
      return { ...notificationInitialState };

    case "SET_TIMEOUT":
      return {
        notification,
        timeout: payload,
      };
  }
};

export const setNotificationAction = (notification) => {
  return {
    type: "SET",
    payload: notification,
  };
};
