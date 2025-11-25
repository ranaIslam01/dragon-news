import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loder from '../Components/Loder';
import { AuthContext } from './AuthContext';

const PrivetRoute = ({children}) => {
   const {user,loading} = useContext(AuthContext);
   const location = useLocation();
   
   if(loading){
      return <Loder></Loder>
   }

   // if user thake tahole 
   if(user && user?.email){
      return children;
   }
   else{
      return <Navigate state={location.pathname} to = "/auth/login"></Navigate>
   }
   //if user na thake tahole
   
};

export default PrivetRoute;