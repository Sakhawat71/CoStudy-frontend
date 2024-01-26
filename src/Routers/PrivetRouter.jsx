import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouter = ({ children }) => {

    const location = useLocation()
    const { user, loading } = useContext(AuthContext);
    

    if (loading) {
        return <span className="flex justify-center mx-auto items-center loading loading-spinner loading-lg my-5"></span>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
    
};

PrivetRouter.propTypes = {
    children: PropTypes.node,
};

export default PrivetRouter;