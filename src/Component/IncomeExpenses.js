import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
  // Access the transactions array from the global state
  const { transactions } = useContext(GlobalContext);

  // Calculate total income
  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0) // Filter positive amounts (income)
    .reduce((acc, transaction) => acc + transaction.amount, 0) // Sum up income
    .toFixed(2); // Format to 2 decimal places

  // Calculate total expenses
  const totalExpenses = transactions
    .filter((transaction) => transaction.amount < 0) // Filter negative amounts (expenses)
    .reduce((acc, transaction) => acc + transaction.amount, 0) // Sum up expenses
    .toFixed(2); // Format to 2 decimal places

  return (
    <div className='inc-exp-container'>
      <div className="income">
        <h4>Income</h4>
        <p id='money-plus' className='money-plus'>
          +${totalIncome}
        </p>
      </div>
      <div className="expense">
        <h4>Expense</h4>
        <p id='money-minus' className='money-minus'>
          -${Math.abs(totalExpenses)} {/* Display absolute value of expenses */}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;