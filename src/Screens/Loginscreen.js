import React, { useState } from 'react';
import axios from 'axios';
import Loader from '../Components/Loader';
import Error from '../Components/Error';
import { Link } from 'react-router-dom';
import backgroundImage from "../Screens/images/background.jpg"; // Import the image

function Loginscreen() {
  // States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  // Login Function
  async function login() {
    const user = { email, password };

     try {
       setLoading(true);
       const result = await (await axios.post('/api/users/login', user)).data;
       setLoading(false);
       localStorage.setItem("currentUser", JSON.stringify(result));
       window.location.href = "/home";
     } catch (error) {
       console.log(error);
       setLoading(false);
       setError(true);
     }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {loading && <Loader />}
      
      
      <div className=" font-custom w-full max-w-md p-8 space-y-6 bg-transparent border border-gray-600 rounded-lg shadow-lg bg-opacity-70">
      {error && <Error message={"Invalid Email or Password"} />}
        <h1 className="font-custom text-3xl font-bold text-center text-white">Login</h1>
        <div className="space-y-4">
          <input
            type="email"
            className="w-full px-4 py-2 placeholder-gray-400 transition duration-300 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full px-4 py-2 placeholder-gray-400 transition duration-300 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full px-4 py-2 font-semibold text-white transition duration-300 bg-yellow-800 rounded-lg hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            onClick={login}
          >
            Login
          </button>
        </div>
        <div className="mt-4 text-center">
          <p className="font-bold text-white">
            Don't have an account?{' '}
            <Link to="/register" className="text-white hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
