import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { MdOutlineShoppingCart } from "react-icons/md";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
    const { user, logoutUser } = useAuth();
    const { cart } = useCart();

    const handleLogOut = () => {
        logoutUser()
            .then(() => {

            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const navLinks = <>
        <NavLink
            to="/"
            className={({ isActive }) =>
                isActive
                    ? "text-[#EEFF25] text-base font-extrabold"
                    : "text-white text-base font-extrabold"
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/contact"
            className={({ isActive }) =>
                isActive
                    ? "text-[#EEFF25] text-base font-extrabold"
                    : "text-white text-base font-extrabold"
            }
        >
            Contact Us
        </NavLink>
        <NavLink
            to="/dashboard"
            className={({ isActive }) =>
                isActive
                    ? "text-[#EEFF25] text-base font-extrabold"
                    : "text-white text-base font-extrabold"
            }
        >
            Dashboard
        </NavLink>
        <NavLink
            to="/ourMenu"
            className={({ isActive }) =>
                isActive
                    ? "text-[#EEFF25] text-base font-extrabold"
                    : "text-white text-base font-extrabold"
            }
        >
            Our Menu
        </NavLink>
        <NavLink
            to="/ourShop"
            className={({ isActive }) =>
                isActive
                    ? "text-[#EEFF25] text-base font-extrabold"
                    : "text-white text-base font-extrabold"
            }
        >
            Our Shop
        </NavLink>
    </>

    return (
        <div className="bg-[#15151580] w-full fixed top-0 z-10">
            <div className="navbar justify-between max-w-[1810px] mx-auto">
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#15151580] rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/" >
                        <h1 className="text-2xl font-black text-white">BISTRO BOSS</h1>
                        <h2 className="text-base font-bold text-white uppercase tracking-[6px]">Restaurant</h2>
                    </Link>
                </div>
                <div className="flex items-center">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 uppercase gap-4">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/dashboard'>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <MdOutlineShoppingCart className="text-white text-xl" />
                                    <span className="badge badge-sm indicator-item">{cart?.length}</span>
                                </div>
                            </label>
                        </div>
                    </Link>
                    {
                        user && user.email ?
                            <>
                                <div className="ml-6">
                                    <button onClick={handleLogOut} className="text-base font-extrabold text-white uppercase">Sign Out</button>
                                </div>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src='https://i.ibb.co/tMy0bd5/pngwing-com.png' />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li><a>Logout</a></li>
                                    </ul>
                                </div>
                            </>
                            :
                            <Link to="/signIn" className="btn ml-6">Sign in</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;