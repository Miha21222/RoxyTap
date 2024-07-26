import { BiSolidJoystick } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";

const Taskbar = () => {
    return (
        <div className="flex flex-col justify-between">
            <div className="bg-black flex w-screen justify-between fixed bottom-0 left-0 shadow-xl border-t-4 border-purple-700">
                <button className="text-white active:text-green-500 duration-500"><BiSolidJoystick size={60} /></button>
                <button className="text-white active:text-green-500 duration-500"><BsListTask size={60} /></button>
                <button className="text-white active:text-green-500 duration-500"><FaUserFriends size={60} /></button>
            </div>
        </div>
    );
};

export default Taskbar;