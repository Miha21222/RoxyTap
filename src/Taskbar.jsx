import { BiSolidJoystick } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Taskbar = () => {

    return (
        <>
            <div className="bg-black flex w-screen justify-between shadow-xl border-t-4 border-purple-700 border-dashed">
                <button className="bg-transparent" id="link"><NavLink to='/' className={(navData) => (navData.isActive ? 'active' : 'text-white')}><BiSolidJoystick className="active:text-green-500 active:scale-110 duration-100" size={45} /></NavLink></button>
                <button className="bg-transparent" id="link"><NavLink to='/links' className={(navData) => (navData.isActive ? 'active' : 'text-white')}><BsListTask className="active:text-green-500 active:scale-110 duration-100" size={45} /></NavLink></button>
                <button className="bg-transparent" id="link"><NavLink to='/shop' className={(navData) => (navData.isActive ? 'active' : 'text-white')}><FaShoppingCart className="active:text-green-500 active:scale-110 duration-100" size={35} /></NavLink></button>
                <button className="bg-transparent" id="link"><NavLink to='/share' className={(navData) => (navData.isActive ? 'active' : 'text-white')}><FaUserFriends className="active:text-green-500 active:scale-110 duration-100" size={45} /></NavLink></button>
            </div>
        </>
    );
};

export default Taskbar;