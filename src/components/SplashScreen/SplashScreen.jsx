import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onAnimationEnd }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onAnimationEnd();
        }, 50000);

        return () => clearTimeout(timer);
    }, [onAnimationEnd]);

    return (
        <div className={`splash-screen ${isVisible ? 'fade-in' : 'fade-out'}`}>
            <p>Loading...</p> {/* Временный текст для проверки */}
            <img src="/logo.jpg" alt="Logo" />
        </div>
    );
};

export default SplashScreen;

