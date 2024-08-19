import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import SplashScreen from './components/SplashScreen/SplashScreen';
import CartButton from './components/CartButton/CartButton';
import './App.css';

const products = [
    {
        id: 1,
        image: '/images/fors1.jpeg',
        title: 'Nike Tiffany',
        price: '250.000',
    },
    {
        id: 2,
        image: '/images/fors2.png',
        title: 'Nike SB Dunk Low',
        price: '120.000',
    },
];

const App = () => {
    const [isSplashVisible, setSplashVisible] = useState(true);
    const [cartItems, setCartItems] = useState({});
    const [showCartButton, setShowCartButton] = useState(false);

    const handleSplashAnimationEnd = () => {
        setSplashVisible(false);
    };

    const handleCartCountChange = (productId, quantityChange) => {
        setCartItems(prevItems => {
            const newItems = { ...prevItems };
            if (newItems[productId]) {
                newItems[productId] = Math.max(0, newItems[productId] + quantityChange);
                if (newItems[productId] === 0) {
                    delete newItems[productId];
                }
            } else if (quantityChange > 0) {
                newItems[productId] = quantityChange;
            }
            window.localStorage.setItem('cartItems', JSON.stringify(newItems)); // Save to localStorage
            console.log('Saved cart items:', newItems); // Debug
            return newItems;
        });
    };



    const getCartCount = () => {
        return Object.values(cartItems).reduce((sum, count) => sum + count, 0);
    };

    useEffect(() => {
        setShowCartButton(getCartCount() > 0);
    }, [cartItems]);

    const cartCount = getCartCount();

    const handleSupportClick = () => {
        window.open('https://t.me/crocky21', '_blank');
    };

    const openCartWindow = () => {
        window.open('http://localhost:3001/cart', '_blank'); // Убедитесь, что путь правильный
    };


    return (
        <>
            {isSplashVisible && <SplashScreen onAnimationEnd={handleSplashAnimationEnd} />}
            {!isSplashVisible && (
                <>
                    <header className="header">
                        <h1 className="header-title">REEDROP</h1>
                        <button className="header-button" onClick={handleSupportClick}>
                            Поддержка
                        </button>
                    </header>
                    <div className="app">
                        <div className="product-list">
                            {products.map(product => (
                                <ProductCard
                                    key={product.id}
                                    productId={product.id}
                                    image={product.image}
                                    title={product.title}
                                    price={product.price}
                                    onCartCountChange={handleCartCountChange}
                                />
                            ))}
                        </div>
                    </div>
                    {showCartButton && (
                        <CartButton cartCount={cartCount} onClick={openCartWindow} />
                    )}
                </>
            )}
        </>
    );
};

export default App;





