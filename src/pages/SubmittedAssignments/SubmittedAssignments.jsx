import { useLoaderData } from "react-router-dom";
import SubmittedCard from "./SubmittedCard/SubmittedCard";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const SubmittedAssignments = () => {

    const submitteds = useLoaderData();
    const [submittedAssign, setSubmittedAssign] = useState(submitteds);

    const handelGiveMark = async (id, status, submittedPdfLink) => {
        console.log(id, status)

        const { value: formValues } = await Swal.fire({
            title: "Give Mark",
            html: `
            <p className="text-red-600">PDF Link:  ${submittedPdfLink}</p>
            <label className="label-text">Give Mark</label>
            <input 
                type="number"
                placeholder="Mark" 
                id="swal-input1" 
                class="swal2-input"
            >
            </br>
            <label className="label-text">Feedback</label>
            <input 
                type="text"
                placeholder="Your Feedback"
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
            const [givenMark, feedback] = formValues;

            if (!givenMark) {
                return Swal.fire({
                    position: "top-end",
                    icon: "warning",
                    title: "Please!! Submit PDF link",
                    showConfirmButton: false,
                    timer: 1000
                });
            }
            const update = {
                status: 'completed',
                givenMark,
                feedback
            }
            axios.put(`http://localhost:5000/api/v1/mark-assignment/${id}`, update)
                .then(res => {
                    if (res.data.modifiedCount) {
                        console.log(res.data)
                        const remaining = submittedAssign.filter(assg => assg._id !== id);
                        setSubmittedAssign(remaining)

                        const Toast = Swal.mixin({
                            toast: true,
                            position: "top-end",
                            showConfirmButton: false,
                            timer: 1500,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.onmouseenter = Swal.stopTimer;
                                toast.onmouseleave = Swal.resumeTimer;
                            }
                        });
                        Toast.fire({
                            icon: "success",
                            title: "Mark Given"
                        });

                    }
                })
                .catch(error => console.log(error))
        }
    }

    return (

        <div className=" max-w-6xl rounded-2xl mx-auto my-10 py-1 bg-[#ECEFF4]">

            {
                submittedAssign?.map(submitted => <SubmittedCard
                    key={submitted._id}
                    submitted={submitted}
                    handelGiveMark={handelGiveMark}
                ></SubmittedCard>)
            }

        </div>

        // <div className="overflow-x-auto my-10 min-h-screen">
        //     <table className="table">
        //         {/* head */}
        //         <thead>
        //             <tr>
        //                 <th>Titel</th>
        //                 <th>Link</th>
        //                 <th>Marks</th>
        //                 <th>Status</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {/* items */}

        //             {
        //                 submitteds?.map(subCard => <SubmittedCard
        //                     key={subCard._id}
        //                     subCard={subCard}
        //                 ></SubmittedCard>)
        //             }

        //         </tbody>


        //     </table>
        // </div>
    );
};

export default SubmittedAssignments;