import React from 'react';
import CurrencyConverter from './components/CurrencyConverter';
import TransactionManager from './components/TransactionManager';
import './App.css';

function App() {
  return (
    <div className="container py-4">
      <header className="text-center mb-4">
        <h1 className="text-primary">Personal Financial Management</h1>
        <p className="text-muted">Manage your finances effectively</p>
      </header>
      <CurrencyConverter />
      <TransactionManager />
    </div>
  );
}

export default App;