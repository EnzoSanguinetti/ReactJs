import React from 'react';

const CartWidget = ({ totalItems }) => {
  return (
    <div>
      <span>🛒</span>
      <span>{totalItems()}</span> {}
    </div>
  );
};

export default CartWidget;
