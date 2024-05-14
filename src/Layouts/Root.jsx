import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "./../components/Footer";

const Root = () => {
  return (
    <div className="bg-white dark:bg-gray-900 bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent">
      <Navbar />
      <div className="min-h-[calc(100vh-248.8px)] max-w-7xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
