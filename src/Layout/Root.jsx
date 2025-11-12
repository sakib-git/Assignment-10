import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar></Navbar>
      <div className="flex-1 bg-base-200">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
       <ToastContainer />
    </div>
  );
};

export default Root;
