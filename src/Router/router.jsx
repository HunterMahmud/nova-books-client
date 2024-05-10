import { createBrowserRouter } from 'react-router-dom';
import NotFound from './../pages/NotFound';
import Root from './../Layouts/Root';
import Home from './../pages/Home';
import Login from './../pages/Login';
import Register from './../pages/Register';
import AddBooks from './../pages/AddBooks';
import ProtectedRoute from '../components/ProtectedRoute';


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement: <NotFound/>,
        children:[
            {
                path:'/',
                element: <Home/>,
            },
            {
                path:'/add-books',
                element: <ProtectedRoute><AddBooks/></ProtectedRoute>,
            },
           
            // {
            //     path:'/:country',
            //     element: <Country/>,
            //     loader: ({params}) => fetch(`https://nova-tourism-server.vercel.app/country/${params.country}`),
            // },
            
            // {
            //     path:'/aboutus',
            //     element: <AboutUs/>
            // },
            {
                path:'/login',
                element: <Login/>,
            },
            {
                path:'/register',
                element: <Register/>,
            }
        ]
        
    }
])

export default router;