// src/App.jsx
import React from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import './App.css';

const products = [
    {
        image: 'path-to-product-image1.jpg',
        title: 'Product 1',
        price: '19.99',
    },
    {
        image: 'path-to-product-image2.jpg',
        title: 'Product 2',
        price: '29.99',
    },
    // Добавьте больше продуктов по необходимости
];

const App = () => {
    return (
        <>
            <header className="header">
                <h1 className="header-title">REEDROP</h1>
                <button className="header-button">Button</button>
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



