export const userInitialState = null;

export const userReducer = (user, { type, payload }) => {
  switch (type) {
    case "SET":
      return payload;
    case "RESET":
      return null;
    default:
      return user;
  }
};

export const setUserAction = (user) => ({
  type: "SET",
  payload: user,
});

export const resetUserAction = () => ({ type: "RESET" });
