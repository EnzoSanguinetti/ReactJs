import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './context/CartContext';


const App = () => {
    return (
        <CartProvider>
            <Router>
                <Navbar />
                <CartWidget />
                <Routes>
                    <Route path="/" element={<div>Inicio</div>} />
                    <Route path="/productos" element={<ItemListContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </Router>
        </CartProvider>
    );
};

export default App;
