import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Checkout.css'; 

const Checkout = () => {
    const { cart, clearCart } = useCart();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Pedido realizado:', { name, email, phone, cart });
        clearCart();
        alert('¡Gracias por tu compra!');
    };

    return (
        <div className="checkout-container">
            <h2>Llena el Formulario</h2>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="phone">Teléfono:</label>
                        <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <button type="submit">Realizar Pedido</button>
                </form>
            )}
        </div>
    );
};

export default Checkout;
