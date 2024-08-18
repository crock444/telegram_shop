import React, { useState } from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import SplashScreen from './components/SplashScreen/SplashScreen';
import CartButton from './components/CartButton/CartButton';
import './App.css';

// Пример продуктов с уникальными идентификаторами
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
    // Добавьте больше продуктов по необходимости
];

const App = () => {
    const [isSplashVisible, setSplashVisible] = useState(true);
    const [cartItems, setCartItems] = useState({}); // Хранит количество каждого товара в корзине

    // Функция, вызываемая после завершения анимации сплэш-экрана
    const handleSplashAnimationEnd = () => {
        setSplashVisible(false);
    };

    // Функция для изменения количества товаров в корзине
    const handleCartCountChange = (productId, quantityChange) => {
        setCartItems(prevItems => {
            const newItems = { ...prevItems };
            // Если товар уже есть в корзине, обновляем его количество
            if (newItems[productId]) {
                newItems[productId] = Math.max(0, newItems[productId] + quantityChange);
                // Удаляем товар из корзины, если его количество стало нулевым
                if (newItems[productId] === 0) {
                    delete newItems[productId];
                }
            } else if (quantityChange > 0) {
                // Если товар добавляется впервые
                newItems[productId] = quantityChange;
            }
            return newItems;
        });
    };

    // Функция для подсчета общего количества товаров в корзине
    const getCartCount = () => {
        return Object.values(cartItems).reduce((sum, count) => sum + count, 0);
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
                            {products.map(product => (
                                <ProductCard
                                    key={product.id}
                                    productId={product.id} // Передаем уникальный идентификатор
                                    image={product.image}
                                    title={product.title}
                                    price={product.price}
                                    onCartCountChange={handleCartCountChange}
                                />
                            ))}
                        </div>
                    </div>
                    <CartButton cartCount={getCartCount()} />
                </>
            )}
        </>
    );
};

export default App;




