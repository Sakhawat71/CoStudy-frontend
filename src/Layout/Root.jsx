import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar/Navbar";
import Footer from "../pages/Home/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl mx-4 md:mx-10 lg:mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;