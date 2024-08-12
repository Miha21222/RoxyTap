import Boxy from "../Boxy";
import Scorebar from "../Scorebar";
import { useEffect, useState } from 'react'

const Home = () => {

    function isLocalStorageEmpty(key) {
        const data = localStorage.getItem(key);

        if (data === null || data === '') {
            return 0; // Данных нет
        }

        return JSON.parse(localStorage.getItem(key)); // Данные существуют
    }

    const [newScore, setScore] = useState(() => isLocalStorageEmpty('score'));

    useEffect(() => {
        localStorage.setItem('score', JSON.stringify(newScore))
    }, [newScore])

    return (
        <div className="flex flex-col">
            <Boxy setScore={setScore} />
            <Scorebar newScore={newScore} setScore={setScore} />
        </div>
    );
};

export default Home;