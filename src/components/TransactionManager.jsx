import React, { useState } from 'react';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';

const TransactionManager = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Transaction Manager</h4>
        <TransactionForm onAddTransaction={addTransaction} />
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
};

export default TransactionManager;