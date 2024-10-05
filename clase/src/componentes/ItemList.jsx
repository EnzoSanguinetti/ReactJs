import React from 'react';
import ItemDetailContainer from './ItemDetailContainer';

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <ItemDetailContainer key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
