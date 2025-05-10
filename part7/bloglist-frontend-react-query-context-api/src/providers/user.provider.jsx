import { useReducer } from "react";
import { UserContext } from "../contexts/user.context.mjs";
import { userInitialState, userReducer } from "../reducers/user.reducer.mjs";

export const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, userInitialState);

  return (
    <UserContext.Provider value={[user, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
