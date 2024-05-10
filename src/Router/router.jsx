import { createBrowserRouter } from 'react-router-dom';
import NotFound from './../pages/NotFound';
import Root from './../Layouts/Root';
import Home from './../pages/Home';
import Login from './../pages/Login';
import Register from './../pages/Register';
import AddBooks from './../pages/AddBooks';
import ProtectedRoute from '../components/ProtectedRoute';
import AllBooks from './../pages/AllBooks';
import BorrowedBooks from './../pages/BorrowedBooks';
import UpdateBook from './../pages/UpdateBook';


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
            {
                path:'/all-books',
                element: <ProtectedRoute><AllBooks/></ProtectedRoute>,
            },
            {
                path:'/borrowed-books',
                element: <ProtectedRoute><BorrowedBooks/></ProtectedRoute>,
            },
            {
                path:'/update-book/:id',
                element: <ProtectedRoute><UpdateBook/></ProtectedRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/books/${params.id}`)
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