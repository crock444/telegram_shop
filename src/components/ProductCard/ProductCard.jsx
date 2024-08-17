// src/components/ProductCard/ProductCard.jsx
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title, price }) => {
    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-image" />
            <div className="product-info">
                <h3 className="product-title">{title}</h3>
                <p className="product-price">${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;

