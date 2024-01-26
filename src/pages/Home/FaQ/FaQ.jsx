
const FaQ = () => {
    return (
        <div className="my-10">

            <div className="mx-auto lg:w-1/2 text-center">
                <h2 className="text-4xl font-bold text-[#44b584]">Frequently Asked Questions</h2>
                <p>Explore common questions about our online group study platform.</p>
            </div>

            <div className="grid items-center lg:grid-cols-2 lg:gap-10 ">

                <figure className="w-full  mx-auto">
                    <img src="/faq_1.jpg" className="lg:px-0 md:w-3/4 mx-auto px-10" alt="faq image" />
                </figure>

                <div className=" mx-auto w-full">

                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Q: How can I create a new assignment on CoStudy?
                        </div>
                        <div className="collapse-content">
                            <p>A: To create a new assignment, log in to CoStudy, navigate to your profile, and click on `Create Assignment.` Fill in the details, set deadlines, and invite members to collaborate. Once created, the assignment will be accessible to your study group.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Q: Is it possible to update assignment details after creation?
                        </div>
                        <div className="collapse-content">
                            <p>A: Absolutely! CoStudy allows you to update assignment details at any time. Simply go to the assignment, click on `Edit,` and make the necessary changes. All updates are reflected in real-time for the entire group.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Q: Can I delete an assignment if it`s no longer relevant?
                        </div>
                        <div className="collapse-content">
                            <p>A: Yes, you have the flexibility to delete assignments on CoStudy. Navigate to the assignment, click on `Delete,` and confirm your action. This feature ensures that your workspace remains organized and focused on relevant tasks.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Q: How does the assignment marking system work on CoStudy?
                        </div>
                        <div className="collapse-content">
                            <p>A: CoStudy`s marking system enables users to review and provide feedback on assignments submitted by their peers. Each user can mark assignments based on predefined criteria, fostering a collaborative and constructive learning environment.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Q: What login options are available on CoStudy?
                        </div>
                        <div className="collapse-content">
                            <p>
                                A: CoStudy offers two secure login options. Users can log in using their email and password for a traditional sign-in experience. Alternatively, for added convenience, CoStudy supports Google login, allowing users to access their accounts seamlessly.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FaQ;