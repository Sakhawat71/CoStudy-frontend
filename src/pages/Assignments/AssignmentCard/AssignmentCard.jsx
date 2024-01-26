import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AssignmentCard = ({ assignment }) => {

    const { title, difficulty, date, thumbnail } = assignment;
    // console.log(assignment)

    return (
        <div className="card card-compact bg-base-100 shadow-xl my-5 md:my-0">

            <figure className='lg:h-64'>
                <img className='h-full w-full' src={assignment?.thumbnail && thumbnail} alt="assignment thumbnail" />
            </figure>

            <div className="card-body bg-[#F2F2F2] space-y-2">
                <h2 className="card-title font-bold">{title}</h2>
                <div className='flex justify-between  py-3'>

                    <h2 className=''>Difficulty: <span className='p-2 border rounded-xl text-blue-700 font-bold bg-white text-lg'>{difficulty}</span></h2>

                    <h2>Due Date: <span className='text-red-700 text-base font-semibold'>{date}</span></h2>

                </div>
                <div className="card-actions flex justify-between">
                    <Link className="btn bg-[#37A872] text-white hover:bg-[#47BE96]">View</Link>

                    <Link to="/update-assignment" className="btn bg-[#65A4DA] hover:bg-[#7EBBF2] text-white">Update</Link>

                    <Link className="btn bg-red-600 hover:bg-[#CB236E] text-white">Delete</Link>
                </div>
            </div>
        </div>
    );
};

AssignmentCard.propTypes = {
    assignment: PropTypes.object,
};

export default AssignmentCard;