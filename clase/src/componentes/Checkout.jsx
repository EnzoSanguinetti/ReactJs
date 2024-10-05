import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    alert('Compra realizada con éxito');
    clearCart();
  };

  return (
    <div>
      <h2>Resumen de compra</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>{item.name} - Cantidad: {item.quantity}</li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Finalizar compra</button>
    </div>
  );
};

export default Checkout;
