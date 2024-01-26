import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard/AssignmentCard";
import axios from "axios";
import Swal from "sweetalert2";

const Assignments = () => {

    const { loading, user } = useContext(AuthContext);
    const assignments = useLoaderData();
    const [assignmentsState, setAssignments] = useState(assignments);
    // console.log(assignments)

    const handelDeleteAssignment = (id,creatorEmail) => {
        console.log(id,creatorEmail)
        if (user.email !== creatorEmail) {
            return (
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Your can`t delete others Assignment",
                    showConfirmButton: false,
                    timer: 1500
                })
            )
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/assignments/${id}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.deletedCount === 1) {

                            const remaining = assignmentsState?.filter(assignment => assignment._id !== id) 
                            setAssignments(remaining)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    return (
        <div className="min-h-screen my-10">
            <div>
                {
                    loading &&
                    <span className="flex justify-center mx-auto items-center loading loading-spinner loading-lg my-5"></span>
                }
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-10">
                {
                    assignmentsState?.map(assignment => <AssignmentCard
                        assignment={assignment}
                        key={assignment._id}
                        handelDeleteAssignment={handelDeleteAssignment}
                    ></AssignmentCard>)
                }
            </div>

        </div>
    );
};

export default Assignments;