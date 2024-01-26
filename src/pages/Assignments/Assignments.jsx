import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard/AssignmentCard";

const Assignments = () => {

    const { loading } = useContext(AuthContext);
    const assignments = useLoaderData();

    console.log(assignments)

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
                    assignments.map(assignment => <AssignmentCard
                        assignment={assignment}
                        key={assignment._id}
                    ></AssignmentCard>)
                }
            </div>

        </div>
    );
};

export default Assignments;