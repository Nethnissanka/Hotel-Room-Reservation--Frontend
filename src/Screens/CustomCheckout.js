// CustomCheckout.js
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('pk_test_51PicS3KZD25U7VxSyuKODiV9TMTnFrFFuVN5qxxy1Ve8HEoim19ryMywVUfHUPS6266R7zTJMWLJV6mVNsqfbP6V00M1e5OSme');

const CheckoutForm = ({ room, totalamount, fromDate, toDate, totaldays }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
      setLoading(false);
    } else {
      const bookingDetails = {
        paymentMethod,
        room,
        userid: JSON.parse(localStorage.getItem("currentUser"))._id,
        fromDate,
        toDate,
        totaldays,
        totalamount,
      };

      try {
        const result = await axios.post("/api/bookings/bookroom", bookingDetails);
        console.log('Booking successful:', result);
        // Show success message or redirect
        setLoading(false);
      } catch (error) {
        console.error('Booking failed:', error);
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md">
      <CardElement className="p-2 border border-gray-300 rounded-md" />
      <button type="submit" disabled={!stripe || loading} className="px-4 py-2 mt-4 font-serif font-semibold text-white transition duration-300 rounded-lg bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-yellow-600">
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

const CustomCheckout = ({ room, totalamount, fromDate, toDate, totaldays }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm room={room} totalamount={totalamount} fromDate={fromDate} toDate={toDate} totaldays={totaldays} />
    </Elements>
  );
};

export default CustomCheckout;
