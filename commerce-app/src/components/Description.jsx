import React from 'react';
import './Description.css'; 

const Description = ({ description }) => {
    return (
        <div className="description-container">
            <h2>Descripción del Producto</h2>
            <p>{description ? description : "Ropa de muy buena calidad"}</p>
        </div>
    );
};

export default Description;
