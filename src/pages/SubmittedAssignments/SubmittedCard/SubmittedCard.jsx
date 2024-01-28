import PropTypes from 'prop-types';

const SubmittedCard = ({ submitted, handelGiveMark }) => {

    const { user,
        submittedPdfLink,
        message,
        status,
        title,
        thumbnail,
        marks,
        _id
    } = submitted;



    return (


        <div className='bg-[#FFFFFF] min-h-40 rounded-2xl mx-1 md:mx-5 lg:mx-10 my-5 lg:my-10 flex gap-5 lg:gap-10 flex-col md:flex-row md:items-center lg:items-stretch'>

            <figure className='mx-auto max-w-56 max-h-40 flex justify-center items-center p-2 rounded-2xl'>
                <img className='w-full h-full rounded-2xl mx-auto' src={thumbnail} alt="submitted assignment" />
            </figure>

            <div className='grid lg:grid-cols-2 p-2 lg:gap-10 w-full '>

                <div className='w-full border-[#ECEFF4] space-y-2 flex flex-col  justify-center'>

                    <h2 >Titel: <span className='text-xl font-semibold'>{title}</span></h2>

                    <p className='cursor-pointer'>Link : <span className='underline text-blue-600'>{submittedPdfLink}</span></p>

                    <p>Quick note : <span className='text-gray-500'>{message}</span></p>
                </div>

                <div className='w-full border-[#ECEFF4] space-y-2 flex flex-col  justify-center'>

                    <h4>Submitted by : <span className='font-bold'>{user}</span></h4>

                    <h2>Assignment Mark: <span className='font-bold'>{marks ? marks : 'undifind'}</span></h2>

                    {
                        status === 'pending' ? <button onClick={() => handelGiveMark(_id, status, submittedPdfLink)} className='btn btn-outline text-[#1C84C1] hover:bg-white hover:text-[#37A872]'>{status === 'pending' && 'Give Mark'}</button>
                            :
                            <button className='btn btn-disabled'> Completed </button>
                    }
                </div>

            </div>
        </div>


    );
};

SubmittedCard.propTypes = {
    submitted: PropTypes.object,
    handelGiveMark: PropTypes.func
};

export default SubmittedCard;