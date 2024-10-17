import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cart, removeItem } = useCart();

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                {item.name} - ${item.price}
                                <button onClick={() => removeItem(item.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    <Link to="/checkout">
                        <button>Proceder a finalizar la compra</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
