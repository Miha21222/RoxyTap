import Boxy from "../Boxy";
import Scorebar from "../Scorebar";
import { useEffect, useContext, useState } from 'react'
import { ConfigContext } from "../context/ConfigContext";
import { IoVolumeMute } from "react-icons/io5";
import { IoVolumeHigh } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { RiCopperCoinFill } from "react-icons/ri";
import { MdVibration } from "react-icons/md";

const Home = () => {

    const { newScore, count, setCount, setCoin, bought4, bought5, bought6, vibro, setVibro } = useContext(ConfigContext);

    const [modal, setModal] = useState(false);

    const [modal2, setModal2] = useState(false);

    const [modal3, setModal3] = useState(false);

    const [modal4, setModal4] = useState(false);

    const playMusic = () => {
        setCount(prevCount => (prevCount === 0 ? 1 : 0)); // Переключение значения между 0 и 1
        if (count === 1) {
            setModal(!modal);
            setModal2(false);
            setTimeout(() => {
                setModal(false);
            }, 1500);
        }
        else if (count === 0) {
            setModal2(!modal2);
            setModal(false);
            setTimeout(() => {
                setModal2(false);
            }, 1500);
        }
    };

    const toggleErase = () => {
        setModal3(!modal3);
    }

    const eraseData = () => {
        localStorage.clear();
        setModal3(!modal3);
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }

    const toggleCoin = () => {
        setModal4(!modal4);
    }

    const toggleVibro = () => {
        setVibro(prevVibro => (prevVibro === 0 ? 1 : 0));
    }

    const selectCoin = (i) => {
        if (i === 1) {
            setCoin("./img/coin.png");
        } else if (i === 2) {
            setCoin("./img/Freddycoin.png");
        } else if (i === 3) {
            setCoin("./img/Montycoin.png");
        } else if (i === 4) {
            setCoin("./img/Chicacoin.png");
        }
    }

    useEffect(() => {
        localStorage.setItem('score', JSON.stringify(newScore))
    }, [newScore])

    return (
        <div className="flex flex-col overflow-scroll p-5">
            {modal4 && (
                <div className="flex justify-center items-center w-screen h-screen fixed top-0 left-0 z-20">
                    <div className="w-screen h-screen bg-black fixed top-0 left-0 z-30 opacity-50"></div>
                    <div className="flex justify-center items-center z-40 w-[60%] h-[60%]">
                        <div className="bg-black z-50 w-full h-full rounded-xl border-2 border-purple-700 border-dashed p-5 flex flex-col items-center justify-between gap-5">
                            <h2 className="text-white press-start-2p-regular2 text-md">SELECT YOUR COIN!</h2>
                            <button className="press-start-2p-regular-no-color text-purple-600 border-2 border-dashed rounded-lg border-purple-600 active:scale-110 ease-linear duration-100" onClick={() => selectCoin(1)}>ROXY</button>
                            {bought4 && (
                                <button className="press-start-2p-regular-no-color text-orange-400 border-2 border-dashed rounded-lg border-orange-400 active:scale-110 ease-linear duration-100" onClick={() => selectCoin(2)}>FREDDY</button>
                            )}
                            {bought5 && (
                                <button className="press-start-2p-regular-no-color text-lime-400 border-2 border-dashed rounded-lg border-lime-400 active:scale-110 ease-linear duration-100" onClick={() => selectCoin(3)}>MONTY</button>
                            )}
                            {bought6 && (
                                <button className="press-start-2p-regular-no-color text-pink-400 border-2 border-dashed rounded-lg border-pink-400 active:scale-110 ease-linear duration-100" onClick={() => selectCoin(4)}>CHICA</button>
                            )}
                            <button className="press-start-2p-regular-no-color text-red-600 border-2 border-dashed border-red-600 rounded-xl flex gap-1 items-center p-2 active:scale-110 ease-linear duration-100 self-end text-xs" onClick={toggleCoin}>CLOSE</button>
                        </div>
                    </div>
                </div>
            )}
            {modal3 && (
                <div className="flex justify-center items-center w-screen h-screen fixed top-0 left-0 z-20">
                    <div className="w-screen h-screen bg-black fixed top-0 left-0 z-30 opacity-50"></div>
                    <div className="flex justify-center items-center z-40 w-[80%] h-[25%]">
                        <div className="bg-black z-50 w-full h-full rounded-xl border-2 border-purple-700 border-dashed p-5 flex flex-col items-center justify-center gap-5">
                            <h2 className="text-white press-start-2p-regular-no-color text-sm">ARE YOU SURE YOU WANT TO ERASE YOUR DATA?</h2>
                            <div className="flex justify-between gap-5">
                                <button className="press-start-2p-regular-no-color text-yellow-200 border-2 border-dashed border-yellow-200 rounded-xl flex gap-1 items-center p-2 active:scale-110 ease-linear duration-100" onClick={() => eraseData()}><FaCheck size={20} />YES</button>
                                <button className="press-start-2p-regular-no-color text-red-600 border-2 border-dashed border-red-600 rounded-xl flex gap-1 items-center p-2 active:scale-110 ease-linear duration-100" onClick={toggleErase}><IoCloseSharp size={30} />CLOSE</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <button onClick={toggleErase} className="fixed hidden top-20 left-5 p-1 rounded-md border-2 border-purple-700 border-dotted active:scale-110 active:border-green-500 active:text-green-500 duration-100 ease-linear">
                <MdDeleteForever size={50} className="text-rose-600" />
            </button>
            <button onClick={playMusic} className="fixed top-20 right-5 p-1 rounded-md border-2 border-purple-700 border-dotted active:scale-110 active:border-green-500 active:text-green-500 duration-100 ease-linear">
                {count === 0 ? <IoVolumeMute className="text-red-500" size={50} /> : <IoVolumeHigh className="text-purple-700" size={50} />}
            </button>
            {modal && (
                <div className="flex fixed justify-center bg-black border border-dotted border-purple-700 top-[9.3rem] right-2 p-1 w-44">
                    <p className='press-start-2p-regular-no-color text-xs text-center'>Muted!</p>
                </div>
            )}
            {modal2 && (
                <div className="flex fixed justify-center bg-black border border-dotted border-purple-700 top-[9.3rem] right-2 p-1 w-44">
                    <p className='press-start-2p-regular-no-color text-xs text-center'>Unmuted!</p>
                </div>
            )}
            <button onClick={toggleCoin} className="fixed top-[35rem] bottom-[6.5rem] right-5 p-1 rounded-md border-2 border-purple-700 border-dotted active:scale-110 active:border-green-500 active:text-green-500 duration-100 ease-linear">
                <RiCopperCoinFill className="text-yellow-200" size={50} />
            </button>
            <button onClick={toggleVibro} className="fixed top-[35rem] bottom-[6.5rem] left-5 p-1 rounded-md border-2 border-purple-700 border-dotted active:scale-110 active:border-green-500 active:text-green-500 duration-100 ease-linear">
                {vibro === 1 ? <MdVibration size={50} className="text-green-500" /> : <MdVibration size={50} className="text-rose-600" />}
            </button>
            <Boxy />
            <Scorebar />
        </div>
    );
};

export default Home;