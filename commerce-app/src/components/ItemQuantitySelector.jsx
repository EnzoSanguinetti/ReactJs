import React, { useState } from 'react';

const ItemQuantitySelector = ({ stock, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity < stock) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className="quantity-selector">
      <button onClick={handleDecrease}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default ItemQuantitySelector;
