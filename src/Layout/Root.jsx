import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;