import { Children } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";




export const PrivateRoute = ({ children }) => {

    const auth = useSelector((state) => state.auth)

    if (!auth ?.user) {

        return <Navigate to = "/" /> ;
    }
    
    let token = localStorage.getItem('token');
    
    if(token == undefined) {          
        window.location.reload();              
    }

    return children;
}