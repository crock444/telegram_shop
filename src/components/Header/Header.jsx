import React from 'react';
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const { user, onClose } = useTelegram();

    return (
        <div className='header'>
            <Button onClick={onClose}>Закрыть</Button>
            <h1 className='header-title'>REEDROP</h1>
        </div>
    );
};

export default Header;


