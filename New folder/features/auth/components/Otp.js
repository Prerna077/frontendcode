import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import axios from "axios";
import {
  increment,
  incrementAsync,
  selectCount,
} from '../authSlice';
import { Link } from 'react-router-dom';
import axios from "axios";


export default function Otp() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(0); // Initial timer value
  const [showVerifyButton, setShowVerifyButton] = useState(true); // State to control the visibility of the "Verify OTP" button
  useEffect(() => {
    let countdownInterval;
    if (timer > 0) {
      countdownInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
 // const [carts, setCarts] = useState([]);
  // useEffect(()=>{
  //   async function getAllCart(){
  //     try {
  //       const cart = await axios.patch("http://127.0.0.1:8000/add_to_cart/30/8/")
  //       console.log(carts.data)
  //       setCarts(carts.data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getAllCart()
  // },[]

// )
    // Clear the interval when the timer reaches 0
    if (timer === 0) {
      clearInterval(countdownInterval);
      setShowVerifyButton(true);
    }

    // Clean up the interval when the component unmounts or when timer changes
    return () => clearInterval(countdownInterval);
  }, [timer]); // Re-run the effect whenever the timer change
  const handleVerifyOTP = () => {
    // Add your OTP verification logic here
    console.log('OTP Verified!');
    setTimer(15); // Start the 15-second timer
    setShowVerifyButton(false); // Hide the "Verify OTP" button
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
          Please Verify Your Mobile Number 
          </h2>
         
     
        </div>

        <div>
              <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                OTP
              </label>
              <div className="mt-2">
                <input
                  id="number"
                  name="number"
                  type="number"
                  autoComplete="number"
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
            <div className="mt-2">
              
            {showVerifyButton && <button onClick={handleVerifyOTP}   type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>Verify OTP</button>}
                
            
            </div>
          

          <p className="mt-10 text-center text-sm text-gray-500">
            did't receive the OTP{' '}
            <button type="submit" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            {!showVerifyButton &&  <p>resend otp in {timer} seconds</p>}
            </button>
          </p>
        </div>
    
    </>
  );
}