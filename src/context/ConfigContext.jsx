import React, { createContext, useState } from 'react';

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

    return (
        <ConfigContext.Provider value={{ configValue, setConfigValue, newScore, setScore, but, setBut, bought, setBought }}>
            {children}
        </ConfigContext.Provider>
    );
};
