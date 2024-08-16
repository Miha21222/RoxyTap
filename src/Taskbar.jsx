import { BiSolidJoystick } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";

const Taskbar = () => {
    return (
        <div className="flex flex-col justify-between">
            <div className="bg-black flex w-screen justify-between fixed bottom-0 left-0 shadow-xl border-t-4 border-purple-700 border-dashed">
                <button className="bg-transparent"><Link to='/'><BiSolidJoystick className="text-white active:text-green-500 active:scale-110 duration-100" size={60} /></Link></button>
                <button className="bg-transparent"><Link to='/links'><BsListTask className="text-white active:text-green-500 active:scale-110 duration-100" size={60} /></Link></button>
                <button className="bg-transparent"><Link to='/shop'><FaUserFriends className="text-white active:text-green-500 active:scale-110 duration-100" size={60} /></Link></button>
            </div>
        </div>
    );
};

export default Taskbar;