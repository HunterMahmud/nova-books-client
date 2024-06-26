import { createBrowserRouter } from "react-router-dom";
import NotFound from "./../pages/NotFound";
import Root from "./../Layouts/Root";
import Home from "./../pages/Home";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import AddBooks from "./../pages/AddBooks";
import ProtectedRoute from "../components/ProtectedRoute";
import AllBooks from "./../pages/AllBooks";
import BorrowedBooks from "./../pages/BorrowedBooks";
import UpdateBook from "./../pages/UpdateBook";
import CategoryPage from "./../components/CategoryPage";
import BookDetails from "./../pages/BookDetails";
import ReadList from "../pages/ReadList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-books",
        element: (
          <ProtectedRoute>
            <AddBooks />
          </ProtectedRoute>
        ),
      },
      {
        path: "/all-books",
        element: (
          <ProtectedRoute>
            <AllBooks />
          </ProtectedRoute>
        ),
      },
      {
        path: "/read-list",
        element: (
          <ProtectedRoute>
           <ReadList/>
          </ProtectedRoute>
        ),
      },
      {
        path: "/borrowed-books",
        element: (
          <ProtectedRoute>
            <BorrowedBooks />
          </ProtectedRoute>
        ),
      },
      {
        path: "/update-book/:id",
        element: (
          <ProtectedRoute>
            <UpdateBook />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_BASE_URL}/books/${params.id}`),
      },
      {
        path: "/category/:categoryName",
        element: <CategoryPage />,
      },
      {
        path: "/view-details/:id",
        element: (
          <ProtectedRoute>
            <BookDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
