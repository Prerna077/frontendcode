import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  incrementAsync,
  selectCount,
} from '../authSlice';
import { Link } from 'react-router-dom';
import axios from "axios";


 
export default function Signup() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    console.log('Logging in...');
  };

  const isLoginDisabled = !firstName || !lastName || !email || !mobileNumber;

  const isValidFirstName = /^[A-Za-z]+$/.test(firstName);
  const isValidLastName = /^[A-Za-z]+$/.test(lastName);
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidMobileNumber = /^\d{10}$/.test(mobileNumber);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) || value === '') {
      setMobileNumber(value);
    }
  };

  return (
    <>

      <div className="mx-auto mt-12 bg-white max-w-2xl px-4 sm:px-6 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Welcome to Startrack
            <p>Create your account to start selling</p>
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
          <div>
              <div className="flex items-center justify-between">
                <label htmlFor="FirstName" className="block text-sm font-medium leading-6 text-gray-900">
                 First Name
                </label>
                
              </div>
              <div className="mt-2">
                <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={{ borderColor: firstName === '' || isValidFirstName ? 'initial' : 'red' }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                  {!isValidFirstName && firstName !== '' && (
          <p style={{ color: 'red' }}>Please enter a valid first name</p>
        )}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between ">
                <label htmlFor="Last name" className="block text-sm font-medium leading-6 text-gray-900">
                  Last Name 
                </label>
                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2 ">
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  style={{ borderColor: lastName === '' || isValidLastName ? 'initial' : 'red' }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
                   {!isValidLastName && lastName !== '' && (
          <p style={{ color: 'red' }}>Please enter a valid last name</p>
        )}
              </div>
            </div>            
            <div>
              <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                Mobile Number
              </label>
              <div className="mt-2">
                <input
                       type="tel"
                       id="mobileNumber"
                       value={mobileNumber}
                       onChange={(e) => setMobileNumber(e.target.value)}
                       style={{ borderColor: mobileNumber === '' || isValidMobileNumber ? 'initial' : 'red' }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
               {!isValidMobileNumber && mobileNumber !== '' && (
          <p style={{ color: 'red' }}>Please enter a valid 10-digit mobile number</p>
        )}
              </div>
            </div>
            <div>
              <label htmlFor="email id" className="block text-sm font-medium leading-6 text-gray-900">
              Email Id
              </label>
              <div className="mt-2">
                <input
                   type="email"
                   id="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   style={{ borderColor: email === '' || isValidEmail ? 'initial' : 'red' }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />{!isValidEmail && email !== '' && (
                  <p style={{ color: 'red' }}>Please enter a valid email address</p>
                )}
          
              </div>
              
            </div>
            <div>
              <Link to="/otp">
              <button
                type="submit"  onClick={handleLogin} disabled={isLoginDisabled}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Account
              </button>
              </Link>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a Seller?{' '}
            <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}


