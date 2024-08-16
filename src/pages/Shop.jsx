import { TbMultiplier2X } from "react-icons/tb";
import React, { useContext, useState, useEffect } from 'react';
import { ConfigContext } from "../context/ConfigContext";
import { BsCoin } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";

const Shop = () => {

    const { setConfigValue } = useContext(ConfigContext);

    const { configValue } = useContext(ConfigContext);

    const { newScore } = useContext(ConfigContext);

    const { setScore } = useContext(ConfigContext);

    const { but } = useContext(ConfigContext);

    const { setBut } = useContext(ConfigContext);

    const { bought } = useContext(ConfigContext);

    const { setBought } = useContext(ConfigContext);

    const [modal, setModal] = useState(false);

    const [modal2, setModal2] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    const toggleModal2 = () => {
        setModal2(!modal2)
    }

    const multiOnClick = () => {

        if (newScore >= 5000) {
            setModal(!modal)
            setConfigValue(2);
            setScore(prevScore => prevScore - 5000)
            setBut(false)
            setBought(true)
        }

        else {
            setModal2(!modal2)
        }
    }

    useEffect(() => {
        localStorage.setItem('but', JSON.stringify(but))
    }, [but])

    useEffect(() => {
        localStorage.setItem('bought', JSON.stringify(bought))
    }, [bought])

    useEffect(() => {
        localStorage.setItem('multi', JSON.stringify(configValue))
    }, [configValue])

    return (
        <>
            {modal && (
                <div className="flex justify-center items-center w-screen h-screen fixed top-0 left-0 z-20">
                    <div className="w-screen h-screen bg-black fixed top-0 left-0 z-30 opacity-50" onClick={toggleModal}></div>
                    <div className="flex justify-center items-center z-40 w-[80%] h-[25%]" onClick={toggleModal}>
                        <div className="bg-black z-50 w-full h-full rounded-xl border-2 border-purple-700 border-dashed p-5 flex flex-col items-center justify-center gap-5">
                            <FaRegCheckCircle size={100} className="text-green-500" />
                            <h2 className="text-green-500 press-start-2p-regular-no-color text-xl">PURCHASED!</h2>
                        </div>
                    </div>
                </div>
            )}
            {modal2 && (
                <div className="flex justify-center items-center w-screen h-screen fixed top-0 left-0 z-20">
                    <div className="w-screen h-screen bg-black fixed top-0 left-0 z-30 opacity-50" onClick={toggleModal2}></div>
                    <div className="flex justify-center items-center z-40 w-[80%] h-[25%]" onClick={toggleModal2}>
                        <div className="bg-black z-50 w-full h-full rounded-xl border-2 border-purple-700 border-dashed p-5 flex flex-col items-center justify-center gap-5">
                            <FaRegTimesCircle size={100} className="text-red-500" />
                            <h2 className="text-red-500 press-start-2p-regular-no-color text-xl">INSUFFICIENT POINTS!</h2>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex fixed top-0 left-0 w-screen bg-black justify-center p-3 text-white shadow-xl items-center border-b-4 border-purple-700 border-dashed">
                <p className="text-4xl press-start-2p-regular text-center tracking-widest align-middle">THE SHOP</p>
            </div>
            <div className="flex flex-col w-screen fixed left-0 top-28 bg-black bg-opacity-50 border-b-2 border-t-2 border-purple-700 border-dashed p-5">
                <div className="flex">
                    <div className="flex flex-col justify-center items-center gap-3">
                        <TbMultiplier2X className="text-yellow-200 border-2 border-yellow-200 rounded-md" size={100} />
                        <p className="text-yellow-200 press-start-2p-regular-no-color text-sm">MULTIPLIER</p>
                        {bought && (
                            <FaRegCheckCircle size={50} className="text-green-500" />
                        )}
                        {but && (
                            <div className="flex justify-between items-center gap-2 border-2 border-dotted rounded-md border-yellow-100 p-1 active:scale-110 active:opacity-70 duration-100" onClick={multiOnClick}>
                                <BsCoin className="text-yellow-100" size={30} />
                                <p className="text-xl press-start-2p-regular2">5000</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex">

                </div>
            </div>
        </>
    );
};

export default Shop;