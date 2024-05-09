import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
           navbar will appear here
            <Outlet/>
            footer will appear here
        </div>
    );
};

export default Root;