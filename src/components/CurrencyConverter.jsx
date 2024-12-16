import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [currency, setCurrency] = useState('USD');
  const [rates, setRates] = useState({});
  const apiKey = "0447f2d6a0d4858333e887a7"

  useEffect(() => {
    axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`)
      .then((response) => setRates(response.data.conversion_rates))
      .catch((error) => console.error('Error fetching rates:', error));
  }, []);

  const handleConvert = () => {
    if (currency && rates[currency]) {
      setConvertedAmount(amount * rates[currency]);
    }
  };
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h4 className="card-title">Currency Converter</h4>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount (USD):</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="currency" className="form-label">Convert to:</label>
          <select
            className="form-select"
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            {Object.keys(rates).map((curr) => (
              <option key={curr} value={curr}>{curr}</option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary" onClick={handleConvert}>Convert</button>
        {convertedAmount !== null && (
          <p className="mt-3">Converted Amount: {convertedAmount.toFixed(2)} {currency}</p>
        )}
      </div>
    </div>
  );
};

export default CurrencyConverter;