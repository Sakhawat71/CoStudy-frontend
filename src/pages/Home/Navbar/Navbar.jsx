import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {

    const { user, logout, loading } = useContext(AuthContext);
    // console.log(user)
    const navlink = <>
        <li>
            <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#44b584]" : "text-black"
                }
            >Home</NavLink>
        </li>
        <li>
            <NavLink
                to={"/assignments"}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#44b584]" : "text-black"
                }
            >Assignments</NavLink>
        </li>
        {
            user &&
            <>
                <li>
                    <NavLink
                        to={"/create-assignment"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#44b584]" : "text-black"
                        }
                    >Create Assignment</NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/my-assignments"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#44b584]" : "text-black"
                        }
                    >My Assignments</NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/submitted-assignments"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#44b584]" : "text-black"
                        }
                    >Submitted Assignments</NavLink>
                </li>

            </>
        }
    </>

    // log out
    const logOut = () => {
        logout()
            .then(result => {
                if (result) {
                    console.log('user loggout')
                }
            })
            .catch(error => {
                console.log('logout problem: ', error.message);
            })
    }

    return (
        <div className="navbar bg-base-100 shadow-md px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navlink
                        }
                    </ul>
                </div>

                <div className="flex navbar-start">
                    <Link to={"/"} className="flex items-center btn btn-ghost text-xl">
                        <img className=" h-[40px]" src="/logo.png" alt="CoStudy" /><span>CoStudy</span></Link>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" text-lg space-x-5 font-semibold menu-horizontal px-1">
                    {
                        navlink
                    }
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <div className="avatar">
                    <div className=" w-10 rounded-xl">
                        {

                            loading ? <span className="loading loading-spinner loading-lg"></span>
                                :
                                <img title={user?.displayName} src={user ? user.photoURL : 'https://i.ibb.co/4K27t1f/user.png'} alt="user avatar" />

                        }

                    </div>
                </div>

                <div>
                    {
                        user?.email ?
                            <Link onClick={logOut} className="btn btn-outline hover:bg-white hover:text-[#44b584] text-base">Logout</Link>
                            :
                            <Link to={"/login"} className={"btn btn-outline hover:bg-white hover:text-[#44b584] text-base"}>login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;