import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  // Access the addTransaction function from the global context
  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) {
      alert("Please enter a valid text");
      return;
    }

    if (isNaN(amount) || amount === 0) {
      alert("Please enter a valid amount");
      return;
    }

    // Create a new transaction object
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000), // Generate a unique ID
      text,
      amount: +amount, // Convert to number
    };

    // Add the new transaction to the global state
    addTransaction(newTransaction);

    // Reset form fields
    setText("");
    setAmount(0);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    // If the input is empty, set amount to 0
    if (value === "") {
      setAmount(0);
    } else {
      // Otherwise, parse the value as a float
      const parsedValue = parseFloat(value);
      // Only update the state if the parsed value is a valid number
      if (!isNaN(parsedValue)) {
        setAmount(parsedValue);
      }
    }
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount === 0 ? "" : amount} // Avoid displaying "0" when the input is empty
            onChange={handleAmountChange}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;