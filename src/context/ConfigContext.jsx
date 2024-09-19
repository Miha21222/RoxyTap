import React, { createContext, useState, useRef, useEffect } from 'react';

export const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
    const [configValue, setConfigValue] = useState(() => checkValue('multi'));

    function checkValue(key) {
        const data = localStorage.getItem(key);

        if (data === null || data === '') {
            return 1; // Данных нет
        }

        return parseInt(localStorage.getItem(key)); // Данные существуют
    }

    function isLocalStorageEmpty(key) {
        const data = localStorage.getItem(key);

        if (data === null || data === '') {
            return 0; // Данных нет
        }

        return JSON.parse(localStorage.getItem(key)); // Данные существуют
    }

    function checkString(key) {
        const data = localStorage.getItem(key);

        if (data === null || data === '') {
            return ''; // Данных нет
        }

        return data; // Данные существуют
    }

    function checkBut(key) {
        const data = localStorage.getItem(key);

        if (data === null || data === '') {
            return true; // Данных нет
        }

        try {
            return JSON.parse(data); // Преобразуем строку в соответствующий тип (булево, число, объект и т.д.)
        } catch (e) {
            return data; // Если не удалось распарсить JSON, возвращаем как есть (например, если это строка)
        }
    }

    function checkBought(key) {
        const data = localStorage.getItem(key);

        if (data === null || data === '') {
            return false; // Данных нет
        }

        try {
            return JSON.parse(data); // Преобразуем строку в соответствующий тип (булево, число, объект и т.д.)
        } catch (e) {
            return data; // Если не удалось распарсить JSON, возвращаем как есть (например, если это строка)
        }
    }

    const [newScore, setScore] = useState(() => isLocalStorageEmpty('score'));

    const [but, setBut] = useState(() => checkBut('but'));

    const [bought, setBought] = useState(() => checkBought('bought'));

    const [but2, setBut2] = useState(() => checkBut('but2'));

    const [bought2, setBought2] = useState(() => checkBought('bought2'));

    const [but3, setBut3] = useState(() => checkBut('but3'));

    const [bought3, setBought3] = useState(() => checkBought('bought3'));

    const [but4, setBut4] = useState(() => checkBut('but4'));

    const [bought4, setBought4] = useState(() => checkBought('bought4'));

    const [but5, setBut5] = useState(() => checkBut('but5'));

    const [bought5, setBought5] = useState(() => checkBought('bought5'));

    const [but6, setBut6] = useState(() => checkBut('but6'));

    const [bought6, setBought6] = useState(() => checkBought('bought6'));

    const [music, setMusic] = useState(useRef(new Audio('./sounds/arcade.wav')));

    music.current.loop = true; // Устанавливаем свойство loop в true для бесконечного проигрыша

    const [count, setCount] = useState(0); // Начальное состояние - 0, музыка будет запущена

    const [coin, setCoin] = useState("./img/coin.png");

    const [vibro, setVibro] = useState(1);

    const [name, setName] = useState(() => checkString('name'));

    useEffect(() => {
        if (count === 1) {
            music.current.play(); // Запуск аудио при переключении на 0
        } else if (count === 0) {
            music.current.pause(); // Пауза аудио при переключении на 1
        }
    }, [count]);

    useEffect(() => {
        localStorage.setItem('name', name)
    }, [name]);

    return (
        <ConfigContext.Provider value={{
            configValue, setConfigValue, newScore, setScore, but, setBut, bought, setBought, count, setCount,
            but2, setBut2, bought2, setBought2, but3, setBut3, bought3, setBought3,
            but4, setBut4, bought4, setBought4, but5, setBut5, bought5, setBought5,
            but6, setBut6, bought6, setBought6, coin, setCoin, music, setMusic,
            vibro, setVibro, name, setName
        }}>
            {children}
        </ConfigContext.Provider>
    );
};
