import Navbar from "../Home/Navbar/Navbar";

const ErrorPage = () => {
    return (
        <div className="max-h-screen mx-auto">
            <Navbar></Navbar>
            <figure className="mt-2">
                <img src="/404_2.jpg" className="md:w-4/6 lg:max-w-[750px] mx-auto" alt="" />
            </figure>
            
        </div>
    );
};

export default ErrorPage;