import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <ul className="list-group">
      {transactions.map((transaction, index) => (
        <li key={index} className="list-group-item">
          <strong>{transaction.category}</strong>: ${transaction.amount} on {transaction.date}
          <br />
          <em>{transaction.note}</em>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;