import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const PrivateRoute = ({children}) =>{

    const  {user,loading} = useContext(AuthContext)
    if(loading){
        return <div className="flex justify-center pt-[350px]"><span className="loading loading-spinner text-error"></span></div>
    }
    
    if(user){
        return children;
    }

    return <Navigate to="/login"></Navigate>
}

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}