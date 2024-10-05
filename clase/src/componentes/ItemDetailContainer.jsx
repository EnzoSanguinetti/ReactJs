import React from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ product }) => {
  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
