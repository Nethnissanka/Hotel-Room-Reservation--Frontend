import React, { useState } from "react";
import axios from "axios";
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import Sucess from "../Components/Sucess";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import backgroundImage from "../Screens/images/background.jpg"; // Import the image

function Registerscreen() {
  // States for Inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  // States for Response
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [sucess, setSucess] = useState();

  // Register Function
  async function register() {
    if (password === cpassword) {
      // Object Getting Values from Inputs
      const user = {
        name,
        email,
        password,
        cpassword,
      };
      //Sending Data to MongoDB
      try {
         setLoading(true);
        const result = (await axios.post('/api/users/register', user)).data;
         setLoading(false);
         setSucess(true);

         setName("");
         setEmail("");
         setPassword("");
         setCpassword("");
      } catch (error) {
         setLoading(false);
         setError(true);
        console.log(error);
      }
    } else {
      alert("Passwords do not match!");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {loading && <Loader />}
      {error && <Error />}
      

      <div className="font-custom w-full max-w-md p-8 space-y-6 bg-transparent border border-gray-700 rounded-lg shadow-lg bg-opacity-70">
      {sucess && <Sucess message={"Registration Success"} />}
        <h1 className="text-2xl font-bold text-center text-white">Register</h1>
        <div>
          <input
            type="text"
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
            placeholder="Confirm Password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
          />
          <button
            className="w-full px-4 py-2 font-bold text-white bg-yellow-800 rounded-lg hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            onClick={register}
          >
            Register
          </button>
          <div className="mt-4 text-center">
            <p className="font-bold text-gray-100">
              Have an account?    {'    '}
             <span className=" text-white"> <Link to="/login" className="hover:underline hover:text-accent-hover">
                    Login
              </Link></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerscreen;
