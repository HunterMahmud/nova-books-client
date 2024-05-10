import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Root = () => {
    return (
        <div className='bg-white dark:bg-gray-900'>
           <Navbar/>
            <Outlet/>
            footer will appear here
        </div>
    );
};

export default Root;