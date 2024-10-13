

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Components/logo (1).png'; // Update the path to your logo file

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const logOut = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  }

  return (
    <nav className="p-3.5 bg-black opacity-85 sticky top-0 z-50 w-full overflow-hidden">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center space-x-2">
          <Link to="/main" className="text-2xl font-bold text-white hover:text-gray-400">
            <img src={logo} alt="Logo" className="h-8 w-30" /> {/* Adjust height and width as needed */}
          </Link>
        </div>
        <div className="space-x-4 font-custom">
          <button onClick={() => navigate('/')} className="px-3 py-2 text-white rounded hover:bg-gray-700">Home</button>
          <button onClick={() => navigate('/home')} className="px-3 py-2 text-white rounded hover:bg-gray-700">Rooms</button>
          {user ? (
            <>
              <button onClick={() => navigate('/bookings')} className="px-3 py-2 text-white rounded hover:bg-gray-700">My Bookings</button>
              {/* <button onClick={() => navigate('/profile')} className="px-3 py-2 text-white rounded hover:bg-gray-700">Profile</button> */}

              <span className="px-3 py-2 text-white"><i className='mr-2.5 text-xl fa fa-user'></i>Wellcome {user.name}</span>
              <button onClick={logOut} className="px-3 py-2 text-white rounded hover:bg-gray-700">Logout</button>
            </>
          ) : (
            <>
              <button onClick={() => navigate('/register')} className="px-3 py-2 text-white rounded hover:bg-gray-700">Register</button>
              <button onClick={() => navigate('/login')} className="px-3 py-2 text-white rounded hover:bg-gray-700">Login</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

