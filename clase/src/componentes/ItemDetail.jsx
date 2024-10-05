import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <AddItemButton onAdd={handleAddToCart} />
    </div>
  );
};

export default ItemDetail;
