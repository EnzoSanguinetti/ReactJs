import React from 'react';

const AddItemButton = ({ onAdd, quantity, item }) => {
  const handleAddToCart = () => {
    onAdd(item, quantity);
  };

  return (
    <button onClick={handleAddToCart} className="add-item-button">
      Agregar {quantity} al carrito
    </button>
  );
};

export default AddItemButton;
