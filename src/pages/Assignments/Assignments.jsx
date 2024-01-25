import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Assignments = () => {

    const { loading } = useContext(AuthContext);


    return (
        <div className="min-h-screen">
            <div>
                {
                    loading &&
                    <span className="flex justify-center mx-auto items-center loading loading-spinner loading-lg my-5"></span>
                }
            </div>


        </div>
    );
};

export default Assignments;