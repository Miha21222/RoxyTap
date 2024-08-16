import Boxy from "../Boxy";
import Scorebar from "../Scorebar";
import { useEffect, useContext } from 'react'
import { ConfigContext } from "../context/ConfigContext";

const Home = () => {

    const { newScore } = useContext(ConfigContext);

    useEffect(() => {
        localStorage.setItem('score', JSON.stringify(newScore))
    }, [newScore])

    return (
        <div className="flex flex-col">
            <Boxy />
            <Scorebar />
        </div>
    );
};

export default Home;