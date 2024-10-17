import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProductById } from '../services/productServices';

const ItemDetailContainer = () => {
  const { id } = useParams();  
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        setLoading(true);
        const fetchedItem = await getProductById(id); 
        setItem(fetchedItem);
      } catch (err) {
        setError('Error loading product details');
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="item-detail-container">
      {item ? <ItemDetail item={item} /> : <div>No esta disponible</div>}
    </div>
  );
};

export default ItemDetailContainer;
