import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyAssignments = () => {

    const { user } = useContext(AuthContext);
    const assignments = useLoaderData();
    const [myAssignments, setMyAssignments] = useState([])

    useEffect(() => {
        const onlyMy = assignments.filter(assg => assg.user === user?.email);
        setMyAssignments(onlyMy)
    }, [assignments, user])

    // console.log(myAssignments)

    return (
        <div>
            my assignments {myAssignments.length}
        </div>
    );
};

export default MyAssignments;