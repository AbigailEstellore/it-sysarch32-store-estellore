import React, { useState } from 'react';

function Orders({ orders, onDeleteCard }) {

  const [filteredOrders, setFilteredOrders] = useState(orders);

  const handleDeleteCard = (orderId) => {
    onDeleteCard(orderId);
    const filteredOrders = orders.filter(order => order.id !== orderId);
    setFilteredOrders(filteredOrders);
  };

  return (
    <div>
      <h2>Orders</h2>
      <div className="orders-container">
        {filteredOrders.map(order => (
          <div key={order.id} className="order-card">
            <img src={order.image} alt={order.name} className="order-image" />
            <div className="order-details">
              <div>Order ID: {order.id}</div>
              <div>Name: {order.name}</div>
              <div>Price: ₱ {order.price}</div>
              <button onClick={() => handleDeleteCard(order.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;

