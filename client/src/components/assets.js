import React, { useState } from 'react';
import axios from 'axios';

const Assets = () => {
  const [assets, setAssets] = useState([]);
  const [email, setEmail] = useState('');
  const [stockName, setStockName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [buyDate, setBuyDate] = useState('');

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const addAsset = () => {
    if (email.trim() !== '' && stockName.trim() !== '' && quantity.trim() !== '' && price.trim() !== '' && buyDate.trim() !== '') {
      const newAsset = {
        email: email.trim(),
        stockname: stockName.trim(),
        qty: quantity.trim(),
        price: price.trim(),
        buydate: buyDate.trim()
      };

      axios.post('http://localhost:5000/assetadd', newAsset)
        .then(response => {
          console.log('Asset added successfully:', response.data);
          setAssets([...assets, newAsset]);
          setEmail('');
          setStockName('');
          setQuantity('');
          setPrice('');
          setBuyDate('');
        })
        .catch(error => {
          console.error('Error adding asset:', error);
        });
    }
  };

  return (
    <div>
      <h2>Assets Tracker</h2>
      <div>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => handleInputChange(e, setEmail)} 
          placeholder="Email" 
        />
        <input 
          type="text" 
          value={stockName} 
          onChange={(e) => handleInputChange(e, setStockName)} 
          placeholder="Stock Name" 
        />
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => handleInputChange(e, setQuantity)} 
          placeholder="Quantity" 
        />
        <input 
          type="number" 
          value={price} 
          onChange={(e) => handleInputChange(e, setPrice)} 
          placeholder="Price" 
        />
        <input 
          type="date" 
          value={buyDate} 
          onChange={(e) => handleInputChange(e, setBuyDate)} 
        />
        <button onClick={addAsset}>Add Asset</button>
      </div>
      <ul>
        {assets.map((asset, index) => (
          <li key={index}>
            <strong>{asset.stockname}</strong> - Quantity: {asset.qty}, Price: ${asset.price}, Buy Date: {asset.buydate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Assets;
