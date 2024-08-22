import { ConfigContext } from "./context/ConfigContext";
import React, { useContext } from 'react';

const Scorebar = () => {

    const { newScore } = useContext(ConfigContext);

    return (
        <>
            <div className="flex fixed top-0 left-0 w-screen bg-black justify-between p-3 text-white shadow-xl items-center border-b-4 border-purple-700 border-dashed">
                <p className="text-xl press-start-2p-regular text-left tracking-widest">SCORE:</p>
                <p className="text-xl press-start-2p-regular2 tracking-widest text-right">{newScore + " RXC"}</p>
            </div>
        </>
    );
};

export default Scorebar;