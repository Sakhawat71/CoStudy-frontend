import PropTypes from 'prop-types';
import { ImCheckmark } from "react-icons/im";
import { FaHourglassEnd } from "react-icons/fa6";

const MyAssgCard = ({ assg }) => {

    const { title, givenMark, examineerFeedback, status, marks } = assg;

    return (
        <tr>
            <td>
                <div className="flex items-center">
                    <h2 className="font-bold text-lg text-gray-700">{title}</h2>
                </div>
            </td>

            <td>
                <h3 className='font-bold text-center'>{givenMark}</h3>
            </td>

            <td>
                <p className="font-bold text-center">{marks && marks}</p>
            </td>

            <td>
                <p className="text-sm opacity-50 text-center">{examineerFeedback ? examineerFeedback : '"'}</p>
            </td>

            <td>
                {
                    status === 'completed' ?
                        <span className='text-center flex items-center text-green-700'> <ImCheckmark className='font-extrabold text-base mr-2'></ImCheckmark> {status}</span>
                        :
                        <span className='text-center flex items-center'><FaHourglassEnd className='font-extrabold text-base mr-2'></FaHourglassEnd> {status}</span>
                }
            </td>

        </tr>

    );
};

MyAssgCard.propTypes = {
    assg: PropTypes.object,
};

export default MyAssgCard;