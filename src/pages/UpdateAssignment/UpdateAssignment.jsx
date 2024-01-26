
const UpdateAssignment = () => {





    const handelUpdateAssignment = e => {
        e.preventDefault();
        const from = e.target;

        const title = from.title.value;
        const difficulty = from.difficulty.value;
        const date = from.date.value;
        const marks = from.marks.value;
        const image = from.image.value;
        const description = from.description.value;
        console.log({ title, difficulty, date, marks, image, description })
    }


    return (
        <div className="mx-auto max-w-6xl my-5 min-h-screen mb-20">

            <form onSubmit={handelUpdateAssignment} className="bg-[#F4F3F0] px-10 md:px-28 py-10">
                <div className="text-center my-5 space-y-3">
                    <h2 className="font-bold text-2xl">Update Assignment</h2>
                    <p>Update Assignment with caution. Update the Assignment with the correct information.</p>
                </div>

                <div className="md:flex justify-center items-center gap-10">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder="Assignment Title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Difficulty</span>
                        </label>
                        <label className="input-group">
                            <select name="difficulty" className="select select-bordered w-full ">
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </label>
                    </div>
                </div>

                <div className="md:flex justify-center gap-10">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Due Date</span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="date" placeholder="date" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Marks</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="marks" placeholder="Marks" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Thumbnail Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image url" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>


                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Description</span>
                    </label>
                    <label className="input-group">
                        <textarea name="description" className="textarea textarea-bordered w-full" placeholder="Assignment Description"></textarea>
                    </label>
                </div>

                <input
                    type="submit"
                    value="Update Assignment"
                    className="btn bg-[#47BE96] hover:bg-[#47BE96] text-white text-xl mt-10 btn-block"
                />
            </form>
        </div>
    );
};

export default UpdateAssignment;