import React, { useState } from 'react';
import './ProductCard.css'; // Убедитесь, что путь к CSS правильный

const ProductCard = ({ productId, image, title, price, onCartCountChange }) => {
    const [quantity, setQuantity] = useState(0);

    const handleAddClick = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            console.log('Добавление: ', newQuantity);
            onCartCountChange(productId, 1);
            return newQuantity;
        });
    };

    const handleDecreaseClick = () => {
        setQuantity(prevQuantity => {
            const newQuantity = Math.max(0, prevQuantity - 1);
            console.log('Уменьшение: ', newQuantity);
            onCartCountChange(productId, -1);
            return newQuantity;
        });
    };


    return (
        <div className="product-card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <b><p>Цена: {price} ₽</p></b>
            {quantity === 0 ? (
                <button className="add-to-cart-button" onClick={handleAddClick}>Добавить</button>
            ) : (
                <div className="quantity-controls">
                    <button className="quantity-button" onClick={handleDecreaseClick}>-</button>
                    <div className="quantity-display">{quantity}</div>
                    <button className="quantity-button" onClick={handleAddClick}>+</button>
                </div>
            )}
        </div>
    );
};

export default ProductCard;




