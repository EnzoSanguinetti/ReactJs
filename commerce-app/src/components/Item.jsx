import React from 'react';
import { useCart } from '../context/CartContext';

const Item = ({ product }) => {
    const { addItem } = useCart();

    const handleAddToCart = () => {
        addItem(product);
    };

    return (
        <div className="item">
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <button onClick={handleAddToCart}>Añadir al carrito</button>
        </div>
    );
};

export default Item;
