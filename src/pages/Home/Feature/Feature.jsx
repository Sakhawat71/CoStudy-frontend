
const Feature = () => {
    return (
        <div className=" my-20">
            <h2 className="text-4xl text-center text-[#1B2E35] font-semibold">You Will Get Access To All These Feature</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center py-10">


                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/chL7M0s/ass.jpg" alt="feature image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Assignment Creation</h2>
                        <p>Discuss the intuitive interface and step-by-step process for assignment creation.</p>
                        
                    </div>
                </div>

                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/RHGPdD4/real.jpg" alt="feature image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Real-Time Collaboration</h2>
                        <p>Discuss how multiple users can work on assignments simultaneously, fostering teamwork and engagement.</p>
                        
                    </div>
                </div>

                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/Hp8VcGh/fb.jpg" alt="feature image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Peer Feedback and Evaluation</h2>
                        <p>Discuss how peer evaluation enhances the learning experience and encourages constructive interaction.</p>
                        
                    </div>
                </div>

                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/vjBKKGd/update.jpg" alt="feature image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Assignment Updates</h2>
                        <p>Explain how users can seamlessly edit assignment details and track changes over time.</p>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Feature;