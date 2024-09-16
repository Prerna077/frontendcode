// PaymentGatewayPage.js
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Payment.css';

const stripePromise = loadStripe('your_stripe_publishable_key');

function PaymentGatewayPage() {
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error('Payment failed:', error);
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      console.log('Payment successful:', paymentMethod);
      setPaymentError(null);
      setPaymentSuccess('Payment successful!');
      // You can send the paymentMethod.id to your server to complete the payment
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment Gateway</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Card number
          <CardElement className="card-element" />
        </label>
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
        {paymentError && <div className="error-message">{paymentError}</div>}
        {paymentSuccess && <div className="success-message">{paymentSuccess}</div>}
      </form>
    </div>
  );
}

function PaymentGatewayPageWrapper() {
  return (
    <div className="wrapper">
      <Elements stripe={stripePromise}>
        <PaymentGatewayPage />
      </Elements>
    </div>
  );
}

export default PaymentGatewayPageWrapper;
