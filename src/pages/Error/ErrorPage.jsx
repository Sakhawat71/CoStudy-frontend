import Navbar from "../Home/Navbar/Navbar";

const ErrorPage = () => {
    return (
        <div className="max-h-screen mx-auto">
            <Navbar></Navbar>
            <figure>
                <img src="/404_2.jpg" className="md:w-4/6 lg:max-w-[750px] mx-auto" alt="" />
            </figure>
            {/* <div className="flex-col justify-center items-center mx-auto">
                <h2 className="text-red-600 font-bold text-3xl">Page Not Found</h2>
                <Link className="btn text-blue-600 mx-auto" to={"/"}>Go to Home</Link>
            </div> */}
        </div>
    );
};

export default ErrorPage;