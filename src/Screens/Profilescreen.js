// import React, { useEffect, useState } from "react";
// import { Tabs } from "antd";
// import axios from "axios";
// import Swal from "sweetalert2";
// import Error from "../Components/Error";
// import Loader from "../Components/Loader";
// import Sucess from "../Components/Sucess";
// import { Tag, Divider } from "antd";
// const { TabPane } = Tabs;

// const user = JSON.parse(localStorage.getItem("currentUser"));

// function Profilescreen() {
//   return (

//     <div className="mt-5 ml-3">
//       <Tabs className="font-custom text-accent hover:text-accent" defaultActiveKey="1">

//         <TabPane className=" text-accent hover:text-accent" tab="My Profile" key="1">
//           <div className=" font-custom row">
//             <div className="p-3 m-2 text-lg col-md-6 bs">
//               <h1>Name : {user.name}</h1>
//               <h1>Email : {user.email}</h1>
//               <h1>Admin Access : {user.isAdmin ? "Yes" : "No"}</h1>
//               <div className="text-right">
//                 <button className=" hover:bg-accent-hover focus:outline-none border-accent hover:border-accent focus:ring-2 focus:ring-yellow-600 bg-accent btn btn-primary">Get Admin Access</button>
//               </div>
//             </div>
//           </div>
//         </TabPane>

//         <TabPane tab="Bookings" key="2">
//           {/* <h1>
//             <MyOrders />
//           </h1> */}
//         </TabPane>

//       </Tabs>

//     </div>

//   );
// }

// export default Profilescreen;

// export function MyBookings() {

// const user = JSON.parse(localStorage.getItem("currentUser"));
//   //   const [mybookings, setmybookings] = useState([]);
//   //   const [loading, setloading] = useState(false);
//   //   const [error, seterror] = useState(false);
//   //   const [success, setsuccess] = useState(false);

//     useEffect(async() => {
//   //     try {
//   //       setloading(true);
//   //       const data = await (
//         //   await
//           const rooms= await(await axios.post("/api/getuserbookingsbyuserid/", {userid: user._id})).data
//           console.log(rooms)
//             // userid: JSON.parse(localStorage.getItem("currentUser"))._id,
//         //   })
//   //       ).data;
//   //       setmybookings(data);
//   //       setloading(false);
//   //     } catch (error) {
//   //       setloading(false);
//   //       seterror(true);
//   //     }
//     }, []);
//   //   async function cancelBooking(bookingid , roomid){
//   //     try {
//   //       setloading(true);
//   //       const result = await axios.post('/api/bookings/cancelbooking' , {bookingid:bookingid , userid:user._id , roomid:roomid});
//   //       setloading(false);
//   //       Swal.fire('Congrats' , 'Your Room has cancelled succeessfully' , 'success').then(result=>{
//   //         window.location.href='/profile'
//   //     })
//   //     } catch (error) {
//   //       Swal.fire('Oops' , 'Something went wrong' , 'error').then(result=>{
//   //         window.location.href='/profile'
//   //     })
//   //       setloading(false)
//   //     }
//   //   }

//     return (
//         <div>
//             <h1>My Bookings</h1>
//             <p>Coming Soon</p>
//         </div>
//   //     <div>
//   //       {loading ? (
//   //         <Loader />
//   //       ) : error ? (
//   //         <Error />
//   //       ) : (
//   //         mybookings.map(booking=>{
//   //           return <div className="row">
//   //           <div className="my-auto col-md-6">
//   //             <div className='p-2 m-1 bs'>
//   //               <h1>{booking.room}</h1>
//   //               <p>BookingId : {booking._id}</p>
//   //               <p>TransactionId : {booking.transactionId}</p>
//   //               <p><b>Check In : </b>{booking.fromdate}</p>
//   //               <p><b>Check Out : </b>{booking.todate}</p>
//   //               <p><b>Amount : </b> {booking.totalAmount}</p>
//   //               <p><b>Status</b> : {booking.status =='booked' ? (<Tag color="green">Confirmed</Tag>) : (<Tag color="red">Cancelled</Tag>)}</p>
//   //               <div className='text-right'>
//   //               {booking.status=='booked' && (<button className='btn btn-primary' onClick={()=>cancelBooking(booking._id , booking.roomid)}>Cancel Booking</button>)}
//   //               </div>
//   //             </div>
//   //           </div>
//   //         </div>
//   //         })
//   //       )}
//   //     </div>
//     );
// };
// // Profilescreen.js

// import React, { useEffect, useState } from "react";
// import { Tabs, Tag, Divider } from "antd";
// import axios from "axios";
// import Swal from "sweetalert2";
// import Error from "../Components/Error";
// import Loader from "../Components/Loader";
// import Sucess from "../Components/Sucess";

// const { TabPane } = Tabs;

// const user = JSON.parse(localStorage.getItem("currentUser"));

// function Profilescreen() {
//   return (
//     <div className="mt-5 ml-3">
//       <Tabs
//         className="font-custom text-accent hover:text-accent"
//         defaultActiveKey="1"
//       >
//         <TabPane
//           className="text-accent hover:text-accent"
//           tab="My Profile"
//           key="1"
//         >
//           <div className="font-custom row">
//             <div className="p-3 m-2 text-lg col-md-6 bs">
//               <h1>Name: {user.name}</h1>
//               <h1>Email: {user.email}</h1>
//               <h1>Admin Access: {user.isAdmin ? "Yes" : "No"}</h1>
//               <div className="text-right">
//                 <button className="hover:bg-accent-hover focus:outline-none border-accent hover:border-accent focus:ring-2 focus:ring-yellow-600 bg-accent btn btn-primary">
//                   Get Admin Access
//                 </button>
//               </div>
//             </div>
//           </div>
//         </TabPane>
//         <TabPane tab="Bookings" key="2">
//           <MyBookings />
//         </TabPane>
//       </Tabs>
//     </div>
//   );
// }

// export default Profilescreen;

// export function MyBookings() {
//   const user = JSON.parse(localStorage.getItem("currentUser"));
//   //   const [bookings, setBookings] = useState([]);
//   //   const [loading, setLoading] = useState(true);
//   //   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         //     setLoading(true);
//         const { data } = await axios.post("/api/bookings/getbookingsbyuserid", {
//           userid: user._id,
//         }).data;
//         console.log(data);
//         // setBookings(data);
//         // setLoading(false);
//       } catch (error) {
//         console.error(error);
//         //     setError(true);
//         //     setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);

//   //   const cancelBooking = async (bookingid, roomid) => {
//   //     try {
//   //       setLoading(true);
//   //       await axios.post("/api/bookings/cancelbooking", { bookingid, userid: user._id, roomid });
//   //       setLoading(false);
//   //       Swal.fire("Congrats", "Your Room has cancelled successfully", "success").then(() => {
//   //         window.location.href = "/profile";
//   //       });
//   //     } catch (error) {
//   //       Swal.fire("Oops", "Something went wrong", "error").then(() => {
//   //         window.location.href = "/profile";
//   //       });
//   //       setLoading(false);
//   //     }
//   //   };

//   //   if (loading) return <Loader />;
//   //   if (error) return <Error />;

//   return (
//     <div>
//       <h1>My Bookings</h1>
//       {/* <div className="row">
//         {bookings.map((booking) => (
//           <div className="col-md-6" key={booking._id}>
//             <div className="p-3 m-2 bs">
//               <h1>{booking.room}</h1>
//               <p><b>BookingId:</b> {booking._id}</p>
//               <p><b>TransactionId:</b> {booking.transactionId}</p>
//               <p><b>Check In:</b> {booking.fromdate}</p>
//               <p><b>Check Out:</b> {booking.todate}</p>
//               <p><b>Amount:</b> {booking.totalAmount}</p>
//               <p><b>Status:</b> <Tag color={booking.status === 'booked' ? 'green' : 'red'}>{booking.status.toUpperCase()}</Tag></p>
//               <div className="text-right">
//                 {booking.status === 'booked' && (
//                   <button className="btn btn-primary" onClick={() => cancelBooking(booking._id, booking.roomid)}>
//                     Cancel Booking
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div> */}
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tabs } from "antd";
import axios from "axios";
import Error from "../Components/Error";
import Loader from "../Components/Loader";
import { Tag } from "antd";

const { TabPane } = Tabs;

const user = JSON.parse(localStorage.getItem("currentUser"));

function Profilescreen() {
      return (
        <div className="mt-5 ml-3 ">
          <Tabs
            className="ml-10 font-custom text-accent hover:text-accent"
            defaultActiveKey="2"
          >
            <TabPane
              className="text-accent hover:text-accent"
              tab="My Profile"
              key="1"
            >
              <div className="font-custom row">
                <div className="p-3 m-2 text-lg col-md-6 bs">
                  <h1>Name: {user.name}</h1>
                  <h1>Email: {user.email}</h1>
                  <h1>Admin Access: {user.isAdmin ? "Yes" : "No"}</h1>
                  <div className="text-right">
                    <button className="hover:bg-accent-hover focus:outline-none border-accent hover:border-accent focus:ring-2 focus:ring-yellow-600 bg-accent btn btn-primary">
                      Get Admin Access
                    </button>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tab="Bookings" key="2">
              <MyOrders />
            </TabPane>
          </Tabs>
        </div>
      );
    }

export default Profilescreen;

export const MyOrders = () => {
  const [mybookings, setmybookings] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [sucess, setsucess] = useState(false);
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const { data } = await axios.post("/api/bookings/getbookingsbyuserid", {
          userid: user._id,
        });
        setmybookings(data);
        setloading(false);
      } catch (error) {
        setloading(false);
        seterror(true);
      }
    };

    fetchData();
  }, []);

  async function cancelBooking(bookingid, roomid) {
    try {
      setloading(true);
      const result = await axios.post("/api/bookings/cancelbooking", {
        bookingid,
        userid: user._id,
        roomid,
      });
      setloading(false);
      setsucess(true);
      toast.success("Your Booking has been cancelled  successfully")
    
      setTimeout(() => {
        window.location.href = "/bookings";
      }, 1000);
    
       


    } catch (error) {
   
      setloading(false);
    }
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        mybookings.map((booking) => (
          <div  key={booking._id}>
            
              <div className="w-2/5 p-2 m-1 mx-6 mb-4 ml-10 bg-white shadow-md bss">
                <h1 className="mb-4 text-xl font-extrabold font-custom text-accent">{booking.room}</h1>
                <div className="grid w-auto grid-cols-2 gap-0 ml-20 mr-10 text-left text-gray-500 font-custom">
                <b><p>Booking Id </p></b><p>: {booking._id}</p>
                <b><p>Transaction Id  </p></b><p> :{booking.transactionid}</p>
                <p>
                  <b>Check In  </b></p><p>
                  :{booking.fromDate}
                </p>
                <p>
                  <b>Check Out  </b></p><p>
                  : {booking.toDate}
                </p>
                <p>
                  <b>Amount  </b></p><p>: {booking.totalamount}
                </p>
                <p>
                  <b>Status</b> </p><p>:{" "}
                  {booking.status === "booked" ? (
                    <Tag color="green">Confirmed</Tag>
                  ) : (
                    <Tag color="red">Cancelled</Tag>
                  )}
                </p>
                </div>
                <div className="text-right">
                  {booking.status === "booked" && (
                    <button
                      className="px-6 py-2 font-semibold text-white transition duration-300 rounded-lg font-custom bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-yellow-600"
                      onClick={() => cancelBooking(booking._id, booking.roomid)}
                    >
                      Cancel Booking
                    </button>
                  )}
                </div>
              </div>
            </div>
        //   </div>
        ))
      )}
      <ToastContainer />
    </div>
  );
};

