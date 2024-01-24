import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRouter = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
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