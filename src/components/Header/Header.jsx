import React from 'react';
import Button from "../Button/Button";

const Header = () => {
    const tg = window.Telegram.WebApp
    const ocClose =() =>{
        tg.close()
    }

    return (
        <div className={'header'}>
            <Button onClick={ocClose()}>Закрыть</Button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;