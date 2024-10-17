import React from 'react';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
    const { cart } = useCart();

    return (
        <div>
            <h2>Carrito</h2>
            <p>Artículos en el carrito: {cart.length}</p>
        </div>
    );
};

export default CartWidget;
