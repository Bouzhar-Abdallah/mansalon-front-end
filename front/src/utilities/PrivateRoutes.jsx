import { useContext, useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const PrivateRoutes = () => {
    let {user} = useContext(UserContext)
    const navigate = useNavigate();
  // Update localStorage whenever the user state changes


 /*  useEffect(() => {
    if (user === null) {
      navigate("/")
      
    } else if (user.isLoggedIn) {
      // If the user is loggedIn, redirect to the admin page
      
      navigate("/test")
    } 
  }, [user]) */
    return(
         user ? <Outlet /> : <Navigate to="/signin" />
    )
}

export default PrivateRoutes