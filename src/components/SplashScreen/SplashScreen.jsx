// src/components/SplashScreen.js
import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onAnimationEnd }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Показать SplashScreen на 4 секунды
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000); // 3 секунды

        // Скрытие SplashScreen с задержкой для анимации
        const hideTimer = setTimeout(() => {
            onAnimationEnd();
        }, 4000); // 4 секунды, чтобы совпало с временем анимации

        return () => {
            clearTimeout(timer);
            clearTimeout(hideTimer);
        };
    }, [onAnimationEnd]);

    return (
        <div className={`splash-screen ${isVisible ? 'fade-in' : 'fade-out'}`}>
            <img src="/logo.png" alt="Logo" />
        </div>
    );
};

export default SplashScreen;


