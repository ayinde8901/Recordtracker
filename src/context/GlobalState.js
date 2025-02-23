import { createContext, useReducer } from "react";


// Define the initial state
const initialState = {
  transactions: [
    { id: 1, text: "Salary", amount: 5000 }, // Positive: Income
    { id: 2, text: "Groceries", amount: -150 }, // Negative: Expense
    { id: 3, text: "Freelance Work", amount: 1200 }, // Positive: Income
    { id: 4, text: "Electricity Bill", amount: -200 }, // Negative: Expense
  ],
};

// Create a context for the global state
export const GlobalContext = createContext(initialState);

// Define the reducer function
const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

// Create a provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Action to add a transaction
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  // Action to delete a transaction
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};