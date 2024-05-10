import { Navigate, useLocation } from "react-router-dom";
import useAuthProvider from './../hooks/useAuthProvider';

const ProtectedRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useAuthProvider();
    if(loading) {return <div className="w-full bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 min-h-[calc(100vh-349px)] flex items-center justify-center"><span className="loading loading-spinner loading-lg"></span></div>;}
    if(user)  {
       return children;
    } 
    return <Navigate to='/login' state={location.pathname} replace={true}/>
};

export default ProtectedRoute;
