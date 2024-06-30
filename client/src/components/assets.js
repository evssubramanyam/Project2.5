import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for HTTP requests

const Assets = () => {
  const [assets, setAssets] = useState([]);
  const [stockName, setStockName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [buyDate, setBuyDate] = useState('');

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const addAsset = () => {
    if (stockName.trim() !== '' && quantity.trim() !== '' && price.trim() !== '' && buyDate.trim() !== '') {
      const newAsset = {
        stockName: stockName.trim(),
        quantity: quantity.trim(),
        price: price.trim(),
        buyDate: buyDate.trim()
      };
      
      // Send data to backend
      axios.post('http://localhost:5000/addAsset', newAsset)
        .then(response => {
          console.log('Asset added successfully:', response.data);
          // Optionally, you can update state or perform any actions upon successful submission
          setAssets([...assets, newAsset]); // Update local state with new asset
          setStockName('');
          setQuantity('');
          setPrice('');
          setBuyDate('');
        })
        .catch(error => {
          console.error('Error adding asset:', error);
          // Handle error scenarios
        });
    }
  };

  const removeAsset = (index) => {
    const newAssets = assets.filter((_, i) => i !== index);
    setAssets(newAssets);
  };

  return (
    <div>
      <h2>Assets Tracker</h2>
      <div>
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
            <strong>{asset.stockName}</strong> - Quantity: {asset.quantity}, Price: ${asset.price}, Buy Date: {asset.buyDate}
            <button onClick={() => removeAsset(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Assets;
