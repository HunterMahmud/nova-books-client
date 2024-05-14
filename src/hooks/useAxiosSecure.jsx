
import axios  from 'axios';
import useAuthProvider from './useAuthProvider';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    // baseURL: 'http://localhost:3000',
    baseURL: 'https://nova-books-server.vercel.app',
    withCredentials: true,

})
const useAxiosSecure = () => {
    const {logOut} = useAuthProvider();
    const navigate = useNavigate();
    axiosSecure.interceptors.response.use((res)=> {
        return res;
    }, async(err)=> {
        // console.log(err);
        if(err.response?.status == 403 || err.response?.status == 401){
            await logOut();
            navigate('/login');
        }
        return Promise.reject(err);
    })
    return axiosSecure;
};

export default useAxiosSecure;