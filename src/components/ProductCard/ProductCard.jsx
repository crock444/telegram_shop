// src/components/ProductCard/ProductCard.jsx
import React from 'react';
import './ProductCard.css'; // Убедитесь, что путь к CSS правильный

const ProductCard = ({ image, title, price }) => {
    return (
        <div className="product-card">
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <b><p>Цена: {price} ₽</p></b>
            <button className="add-to-cart-button">Добавить</button>
        </div>
    );
};

export default ProductCard;


