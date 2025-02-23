import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const totalBalance = transactions
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id='balance' className={totalBalance < 0 ? 'negative' : ''}>
        ${totalBalance}
      </h1>
    </div>
  );
};

export default Balance;