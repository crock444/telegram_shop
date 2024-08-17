// src/components/SplashScreen.js
import React, { useEffect, useState } from 'react';
import './SplashScreen.css'; // Убедитесь, что CSS подключен правильно

const SplashScreen = ({ onAnimationEnd }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onAnimationEnd();
        }, 1000); // Задержка в 1 секунду

        return () => clearTimeout(timer);
    }, [onAnimationEnd]);

    return (
        <div className={`splash-screen ${isVisible ? 'fade-in' : 'fade-out'}`}>
            <img src="/logo.jpg" alt="Logo" />
        </div>
    );
};

export default SplashScreen;

