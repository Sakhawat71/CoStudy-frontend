import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
// import Swal from 'sweetalert2';
// import axios from 'axios';

const AssignmentCard = ({ assignment, handelDeleteAssignment }) => {

    const { user } = useContext(AuthContext);
    const { title, difficulty, date, thumbnail, _id, creatorEmail } = assignment;
    // console.log(assignment)



    return (
        <div className="card card-compact bg-base-100 shadow-xl my-5 md:my-0">

            <figure className='lg:h-64 md:h-52 h-52'>
                <img className='h-full w-full' src={assignment?.thumbnail && thumbnail} alt="assignment thumbnail" />
            </figure>

            <div className="card-body bg-[#F2F2F2] space-y-2">
                <h2 className="card-title font-bold">{title}</h2>
                <div className='flex justify-between  py-3'>

                    <h2 className=''>Difficulty: <span className='p-2 border rounded-xl text-blue-700 font-bold bg-white text-lg'>{difficulty}</span></h2>

                    <h2>Due Date: <span className='text-red-700 text-base font-semibold'>{date}</span></h2>

                </div>
                <div className="card-actions flex justify-between">
                    <Link to={`/assignment-details/${_id}`} className="btn bg-[#37A872] text-white hover:bg-[#47BE96]">View</Link>

                    <Link to={`/update-assignment/${_id}`} className="btn bg-[#65A4DA] hover:bg-[#7EBBF2] text-white">Update</Link>

                    {
                        user?.email &&
                        <Link onClick={() => handelDeleteAssignment(_id, creatorEmail)} className="btn bg-red-600 hover:bg-[#CB236E] text-white">Delete</Link>
                    }
                </div>
            </div>
        </div>
    );
};

AssignmentCard.propTypes = {
    assignment: PropTypes.object,
    handelDeleteAssignment: PropTypes.func,
};

export default AssignmentCard;