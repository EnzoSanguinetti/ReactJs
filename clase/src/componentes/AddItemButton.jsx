import React from 'react';

const AddItemButton = ({ onAdd }) => {
  return (
    <button onClick={onAdd}>Añadir al carrito</button>
  );
};

export default AddItemButton;
