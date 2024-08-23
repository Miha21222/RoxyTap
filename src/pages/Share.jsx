import { useState, useContext } from 'react'
import { ConfigContext } from "../context/ConfigContext";
import copy from 'copy-to-clipboard';
import { FaClipboard } from "react-icons/fa";

const Share = () => {

    const [newText, setText] = useState("https://t.me/roxytapbot")

    const [modal, setModal] = useState(false);

    const copyToClipboard = () => {
        copy(newText);
        setModal(!modal);
        setTimeout(() => {
            setModal(false)
        }, 1500);
    }

    return (
        <div className="flex flex-col justify-center items-center h-[25rem] fixed left-0 right-0 top-32 bottom-96 overflow-scroll">
            <div className="flex fixed top-0 left-0 w-screen bg-black justify-center p-3 text-white shadow-xl items-center border-b-4 border-purple-700 border-dashed">
                <p className="text-4xl press-start-2p-regular text-center tracking-widest align-middle">SHARE OUR APP!</p>
            </div>
            <div className="flex items-center justify-center">
                <img src="./img/roxy.png" alt="boxy" className="size-96" />
            </div>
            <div className="flex p-5 gap-3 justify-center items-center w-screen fixed left-0 top-[33rem] bottom-36 bg-black bg-opacity-60 border-b-2 border-t-2 border-purple-700 border-dashed">
                <p className='text-sm press-start-2p-regular-no-color text-green-500 underline'>{newText}</p>
                {modal && (
                    <div className="flex fixed bg-black border border-dotted border-purple-700 top-[36rem] right-2 p-1 w-44">
                        <p className='press-start-2p-regular-no-color text-xs'>Text copied to clipboard!</p>
                    </div>
                )}
                <button className='border border-white bg-transparent p-2 rounded-md active:border-green-500 active:scale-110 duration-100' onClick={copyToClipboard}><FaClipboard className="text-white active:text-green-500 active:scale-110 duration-100" size={20} /></button>
            </div>
        </div>
    );
};

export default Share;