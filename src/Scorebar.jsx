import { ConfigContext } from "./context/ConfigContext";
import React, { useContext } from 'react';
import { LuUserSquare2 } from "react-icons/lu";
import { BsGlobe } from "react-icons/bs";

const Scorebar = () => {

    const { newScore, name } = useContext(ConfigContext);

    return (
        <>
            <div className="flex w-screen bg-black justify-between p-2 text-white items-center border-b-2 border-yellow-100 border-dashed">
                <div className="flex gap-3 items-center">
                    <LuUserSquare2 size={35} className="text-violet-600 border border-yellow-100 rounded-lg" />
                    <p className="text-md press-start-2p-regular-no-color text-emerald-400 text-left tracking-widest">{name}</p>
                </div>
                <div className="flex items-center active:scale-90 ease-linear duration-100">
                <p className="text-xs press-start-2p-regular-no-color text-white text-right tracking-wide">coming soon..</p>
                    <BsGlobe size={35} className="text-violet-600 rounded-full border border-yellow-100 p-1" />
                </div>
            </div>
            <div className="flex w-screen bg-black justify-between p-2 text-white shadow-xl shadow-violet-600 items-center border-b-4 border-purple-700 border-dashed">
                <p className="text-xl press-start-2p-regular text-left tracking-widest">SCORE:</p>
                <div className="flex items-center justify-center">
                    <p className="text-xl press-start-2p-regular2 tracking-widest text-right">{newScore}</p>
                    <img src="./img/rxc.png" alt="" className="size-10" />
                </div>
            </div>
        </>
    );
};

export default Scorebar;