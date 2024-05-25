import React, { useState } from 'react';
import Product from './Product';
import Orders from './Orders';

function Navbar() {
  const [orders, setOrders] = useState([]);
  const [activeNav, setActiveNav] = useState('Products');

  const addToOrders = (product) => {
    setOrders([...orders, product]);
  };


  return (
    <>
      {activeNav === 'Products' && (
        <>
        <nav>
        <ul>
          <i>
            <a
              href='#'
              onClick={() => setActiveNav('Products')}
            >
              Product
            </a>
          </i>
          <i>
            <a
              href='#'
              onClick={() => setActiveNav('Orders')}
            >
              Order
            </a>
          </i>
        </ul>
      </nav>
      <Product addToOrders={addToOrders} />   
        </>
      )}

{activeNav === 'Orders' && (
        <>
        <nav>
        <ul>
          <i>
            <a
              href='#'
              onClick={() => setActiveNav('Products')}
            >
              Product
            </a>
          </i>
          <i>
            <a
              href='#'
              onClick={() => setActiveNav('Orders')}
            >
              Order
            </a>
          </i>
        </ul>
      </nav>
      <Orders/>   
        </>
      )}
    </>
  );
}

export default Navbar;
