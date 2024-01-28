import { useLoaderData } from "react-router-dom";
import SubmittedCard from "./SubmittedCard/SubmittedCard";

const SubmittedAssignments = () => {

    const submitteds = useLoaderData()


    return (

        <div className=" max-w-6xl rounded-2xl mx-auto my-10 py-1 bg-[#ECEFF4]">

            {
                submitteds?.map(submitted => <SubmittedCard 
                key={submitted._id}
                submitted={submitted}
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