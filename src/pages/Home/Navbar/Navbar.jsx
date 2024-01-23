import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const navlink = <>
        <li>
            <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue-600" : "text-black"
                }
            >Home</NavLink>
        </li>
        <li>
            <NavLink
                to={"/assignmnets"}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue-600" : "text-black"
                }
            >Assignments</NavLink>
        </li>
        {/* <li>
            <NavLink
                to={"/assignmnets"}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue-600" : "text-black"
                }
            >profile</NavLink>
        </li> */}
    </>

    return (
        <div className="navbar bg-base-100 border px-10">
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
                <ul className=" text-xl space-x-3 font-bold menu-horizontal px-1">
                    {
                        navlink
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to={"/login"} className={"btn"}>Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;