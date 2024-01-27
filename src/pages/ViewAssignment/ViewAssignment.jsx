// import PropTypes from 'prop-types';
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewAssignment = () => {

    const assignment = useLoaderData();
    console.log(assignment)
    const { title, difficulty, description, date, thumbnail, marks } = assignment;

    const handelSubmitAnswer = async () => {
        // const num = prompt('input a num');
        // console.log(num)

        const { value: formValues } = await Swal.fire({
            title: "Multiple inputs",
            html: `
              <input id="swal-input1" class="swal2-input">
              <input id="swal-input2" class="swal2-input">
            `,
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById("swal-input1").value,
                    document.getElementById("swal-input2").value
                ];
            }
        });
        if (formValues) {
            Swal.fire(JSON.stringify(formValues));
            // console.log(formValues)
        }

    }

    return (
        <div className="hero min-h-screen bg-base-200 my-8 rounded-3xl">
            <div className="hero-content flex-col lg:flex-row lg:gap-10 items-center">

                <figure className="lg:w-1/2">
                    <img src={thumbnail} className=" rounded-3xl shadow-2xl" />
                </figure>

                <div className="lg:w-1/2 ">
                    <p className="font-bold text-blue-600 text-xl">Assignment On: </p>
                    <h1 className="text-4xl font-bold my-2">{title}</h1>

                    <div className="grid grid-cols-2 border my-5 space-y-2 p-3 shadow-xl rounded-xl bg-white text-xl text-gray-600">

                        <h3>Difficulty: <span className="font-bold text-xl text-gray-900">{difficulty}</span></h3>
                        <h3>Due Date: <span className="text-xl font-bold text-gray-900">{date}</span></h3>
                        <h3>Marks: <span className="text-xl font-bold text-gray-900">{marks}</span></h3>
                        <button onClick={handelSubmitAnswer} className="btn btn-outline hover:bg-white">Take Assignment</button>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-xl font-semibold mb-2">Description: </h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ViewAssignment.propTypes = {

// };

export default ViewAssignment;