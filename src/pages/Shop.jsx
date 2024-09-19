import React, { useContext, useState, useEffect } from 'react';
import { ConfigContext } from "../context/ConfigContext";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
import { TbSquareNumber2 } from "react-icons/tb";
import { TbSquareNumber5 } from "react-icons/tb";
import { GiCard10Spades } from "react-icons/gi";
import Taskbar from "../Taskbar";

const Shop = () => {

    const {
        setConfigValue, configValue, newScore, setScore, but, setBut, bought, setBought,
        but2, setBut2, bought2, setBought2, but3, setBut3, bought3, setBought3, but4, setBut4, bought4, setBought4,
        but5, setBut5, bought5, setBought5, but6, setBut6, bought6, setBought6, setMusic, setCoin
    } = useContext(ConfigContext);

    const [modal, setModal] = useState(false);

    const [modal2, setModal2] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    const toggleModal2 = () => {
        setModal2(!modal2)
    }

    const multiOnClick = (i) => {

        if (i === 1) {
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
        } else if (i === 2) {
            if (newScore >= 12500) {
                setModal(!modal)
                setConfigValue(5);
                setScore(prevScore => prevScore - 12500)
                setBut2(false)
                setBought2(true)
            }
            else {
                setModal2(!modal2)
            }
        } else if (i === 3) {
            if (newScore >= 50000) {
                setModal(!modal)
                setConfigValue(10);
                setScore(prevScore => prevScore - 50000)
                setBut3(false)
                setBought3(true)
            }
            else {
                setModal2(!modal2)
            }
        } else if (i === 4) {
            if (newScore >= 10000) {
                setModal(!modal)
                setCoin("./img/Freddycoin.png")
                setScore(prevScore => prevScore - 10000)
                setBut4(false)
                setBought4(true)
            }
            else {
                setModal2(!modal2)
            }
        } else if (i === 5) {
            if (newScore >= 15000) {
                setModal(!modal)
                setCoin("./img/Montycoin.png")
                setScore(prevScore => prevScore - 15000)
                setBut5(false)
                setBought5(true)
            }
            else {
                setModal2(!modal2)
            }
        } else if (i === 6) {
            if (newScore >= 30000) {
                setModal(!modal)
                setCoin("./img/Chicacoin.png")
                setScore(prevScore => prevScore - 30000)
                setBut6(false)
                setBought6(true)
            }
            else {
                setModal2(!modal2)
            }
        }
    };

    useEffect(() => {
        localStorage.setItem('but', JSON.stringify(but))
    }, [but])

    useEffect(() => {
        localStorage.setItem('bought', JSON.stringify(bought))
    }, [bought])

    useEffect(() => {
        localStorage.setItem('but2', JSON.stringify(but2))
    }, [but2])

    useEffect(() => {
        localStorage.setItem('bought2', JSON.stringify(bought2))
    }, [bought2])

    useEffect(() => {
        localStorage.setItem('but3', JSON.stringify(but3))
    }, [but3])

    useEffect(() => {
        localStorage.setItem('bought3', JSON.stringify(bought3))
    }, [bought3])

    useEffect(() => {
        localStorage.setItem('but4', JSON.stringify(but4))
    }, [but4])

    useEffect(() => {
        localStorage.setItem('bought4', JSON.stringify(bought4))
    }, [bought4])

    useEffect(() => {
        localStorage.setItem('but5', JSON.stringify(but5))
    }, [but5])

    useEffect(() => {
        localStorage.setItem('bought5', JSON.stringify(bought5))
    }, [bought5])

    useEffect(() => {
        localStorage.setItem('but6', JSON.stringify(but6))
    }, [but6])

    useEffect(() => {
        localStorage.setItem('bought6', JSON.stringify(bought6))
    }, [bought6])

    useEffect(() => {
        localStorage.setItem('multi', JSON.stringify(configValue))
    }, [configValue])

    return (
        <div className='flex flex-col h-screen w-screen z-40 justify-between items-center gap-10' id='back_roxy_room'>
            {modal && (
                <div className="flex justify-center items-center w-screen h-screen fixed top-0 left-0 z-50">
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
                <div className="flex justify-center items-center w-screen h-screen fixed top-0 left-0 z-50">
                    <div className="w-screen h-screen bg-black fixed top-0 left-0 z-30 opacity-50" onClick={toggleModal2}></div>
                    <div className="flex justify-center items-center z-40 w-[80%] h-[25%]" onClick={toggleModal2}>
                        <div className="bg-black z-50 w-full h-full rounded-xl border-2 border-purple-700 border-dashed p-5 flex flex-col items-center justify-center gap-5">
                            <FaRegTimesCircle size={100} className="text-red-500" />
                            <h2 className="text-red-500 press-start-2p-regular-no-color text-xl">INSUFFICIENT POINTS!</h2>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex w-screen bg-black justify-center p-3 text-white shadow-xl shadow-violet-600 items-center border-b-4 border-purple-700 border-dashed">
                <p className="text-4xl press-start-2p-regular text-center tracking-widest align-middle">THE SHOP</p>
            </div>
            <div className="z-30 grid grid-cols-2 gap-10 overflow-scroll w-full h-full bg-black bg-opacity-50 border-b-2 border-t-2 border-purple-700 border-dashed p-5">
                <div className="flex justify-center">
                    <div className="flex flex-col justify-center items-center gap-3">
                        <TbSquareNumber2 className="text-emerald-400 border-2 border-emerald-400 rounded-md p-1" size={100} />
                        <p className="text-emerald-400  press-start-2p-regular-no-color text-sm">MULTIPLIER</p>
                        {bought && (
                            <FaRegCheckCircle size={50} className="text-green-500" />
                        )}
                        {but && (
                            <div className="flex justify-between items-center border-2 border-dotted rounded-md border-yellow-100 p-1 active:scale-110 active:opacity-70 duration-100" onClick={() => multiOnClick(1)}>
                                <p className="text-md press-start-2p-regular2">5000</p>
                                <img src="./img/rxc.png" alt="" className="size-8" />
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col justify-center items-center gap-3">
                        <TbSquareNumber5 className="text-rose-600 border-2 border-rose-600 rounded-md p-1" size={100} />
                        <p className="text-rose-600 press-start-2p-regular-no-color text-sm">MULTIPLIER</p>
                        {bought2 && (
                            <FaRegCheckCircle size={50} className="text-green-500" />
                        )}
                        {but2 && (
                            <div className="flex justify-between items-center border-2 border-dotted rounded-md border-yellow-100 p-1 active:scale-110 active:opacity-70 duration-100" onClick={() => multiOnClick(2)}>
                                <p className="text-md press-start-2p-regular2">12500</p>
                                <img src="./img/rxc.png" alt="" className="size-8" />
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col justify-center items-center gap-3">
                        <GiCard10Spades className="text-violet-600 border-2 border-violet-600 rounded-md p-1" size={100} />
                        <p className="text-violet-600 press-start-2p-regular-no-color text-sm">MULTIPLIER</p>
                        {bought3 && (
                            <FaRegCheckCircle size={50} className="text-green-500" />
                        )}
                        {but3 && (
                            <div className="flex justify-between items-center border-2 border-dotted rounded-md border-yellow-100 p-1 active:scale-110 active:opacity-70 duration-100" onClick={() => multiOnClick(3)}>
                                <p className="text-md press-start-2p-regular2">50000</p>
                                <img src="./img/rxc.png" alt="" className="size-8" />
                            </div>
                        )}
                    </div>
                </div>
                <div className="flexr justify-center">
                    <div className="flex flex-col justify-center items-center gap-3">
                        <img src="./img/Freddycoin.png" alt="" />
                        <p className="text-orange-400 press-start-2p-regular-no-color text-sm">FREDDY</p>
                        {bought4 && (
                            <FaRegCheckCircle size={50} className="text-green-500" />
                        )}
                        {but4 && (
                            <div className="flex justify-between items-center border-2 border-dotted rounded-md border-yellow-100 p-1 active:scale-110 active:opacity-70 duration-100" onClick={() => multiOnClick(4)}>
                                <p className="text-md press-start-2p-regular2">10000</p>
                                <img src="./img/rxc.png" alt="" className="size-8" />
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col justify-center items-center gap-3">
                        <img src="./img/Montycoin.png" alt="" />
                        <p className="text-lime-400 press-start-2p-regular-no-color text-sm">MONTY</p>
                        {bought5 && (
                            <FaRegCheckCircle size={50} className="text-green-500" />
                        )}
                        {but5 && (
                            <div className="flex justify-between items-center border-2 border-dotted rounded-md border-yellow-100 p-1 active:scale-110 active:opacity-70 duration-100" onClick={() => multiOnClick(5)}>
                                <p className="text-md press-start-2p-regular2">15000</p>
                                <img src="./img/rxc.png" alt="" className="size-8" />
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col justify-center items-center gap-3">
                        <img src="./img/Chicacoin.png" alt="" />
                        <p className="text-pink-400 press-start-2p-regular-no-color text-sm">CHICA</p>
                        {bought6 && (
                            <FaRegCheckCircle size={50} className="text-green-500" />
                        )}
                        {but6 && (
                            <div className="flex justify-between items-center border-2 border-dotted rounded-md border-yellow-100 p-1 active:scale-110 active:opacity-70 duration-100" onClick={() => multiOnClick(6)}>
                                <p className="text-md press-start-2p-regular2">30000</p>
                                <img src="./img/rxc.png" alt="" className="size-8" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Taskbar className="z-40" />
        </div>
    );
};

export default Shop;