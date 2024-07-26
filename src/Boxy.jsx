import React, { useState } from 'react';
import React, { useEffect } from 'react';
import './CoinAnimation.css';

const Boxy = (props) => {

    const [flyCoins, setFlyCoins] = useState([]);

    const handleCoinClick = (event) => {
        props.setScore(prevScore => prevScore + 2)
        const { clientX, clientY, target } = event;
        const rect = target.getBoundingClientRect();
        const offsetX = clientX - rect.left;
        const offsetY = clientY - rect.top + 100;
        const newFlyCoin = {
            id: Date.now(),
            left: offsetX - 10,
            top: offsetY - 10,
            textLeft: offsetX - 10 + 20, // Смещение текста вправо
            textTop: offsetY - 10 - 20
        };

        setFlyCoins([...flyCoins, newFlyCoin]);

        setTimeout(() => {
            setFlyCoins((currentFlyCoins) => currentFlyCoins.filter(coin => coin.id !== newFlyCoin.id));
        }, 1000);
    };

    return (
        <>
            <img src="img/coin.png" alt="boxy" className="scale-110 active:scale-100 duration-75" onClick={handleCoinClick} />
            {flyCoins.map(coin => (
                <React.Fragment key={coin.id}>
                    <img
                        src="img/star2.png"
                        alt="Flying Coin"
                        className="fly-coin size-28"
                        style={{ left: `${coin.left}px`, top: `${coin.top}px` }}
                    />
                    <div
                        className="fly-text"
                        style={{ left: `${coin.textLeft}px`, top: `${coin.textTop}px` }}
                    >
                        <p className='text-4xl press-start-2p-regular2'>+1</p>
                    </div>
                </React.Fragment>
            ))}
        </>
    );
};

export default Boxy;