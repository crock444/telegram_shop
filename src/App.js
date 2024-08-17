// src/App.js
import './App.css';
import React, { useState } from "react";
import { useTelegram } from "./hooks/useTelegram";
import SplashScreen from "./components/SplashScreen/SplashScreen";

function App() {
    const { onToggleButton, tg } = useTelegram();
    const [isSplashVisible, setSplashVisible] = useState(true);

    const handleSplashAnimationEnd = () => {
        setSplashVisible(false);
    };

    return (
        <div className="App">
            {isSplashVisible && <SplashScreen onAnimationEnd={handleSplashAnimationEnd} />}
            <div style={{ display: isSplashVisible ? 'none' : 'block' }}>
                <div className="header">
                    <h1 className="header-title">REEDROP</h1>
                    <button onClick={onToggleButton}>Toggle</button>
                </div>
            </div>
        </div>
    );
}

export default App;

