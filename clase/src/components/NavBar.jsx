import React from 'react';
import CartWidget from './Cartwidget.jsx';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#333', color: 'white' }}>
      <h1>Mi Tienda</h1>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
