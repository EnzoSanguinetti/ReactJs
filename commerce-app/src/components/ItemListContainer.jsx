import React from 'react';
import ItemList from './ItemList';
import Description from './Description';

const ItemListContainer = () => {
    const products = [
        { id: 1, name: 'Remera', price: 100, Description: 'remera de algodon casual', stock: 10} ,
        { id: 2, name: 'Pantalon', price: 150, Description: 'pantalon deportivo', stock: 10 },
        { id: 3, name: 'Campera', price: 200, Description, stock: 6 },
    ];

    return (
        <div>
            <h2>Lista de Productos</h2>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
