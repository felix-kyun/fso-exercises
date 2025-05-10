import { createContext, useContext } from "react";

export const UserContext = createContext();

export const useUser = () => {
  const userAndDispatch = useContext(UserContext);

  return userAndDispatch;
};
