import React from 'react';

const Brief = ({ cart }) => {
  return (
    <div>
      <h3>Detalle de la compra:</h3>
      <ul>
        {cart.map(item => (
          <li key={item.id}>{item.name} - Cantidad: {item.quantity} - Precio: ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Brief;
