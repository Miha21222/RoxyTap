import { ConfigContext } from "../context/ConfigContext";
import { useEffect, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import anime from "animejs/lib/anime.es.js"

const Login = () => {

    const [inputFocused, setInputFocused] = useState(false);

    const handleFocus = () => setInputFocused(true);
    const handleBlur = () => setInputFocused(false);

    const { setName } = useContext(ConfigContext);

    const submitName = () => {
        const input = document.getElementById("input")
        setName(input.value);
    }

    useEffect(() => {
        anime({
            targets: "#pic",
            easing: "linear",
            translateY: {
                value: [500, 0],
                duration: 500,
            },
            translateY: {
                value: [0, -1000],
                duration: 500,
                delay: 5000
            }
        });
        anime({
            targets: "#back",
            easing: "linear",
            opacity: {
                value: [0.5, 0],
                duration: 500,
                delay: 5000
            }
        });
        anime({
            targets: "#pic2",
            easing: "linear",
            translateY: {
                value: [-500, 0],
                duration: 500,
                delay: 5000
            }
        });
        setTimeout(() => {
            document.getElementById("pic").classList.add("hidden");
            document.getElementById("back").classList.add("hidden");
        }, 6000);
    }, [])

    return (
        <>
            <div className="fixed z-50 top-0 left-0 w-screen h-screen flex justify-center items-center" id="pic"><img src="./img/roxy.png" alt="" className="scale-150" /></div>
            <div className="fixed z-40 top-0 left-0 bg-black opacity-50 w-screen h-screen" id="back"></div>
            <div className="flex flex-col justify-between items-center h-screen w-screen z-30" id="start">
                <div className="flex bg-black justify-center p-3 text-white shadow-xl shadow-cyan-400 items-center border-b-4 border-purple-700 border-dashed w-full">
                    <p className="text-3xl press-start-2p-regular text-center align-middle tracking-widest">AND WHAT'S YOUR NAME?</p>
                </div>
                {!inputFocused && (
                <div className="flex w-[80%] -mt-10 -mb-10" id="pic2"><img src="./img/roxy.png" alt="" className="" /></div>
                )}
                {!inputFocused ? 
                <div className="flex bg-black justify-center items-center border-2 border-purple-700 border-dashed w-80 h-20 rounded-xl">
                    <input 
                    id="input" 
                    type="text" 
                    placeholder="Player name..." 
                    className="flex p-3 w-full h-full bg-transparent press-start-2p-regular-no-color text-xs outline-none"
                    onFocus={handleFocus}
                    onBlur={handleBlur} />
                </div> : 
                <div className="fixed top-52 flex bg-black justify-center items-center border-2 border-purple-700 border-dashed w-80 h-20 rounded-xl">
                    <input 
                    id="input" 
                    type="text" 
                    placeholder="Player name..." 
                    className="flex p-3 w-full h-full bg-transparent press-start-2p-regular-no-color text-xs outline-none"
                    onFocus={handleFocus}
                    onBlur={handleBlur} />
                </div>}
                {!inputFocused ? 
                <div className="flex bg-black justify-center items-center border-2 border-purple-700 border-dashed rounded-xl mb-20 active:scale-90 duration-100 ease-linear shadow-lg shadow-fuchsia-500">
                <NavLink to='/home'><button onClick={submitName} className="bg-transparent press-start-2p-regular2 text-2xl text-center align-middle tracking-wide p-3">SUBMIT</button></NavLink>
                </div> : 
                <div className="fixed top-80 flex bg-black justify-center items-center border-2 border-purple-700 border-dashed rounded-xl mb-20 active:scale-90 duration-100 ease-linear shadow-lg shadow-fuchsia-500">
                <NavLink to='/home'><button onClick={submitName} className="bg-transparent press-start-2p-regular2 text-2xl text-center align-middle tracking-wide p-3">SUBMIT</button></NavLink>
                </div>}
            </div>
        </>
    );
};

export default Login;