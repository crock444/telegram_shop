// src/App.jsx
import React from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import './App.css';

const products = [
    {
        image: '/images/fors1.jpeg',
        title: 'Nike Tiffany',
        price: '500',
    },
    {
        image: '/images/fors2.png',
        title: 'Nike SB Dunk Low',
        price: '250',
    },
    // Добавьте больше продуктов по необходимости
];

const App = () => {
    return (
        <>
            <header className="header">
                <h1 className="header-title">REEDROP</h1>
                <button className="header-button"></button>
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
    );
};

export default App;



