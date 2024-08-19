import React from 'react';
import './CartButton.css';

const CartButton = ({ cartCount, onClick }) => {
    return (
        <div className="cart-button" onClick={onClick}>
            <span className="cart-count">{cartCount}</span>
        </div>
    );
};

export default CartButton;



