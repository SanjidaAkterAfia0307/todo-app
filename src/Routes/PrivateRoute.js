import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const navigate=useNavigate();
    const location= useLocation()
    if(loading){
      return  <h2>Loading...</h2>
    }
    if(!user){
      return  <Navigate to='/login' state={{from:location}}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;