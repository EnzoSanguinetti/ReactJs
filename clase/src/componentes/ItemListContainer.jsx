import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const items = [
      { id: 1, name: 'Producto 1', price: 100 },
      { id: 2, name: 'Producto 2', price: 200 },
    ];
    setProducts(items);
  }, []);

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
