import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyAssgCard from "./MyAssgCard/MyAssgCard";

const MyAssignments = () => {

    const { user } = useContext(AuthContext);
    const assignments = useLoaderData();
    const [myAssignments, setMyAssignments] = useState([])

    useEffect(() => {
        const onlyMy = assignments.filter(assg => assg.user === user?.email);
        setMyAssignments(onlyMy)
    }, [assignments, user?.email])

    // console.log(myAssignments)

    return (

        <div className=" my-10 max-w-5xl md:max-w-3xl mx-auto">
            <table className="table">
                <thead>
                    <tr className="text-base">
                        <th>Title</th>
                        <th>Obtain Mrks</th>
                        <th>Marks </th>
                        <th>Feedback</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        myAssignments?.map(assg => <MyAssgCard
                            key={assg._id}
                            assg={assg}
                        ></MyAssgCard>)
                    }

                </tbody>


            </table>
        </div>

    );
};

export default MyAssignments;