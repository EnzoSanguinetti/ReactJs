import React from 'react';

const Description = ({ product }) => {
    return (
        <div className="description">
            <h3>Descripción del Producto</h3>
            <p>{product.description}</p>
            <ul>
                <li><strong>Material:</strong> {product.material}</li>
                <li><strong>Dimensiones:</strong> {product.dimensions}</li>
                <li><strong>Peso:</strong> {product.weight}</li>
                <li><strong>Colores disponibles:</strong> {product.availableColors.join(', ')}</li>
            </ul>
        </div>
    );
};

export default Description;
