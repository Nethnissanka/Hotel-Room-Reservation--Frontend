import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import moment from "moment";
import StripeCheckout from "react-stripe-checkout";


function Bookingscreen() {
  const { roomid, fromDate, toDate } = useParams();
  const [sucess, setsucess] = useState();
  const [room, setroom] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const [totalamount, setTotalAmount] = useState(0);
  const [totaldays, setTotalDays] = useState(0);
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {

      
      try {
        setloading(true);
        const { data } = await axios.post("/api/rooms/getroombyid", { roomid });
        setroom(data);
        setloading(false);
      } catch (error) {
        seterror(true);
        console.error(error);
        setloading(false);
      }
    };

    fetchData();
  }, [roomid]);

  useEffect(() => {
    if (room && fromDate && toDate) {
      const todate = moment(toDate, "DD-MM-YYYY");
      const fromdate = moment(fromDate, "DD-MM-YYYY");
      const totaldays = todate.diff(fromdate, "days") + 1;
      setTotalDays(totaldays);

      // Update total amount
      const amount = totaldays * room.rentperday;
      setTotalAmount(amount);
    }
  }, [room, fromDate, toDate]);

  if (loading) return <Loader />;
  if (error) return <Error />;

  async function onToken(token) {
    console.log(token);

    const bookingDetails = {
      token,
      room,
      userid: JSON.parse(localStorage.getItem("currentUser"))._id,
      fromDate,
      toDate,
      totaldays,
      totalamount,
    };

    try {
      setloading(true);
      const result = await axios.post("/api/bookings/bookroom", bookingDetails);
      setloading(false);
      setsucess(true);
      toast.success("Room added successfully");
      setTimeout(() => {
        window.location.href = "/bookings";
      }, 1000);

    
        
      
    } catch (error) {
      console.error(error);
      setloading(false);
      toast.error("Something went wrong");
      
    }
  }

  return (
    <div className="p-6 mx-10 my-10 bg-white rounded-lg shadow-md">
      {loading ? (
        <Loader />
      ) : room ? (
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center p-6 rounded-lg bg-orange-50">
            <div className="w-full p-4 md:w-1/2">
              <h1 className="mb-4 text-4xl font-extrabold text-center font-custom text-accent">
                {room.name}
              </h1>
              <img
                className="object-cover w-full rounded-lg h-96"
                alt="booking"
                src={room.imageurls[0]}
              />
              
            </div>
            <div className="w-full p-4 md:w-1/2">
              <div className="mb-6 text-left">
                <h4 className="mb-2 text-xl font-bold text-gray-800 font-custom">
                  Booking Details
                </h4>
                <hr className="mb-4 border-gray-800" />
                <div className="grid grid-cols-2 gap-2 text-gray-500 font-custom">
                  <p className="font-medium">Name:</p>
                  <p>{JSON.parse(localStorage.getItem("currentUser")).name}</p>
                  <p className="font-medium">Check In:</p>
                  <p>{fromDate}</p>
                  <p className="font-medium">Check Out:</p>
                  <p>{toDate}</p>
                  <p className="font-medium">Max Count:</p>
                  <p>{room.maxcount}</p>
                </div>
              </div>

              <div className="text-left font-custom">
                <h4 className="mb-2 text-xl font-bold text-gray-800">
                  Amount
                </h4>
                <hr className="mb-4 border-gray-800" />
                <div className="grid grid-cols-2 gap-2 text-gray-500">
                  <p className="font-medium">Total Days:</p>
                  <p>{totaldays} Days</p>
                  <p className="font-medium">Amount Per Day:</p>
                  <p>{room.rentperday}$ / Night</p>
                  <p className="text-lg font-bold text-gray-800">Total Amount:</p>
                  <p className="text-lg font-bold text-gray-800">{totalamount}$</p>
                </div>
              </div>

              <div className="mt-6 text-right">
                <StripeCheckout
                  amount={totalamount * 100}
                  currency="USD"
                  token={onToken}
                  stripeKey="pk_test_51PicS3KZD25U7VxSyuKODiV9TMTnFrFFuVN5qxxy1Ve8HEoim19ryMywVUfHUPS6266R7zTJMWLJV6mVNsqfbP6V00M1e5OSme"
                >
                  <button className="px-6 py-2 font-semibold text-white transition duration-300 rounded-lg font-custom bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-yellow-600">
                    Pay Now
                  </button>
                </StripeCheckout>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Error />
      )}
      <ToastContainer />
    </div>
  );
}

export default Bookingscreen;
