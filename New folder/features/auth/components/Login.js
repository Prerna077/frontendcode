import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  increment,
  incrementAsync,
  selectCount,
} from '../authSlice';
import { Link } from 'react-router-dom';

export default function Login() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [mobileNumber, setMobileNumber] = useState('');
  const [isMobileNumberFilled, setIsMobileNumberFilled] = useState(false);

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
    setIsMobileNumberFilled(event.target.value !== ''); // Check if the mobile number field is filled
  };

  const handleLogin = () => {
    // Add your login logic here
    if (isMobileNumberFilled) {
      console.log('Login successful!');
      // Redirect the user or perform other actions after successful login
    } else {
      console.log('Please fill in your mobile number.');
    }
  };


  return (
    <>

      <div className="mx-auto mt-12 bg-white max-w-2xl px-4 sm:px-6 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="startrack"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                Mobile Number
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  id="mobileNumber"
                  value={mobileNumber}
                  onChange={handleMobileNumberChange}
                  placeholder="Enter your mobile number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

           

            <div>
            <Link to="/Otp">

              <button
                type="submit" onClick={handleLogin} disabled={!isMobileNumberFilled}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
                
              </button>
              
</Link>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Create an Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}