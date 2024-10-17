import React, { useState, useContext } from 'react';
import Description from './Description';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';
import { useCart } from '../context/CartContext'; 

const ItemDetail = ({ item }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { addItem } = useCart(); 

  const handleQuantityChange = (quantity) => {
    setSelectedQuantity(quantity);
  };

  const handleAddToCart = (item, quantity) => {
    addItem(item, quantity);  
    console.log(`Added ${quantity} ${item.name} to the cart`);
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-detail">
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} />
      <p>Price: ${item.price}</p>

      <Description text={item.description} />

      {}
      <ItemQuantitySelector stock={item.stock} onQuantityChange={handleQuantityChange} />

      {}
      <AddItemButton onAdd={handleAddToCart} quantity={selectedQuantity} item={item} />
    </div>
  );
};

export default ItemDetail;
