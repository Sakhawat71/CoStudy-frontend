import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/XSkkz2k/group.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">CoStudy</h1>
                    <p className="mb-5 text-xl"> Learn Together,<br /> Succeed Together </p>
                    <Link to={"/assignments"}><button className="btn btn-ghost hover:text-blue-700">Join the Community!</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;