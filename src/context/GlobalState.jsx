import PropTypes from "prop-types";
import { Context } from "../hooks/useGlobalState";
import { useEffect, useReducer } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
  transactions: [],
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    AppReducer,
    initialState,
    // localStorage
    () => {
      const localData = localStorage.getItem("transactions");
      return localData ? JSON.parse(localData) : initialState; // [id: 123asdasd2, description: "Description", amount: 1000]
    }
  );

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state));
  }, [state]);

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node,
};
