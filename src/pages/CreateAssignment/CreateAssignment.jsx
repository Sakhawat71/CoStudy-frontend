import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CreateAssignment = () => {

    const { user } = useContext(AuthContext);
    // console.log(user)


    const handelCreateAssignment = e => {
        e.preventDefault();
        const from = e.target;

        const title = from.title.value;
        const difficulty = from.difficulty.value;
        const date = from.date.value;
        const marks = from.marks.value;
        const thumbnail = from.image.value;
        const description = from.description.value;
        const creatorEmail = user?.email;
        // console.log({ title, difficulty, date, marks, thumbnail, description })
        const newAssignments = { title, difficulty, date, marks, thumbnail, description, creatorEmail };

        axios.post('http://localhost:5000/assignments', newAssignments)
            .then(date => {
                if (date.data.insertedId) {
                    // alert('assignment added')
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Assignment Created Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

        // fetch('http://localhost:5000/assignments', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body : JSON.stringify(newAssignments)
        // })
        // .then(res => res.json())
        // .then(date => console.log(date))

    }


    return (
        <div className="mx-auto max-w-6xl my-5 min-h-screen mb-20">

            <form onSubmit={handelCreateAssignment} className="bg-[#F4F3F0] px-10 md:px-28 py-10">
                <div className="text-center my-5 space-y-3">
                    <h2 className="font-bold text-2xl">Create an Assignment</h2>
                    <p>Create Assignment with caution. If there is any mistake in Create an Assignment, go to Update Assignment and update the Assignment with the correct information.</p>
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
                    value="Create Assignment"
                    className="btn bg-[#47BE96] hover:bg-[#47BE96] text-white text-xl mt-10 btn-block"
                />
            </form>
        </div>
    );
};

export default CreateAssignment;