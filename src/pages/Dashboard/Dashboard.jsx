import { Link, NavLink, Outlet } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaBook, FaCalendarAlt, FaListUl, FaUsers } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { IoBookmarks } from "react-icons/io5";
import { ImSpoonKnife } from "react-icons/im";

const Dashboard = () => {

    // TODO: get isAdmin value from the database
    const isAdmin = true;

    return (
        <div className="grid grid-cols-5 bg-[#F6F6F6]">
            <div className="bg-[#D1A054] text-center py-8 h-[100vh]">
                {
                    isAdmin ?
                        <>
                            <div className="max-w-fit mx-auto mb-12">
                                <Link to="/">
                                    <h1 className="text-2xl font-black max-w-fit">BISTRO BOSS</h1>
                                    <h2 className="text-base font-bold uppercase tracking-[6px] max-w-fit">Restaurant</h2>
                                </Link>
                            </div>
                            <div className="pl-[76px]">
                                <div className="flex flex-col gap-4 max-w-fit">
                                    <NavLink
                                        to="/dashboard/userHome"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-2 text-base text-white"
                                                : "flex items-center gap-2 text-base"
                                        }
                                    >
                                        <AiFillHome /> ADMIN HOME
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/reservation"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-2 text-base text-white"
                                                : "flex items-center gap-2 text-base"
                                        }
                                    >
                                        <ImSpoonKnife /> ADD ITEMS
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/paymentHistory"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-2 text-base text-white"
                                                : "flex items-center gap-2 text-base"
                                        }
                                    >
                                        <FaListUl /> MANAGE ITEMS
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/myCart"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-2 text-base text-white"
                                                : "flex items-center gap-2 text-base"
                                        }
                                    >
                                        <FaBook /> MANAGE BOOKINGS
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/users"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-2 text-base text-white"
                                                : "flex items-center gap-2 text-base"
                                        }
                                    >
                                        <FaUsers /> ALL USERS
                                    </NavLink>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="max-w-fit mx-auto mb-12">
                                <Link to="/">
                                    <h1 className="text-2xl font-black max-w-fit">BISTRO BOSS</h1>
                                    <h2 className="text-base font-bold uppercase tracking-[6px] max-w-fit">Restaurant</h2>
                                </Link>
                            </div>
                            <div className="pl-[76px]">
                                <div className="flex flex-col gap-4 max-w-fit">
                                    <NavLink
                                        to="/dashboard/userHome"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-2 text-base text-white"
                                                : "flex items-center gap-2 text-base"
                                        }
                                    >
                                        <AiFillHome /> USER HOME
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/reservation"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-2 text-base text-white"
                                                : "flex items-center gap-2 text-base"
                                        }
                                    >
                                        <FaCalendarAlt /> RESERVATION
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/paymentHistory"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-2 text-base text-white"
                                                : "flex items-center gap-2 text-base"
                                        }
                                    >
                                        <IoWallet /> PAYMENT HISTORY
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/myCart"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-2 text-base text-white"
                                                : "flex items-center gap-2 text-base"
                                        }
                                    >
                                        <FaShoppingCart /> MY CART
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/addReview"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-2 text-base text-white"
                                                : "flex items-center gap-2 text-base"
                                        }
                                    >
                                        <MdReviews /> ADD REVIEW
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/myBooking"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-2 text-base text-white"
                                                : "flex items-center gap-2 text-base"
                                        }
                                    >
                                        <IoBookmarks /> MY BOOKING
                                    </NavLink>
                                </div>
                            </div>
                        </>
                }
                <hr className="my-12" />
                <div className="pl-[76px]">
                    <div className="flex flex-col gap-4 max-w-fit">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-2 text-base"
                                    : "flex items-center gap-2 text-base"
                            }
                        >
                            <AiFillHome /> HOME
                        </NavLink>
                        <NavLink
                            to="/ourMenu"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-2 text-base"
                                    : "flex items-center gap-2 text-base"
                            }
                        >
                            <IoWallet /> MENU
                        </NavLink>
                        <NavLink
                            to="/ourShop"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-2 text-base"
                                    : "flex items-center gap-2 text-base"
                            }
                        >
                            <FaCalendarAlt /> SHOP
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-2 text-base"
                                    : "flex items-center gap-2 text-base"
                            }
                        >
                            <IoWallet /> CONTACT
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="md:col-span-4 px-32">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;