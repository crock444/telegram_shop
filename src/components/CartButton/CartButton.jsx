import React from 'react';
import './CartButton.css';

const CartButton = ({ cartCount }) => {
    const handleClick = () => {
        console.log('Cart button clicked');
    };

    return (
        <div className="cart-button" onClick={handleClick}>
            <span className="cart-count">{cartCount}</span>
        </div>
    );
};

export default CartButton;


