import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/cart">Carrito</Link></li>
                <li><Link to="/checkout">Finalizar compra</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
