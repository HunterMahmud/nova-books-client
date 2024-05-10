import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "./../components/Footer";

const Root = () => {
  return (
    <div className="bg-white dark:bg-gray-900 ">
      <Navbar />
      <div className="min-h-[calc(100vh-248.8px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
