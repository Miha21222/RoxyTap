import React, { useState, useContext } from 'react';
import './CoinAnimation.css';
import { ConfigContext } from './context/ConfigContext';

const Boxy = () => {

    const [flyCoins, setFlyCoins] = useState([]);
    const { configValue } = useContext(ConfigContext);
    const { setConfigValue } = useContext(ConfigContext);
    const { setScore } = useContext(ConfigContext);

    const handleCoinClick = (event) => {
        event.preventDefault(); // Предотвращаем стандартное поведение, чтобы не было задержек
        const touch = event.touches[0]; // Получаем первую точку касания
        const { clientX, clientY, target } = touch;
        const rect = target.getBoundingClientRect();
        const offsetX = clientX - rect.left;
        const offsetY = clientY - rect.top;

        setScore(prevScore => prevScore + configValue);

        const newFlyCoin = {
            id: Date.now(),
            left: offsetX - 10,
            top: offsetY - 10 + 50,
            textLeft: offsetX + 10, // Смещение текста вправо на 20 пикселей
            textTop: offsetY - 20 + 50 // Смещение текста вверх на 20 пикселей
        };

        setFlyCoins(prevFlyCoins => [...prevFlyCoins, newFlyCoin]);

        setTimeout(() => {
            setFlyCoins(currentFlyCoins => currentFlyCoins.filter(coin => coin.id !== newFlyCoin.id));
        }, 1000);
    };

    const test = () => {
        setScore(6000);
        setConfigValue(1);
    }

    return (
        <>
            <img src="img/coin.png" alt="boxy" className="scale-110 active:scale-100 duration-75 ease-linear" onTouchStart={handleCoinClick} />
            {flyCoins.map(coin => (
                <React.Fragment key={coin.id}>
                    <img
                        src="img/star2.png"
                        alt="Flying Coin"
                        className="fly-coin size-28"
                        style={{
                            position: 'absolute',       // Позиционируем относительно родителя
                            left: `${coin.left}px`,    // Координаты для позиционирования монетки
                            top: `${coin.top}px`,
                        }}
                    />
                    <div
                        className="fly-text"
                        style={{
                            position: 'absolute',        // Позиционируем относительно родителя
                            left: `${coin.textLeft}px`, // Координаты для позиционирования текста
                            top: `${coin.textTop}px`,
                        }}
                    >
                        <p className='text-4xl press-start-2p-regular2'>+{configValue}</p>
                    </div>
                </React.Fragment>
            ))}
        </>
    );
};

export default Boxy;