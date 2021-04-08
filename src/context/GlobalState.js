import AppReducer from "./AppReducer";
import { React, useReducer, createContext } from "react";
import axios from "axios";

const api_url = "https://immense-ridge-33043.herokuapp.com";

const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  async function getTransactions() {
    try {

      const res = await axios.get(`${api_url}/api/v1/mra/transactions`);

      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({
          type: "TRANSACTION_ERROR",
          payload: error.response.data.error,
        });
      }
      else {
        console.log(`${api_url}/api/v1/mra/transactions`);
        dispatch({
          type: "TRANSACTION_ERROR",
          payload: `${api_url}/api/v1/mra/transactions`,
        });
      }
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`${api_url}/api/v1/mra/transactions/${id}`);

      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        `${api_url}/api/v1/mra/transactions`,
        transaction,
        config
      );

      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
