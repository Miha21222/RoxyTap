import { NavLink } from "react-router-dom";
import anime from "animejs/lib/anime.es.js"
import { useEffect, useContext } from "react";
import { ConfigContext } from "../context/ConfigContext";

const Start = () => {

    const audio = new Audio('./sounds/roxy.wav');

    const { name } = useContext(ConfigContext);

    const audioPlay = () => {
        setTimeout(() => {
            audio.play();
        }, 200);
    }

    useEffect(() => {
        anime({
            targets: "#start",
            easing: 'linear',
            opacity: [0, 1]
        });

        anime({
            targets: "#coin",
            keyframes: [
                { scale: 0 },
                { scale: 1.1 },
                { scale: 0.9 },
                { scale: 1 },
            ],
            easing: 'linear',
            delay: 1000,
            duration: 700
        });

        anime({
            targets: "#button",
            easing: 'easeInOutElastic(1, 2)',
            keyframes: [
                { translateY: 0 },
                { translateY: -20 },
                { translateY: 20 },
                { translateY: -10 },
                { translateY: 10 },
                { translateY: 0 },
            ],
            delay: 5000,
            duration: 800,
            loop: true
        })
    }, [])

    return (
        <div className="flex flex-col justify-between items-center h-screen w-screen" id="start">
            <div className="flex bg-black justify-center p-3 text-white shadow-xl shadow-cyan-400 items-center border-b-4 border-purple-700 border-dashed w-full">
                <p className="text-5xl press-start-2p-regular text-center align-middle tracking-wide">ROXYTAP</p>
            </div>
            <div className="flex justify-center items-center p-3" id="coin">
                <img src="./img/rxc3.png" alt="" className="" />
            </div>
            <div className="flex justify-center items-center mb-20" id="button">
                {name === '' ? <NavLink to='/login' onClick={audioPlay} className="flex bg-black justify-center p-5 text-white shadow-lg shadow-fuchsia-500 items-center border-4 border-purple-700 border-dashed rounded-2xl active:scale-90 duration-100 ease-linear">
                    <p className="text-4xl press-start-2p-regular2 text-center align-middle tracking-wide">PLAY</p>
                </NavLink> : <NavLink to='/home' className="flex bg-black justify-center p-5 text-white shadow-lg shadow-fuchsia-500 items-center border-4 border-purple-700 border-dashed rounded-2xl active:scale-90 duration-100 ease-linear">
                <p className="text-4xl press-start-2p-regular2 text-center align-middle tracking-wide">PLAY</p>
            </NavLink>}
            </div>
        </div>
    );
};

export default Start;