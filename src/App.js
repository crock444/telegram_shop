// src/App.jsx
import React, { useState } from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import SplashScreen from './components/SplashScreen/SplashScreen';
import './App.css';

const products = [
    {
        image: '/images/fors1.jpeg',
        title: 'Nike Tiffany',
        price: '250.000',

    },
    {
        image: '/images/fors2.png',
        title: 'Nike SB Dunk Low',
        price: '120.000',
    },
    // Добавьте больше продуктов по необходимости
];

const App = () => {
    const [isSplashVisible, setSplashVisible] = useState(true);

    const handleSplashAnimationEnd = () => {
        setSplashVisible(false);
    };

    return (
        <>
            {isSplashVisible && <SplashScreen onAnimationEnd={handleSplashAnimationEnd} />}
            {!isSplashVisible && (
                <>
                    <header className="header">
                        <h1 className="header-title">REEDROP</h1>
                        <button className="header-button">Поддержка</button>
                    </header>
                    <div className="app">
                        <div className="product-list">
                            {products.map((product, index) => (
                                <ProductCard
                                    key={index}
                                    image={product.image}
                                    title={product.title}
                                    price={product.price}
                                />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default App;




