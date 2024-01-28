import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";

const ViewAssignment = () => {

    const navigate = useNavigate()
    const assignment = useLoaderData();
    const { user } = useContext(AuthContext);

    const { _id, title, difficulty, description, date, thumbnail, marks } = assignment;


    const handelSubmitAnswer = async () => {

        const { value: formValues } = await Swal.fire({
            title: "Submit Assignment",
            inputPlaceholder: "Enter the URL",
            html: `
            <label className="label-text">PDF link</label>
            <input 
                type="url"
                placeholder="Pdf link" 
                id="swal-input1" 
                class="swal2-input"
            >
            </br>
            <label className="label-text">Message</label>
            <input 
                type="text"
                placeholder="Your Message"
                id="swal-input2" 
                class="swal2-input"
            >
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
            const [submittedPdfLink, message] = formValues;
   
            if (!submittedPdfLink) {
                return Swal.fire({
                    position: "top-end",
                    icon: "warning",
                    title: "Please!! Submit PDF link",
                    showConfirmButton: false,
                    timer: 1000
                });
            }
            const submitted = {
                user: user?.email,
                submittedPdfLink,
                message,
                status: 'pending',
                title,
                thumbnail,
                originalId : _id,
                marks
            }
            axios.post('https://online-group-study-server-gold.vercel.app/api/v1/submitted-assignment',submitted)
            .then(res => {
                if(res.data.insertedId){
                    // console.log(res.data.insertedId)
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1000
                    });
                    navigate('/submitted-assignments')
                }
            })
            .catch(error => console.log(error))

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

                    <div className="grid grid-cols-2 border my-5 space-y-2 p-3 shadow-xl rounded-xl bg-white text-xl text-gray-600 items-center">

                        <h3>Difficulty: <span className="font-bold text-xl text-gray-900">{difficulty}</span></h3>
                        <h3>Due Date: <span className="text-xl font-bold text-gray-900">{date}</span></h3>
                        <h3>Marks: <span className="text-xl font-bold text-gray-900">{marks}</span></h3>
                        <button onClick={handelSubmitAnswer} className="btn btn-outline hover:bg-white hover:text-[#37A872]">Take Assignment</button>
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


export default ViewAssignment;