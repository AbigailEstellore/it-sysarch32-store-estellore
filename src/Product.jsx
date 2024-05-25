// Product.js

import React, { useState, useEffect } from 'react';
import { db } from './config/firebase'; // Assuming you've already imported the db object
import { collection, getDocs } from 'firebase/firestore';
import './App.css';

function Product({ addToOrders }) {
  const [products, setProducts] = useState([]);
  const [addedMessage, setAddedMessage] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'productDress'));
        const productsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().Name,
          price: doc.data().Price,
          image: doc.data().imageDress,
          description: doc.data().description
        }));
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToOrders = (product) => {
    addToOrders(product);
    setAddedMessage(`${product.name} added to orders successfully!`);
    setTimeout(() => {
      setAddedMessage('');
    }, 3000); // Hide the message after 3 seconds
  };

  return (
    <div>
      {addedMessage && <p>{addedMessage}</p>}
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-card">
            <div className="product-details">
              <img src={product.image} alt={product.image} />
              <div className="product-name">{product.name}</div>
              <div className='product-description'>{product.description}</div>
              <div className="product-price">₱ {product.price}</div>
            </div>
            <button onClick={() => handleAddToOrders(product)}>🛒</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
