import { FaYoutube } from "react-icons/fa";
import { FaDeviantart } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import Taskbar from "../Taskbar";

const Links = () => {
    return (
        <div className="flex flex-col overflow-scroll h-screen justify-between items-center z-50">
            <div className="flex bg-black justify-center p-3 text-white shadow-xl items-center border-b-4 border-purple-700 border-dashed">
                <h1 className="text-4xl press-start-2p-regular text-center tracking-widest align-middle">JOIN OUR SOCIALS!</h1>
            </div>
            <div className="flex flex-col justify-around items-center w-full h-full z-40 overflow-scroll">
                <div className="flex flex-col justify-center items-center w-full bg-black bg-opacity-50 border-b-2 border-t-2 border-purple-700 border-dashed">
                    <a href="https://www.youtube.com/@PhilosophicalKompotus" target="_blank" className="flex items-center">
                        <FaYoutube className="text-red-700" size={70} />
                        <h2 className="text-2xl press-start-2p-regular-no-color text-center align-middle text-red-700 m-5">YOUTUBE</h2>
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center w-full bg-black bg-opacity-50 border-b-2 border-t-2 border-purple-700 border-dashed">
                    <a href="https://www.deviantart.com/kompotus18" target="_blank" className="flex items-center">
                        <FaDeviantart className="text-green-500" size={60} />
                        <h2 className="text-2xl press-start-2p-regular-no-color text-center align-middle text-green-500 m-5">DEVIANTART</h2>
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center w-full bg-black bg-opacity-50 border-b-2 border-t-2 border-purple-700 border-dashed">
                    <a href="https://github.com/Miha21222" target="_blank" className="flex items-center">
                        <BsGithub className="text-white" size={60} />
                        <h2 className="text-2xl press-start-2p-regular-no-color text-center align-middle text-white m-5">GITHUB</h2>
                    </a>
                </div>
            </div>
            <Taskbar className="z-50" />
        </div>
    );
};

export default Links;