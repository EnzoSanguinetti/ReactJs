import React, { useContext } from 'react';
import CartWidget from './CartWidget';
import { CartContext } from '../context/CartContext';

const NavBar = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <nav>
      <h1>Mi E-Commerce</h1>
      <ul>
        <li>Inicio</li>
        <li>Categorías</li>
        <li>Contacto</li>
      </ul>
      <CartWidget totalItems={totalItems} />
    </nav>
  );
};

export default NavBar;
