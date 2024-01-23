import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero min-h-screen my-5" style={{ backgroundImage: 'url(https://i.ibb.co/XSkkz2k/group.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-[#41d293]">CoStudy</h1>
                    <p className="mb-5 text-xl text-[#7bbdf7]"> Learn Together,<br /> Succeed Together </p>
                    <Link to={"/assignments"}><button className="btn btn-ghost hover:text-[#7bbdf7] text-[#44b584] text-xl">Join the Community!</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;