
import axios  from 'axios';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000',
    // baseURL: 'https://nova-books-server.vercel.app',
    withCredentials: true,

})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;