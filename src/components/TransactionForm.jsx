import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction({ amount, category, date, note });
    setAmount('');
    setCategory('');
    setDate('');
    setNote('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">Amount:</label>
        <input
          type="number"
          className="form-control"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category:</label>
        <input
          type="text"
          className="form-control"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">Date:</label>
        <input
          type="date"
          className="form-control"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="note" className="form-label">Note:</label>
        <textarea
          className="form-control"
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-success">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;