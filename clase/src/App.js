import React from 'react';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <NavBar />
      <ItemListContainer />
    </CartProvider>
  );
}

export default App;
