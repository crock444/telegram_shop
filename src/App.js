import './App.css';
import React, { useState } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
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
                <Header />
                <button onClick={onToggleButton}>toggle</button>
            </div>
        </div>
    );
}

export default App;

