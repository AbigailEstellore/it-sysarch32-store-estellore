// App.js

import React, { useState } from 'react';
import Product from './Product';
import Orders from './Orders';

function App() {
  const [displayOrders, setDisplayOrders] = useState(false);
  const [orders, setOrders] = useState([]);

  const addToOrders = (product) => {
    const orderId = Date.now().toString();
    setOrders([...orders, { id: orderId, ...product }]);
  };

  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => setDisplayOrders(false)}>Products</li>
          <li onClick={() => setDisplayOrders(true)}>Orders</li>
        </ul>
      </nav>
      {displayOrders ? (
        <Orders orders={orders} />
      ) : (
        <Product addToOrders={addToOrders} />
      )}
    </div>
  );
}

export default App;
9