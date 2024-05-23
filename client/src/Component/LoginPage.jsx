
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
// import Dashboard from "../Deshboard/Dashboard";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, dispatch } = useStateValue();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    try {
      const response = await axios.post(
        'http://localhost:8080/auth/login',
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
          credentials: 'include',
        }
      );
      console.log('1');
      console.log(response);
      console.log('2');
      dispatch({
        type: 'SIGN_IN',
        email: email,
        userType: response.data.userType,
      });
      // Navigate to dashboard after successful login
      if(response.data.userType==="student")
      navigate('/adminlayout');
      else
      navigate('adminlayout/profile');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-400">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <div className="flex justify-center">
          {/* <img className="h-12" src={logo} alt="Logo" /> */}
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
          Log in to your account
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                // type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">


            <div className="text-sm">
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>    
  );
};

export default LoginPage;
