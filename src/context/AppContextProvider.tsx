import { createContext, useReducer } from "react";

export const AppContext = createContext<any>("");

export enum ACTIONS {
  SIGNIN,
  SIGNOUT,
}
const reducer = (state: any, action: any) => {
  if (action.type == ACTIONS.SIGNIN) {
    return {
      ...state,
      isAuthenticated: true,
      token: action.payload.token,
    };
  }
};
export default function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, {
    isAuthenticated: false,
    token: null,
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
