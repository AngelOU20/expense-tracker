import { createContext, useContext } from "react";

export const Context = createContext();

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};
