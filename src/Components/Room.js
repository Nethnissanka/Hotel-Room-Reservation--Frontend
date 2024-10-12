// import React, { useState } from "react";
// import { Modal, Button, Carousel } from "react-bootstrap";
// import { Link } from "react-router-dom";

// import {
//   FaWifi,
//   FaCoffee,
//   FaBath,
//   FaParking,
//   FaSwimmingPool,
//   FaHotdog,
//   FaStopwatch,
//   FaCocktail,
// } from "react-icons/fa";
// const facilities = [
//   { name: "Wifi", icon: <FaWifi /> },
//   { name: "Coffee", icon: <FaCoffee /> },
//   { name: "Bath", icon: <FaBath /> },
//   { name: "Parking Space", icon: <FaParking /> },
//   { name: "Swimming Pool", icon: <FaSwimmingPool /> },
//   { name: "Breakfast", icon: <FaHotdog /> },
//   { name: "GYM", icon: <FaStopwatch /> },
//   { name: "Drinks", icon: <FaCocktail /> },
// ];

// function Room({ room ,fromDate,toDate}) {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (
//     <div className="bg-gray-100 row bs .rounded">
//       <div className=" .rounded my-2 col-md-4">
//         <img src={room.imageurls[0]} className="smallimg" alt="thumbnail" />
//       </div>
//       <div className="text-left col-md-7">
//         <h1 className="mb-3 font-serif text-2xl font-bold text-accent">
//           {room.name}
//         </h1>
        
//         <b className="space-y-4 text-gray-600 font-roboto">
//           <p>
//             {room.maxcount - 1}- {room.maxcount} Persons{" "}
//           </p>
//           <p> {room.phonenumber} sqft room</p>
//           <p> {room.rentperday}$/ Night</p>

//           <div className="flex flex-wrap gap-3">
//             {" "}
//             Amenities:
//             {facilities.map((facility, index) => (
//               <div key={index} className="flex items-center">
//                 {facility.icon}
//               </div>
//             ))}
//           </div>
//         </b>
//         <div style={{ float: "right" }}>
//           {/* Path Defined for Room and Dates */}
//           {/* to={`/book/${room._id}/${fromDate}/${toDate}`} */}
//           <Link to={`/book/${room._id}/${fromDate}/${toDate}`}>
//             <button className="px-4 py-2 my-2 font-serif font-semibold text-white transition duration-300 rounded-lg bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-yellow-600">
//               Book Now
//             </button>
//           </Link>
//           <button
//             className="px-4 py-2 font-serif font-semibold text-white transition duration-300 rounded-lg ml-7 bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-yellow-600"
//             onClick={handleShow}
//           >
//             View Details
//           </button>
//         </div>
//       </div>

//       <Modal show={show} onHide={handleClose} size="lg">
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-75">
//           <div className="w-full max-w-4xl mx-4 bg-white rounded-lg shadow-lg">
//             <div className="flex items-center justify-between p-4 border-b border-gray-200">
//               <h2 className="text-xl font-semibold">{room.name}</h2>
//               <button
//                 onClick={handleClose}
//                 className="text-gray-400 hover:text-gray-600 focus:outline-none"
//               >
//                 <span className="sr-only">Close</span>
//                 <svg
//                   className="w-6 h-6"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//             </div>
//             <div className="p-4">
//               <div className="relative">
//                 <Carousel className="space-y-4">
//                   {room.imageurls.map((url, index) => (
//                     <div key={index} className="carousel-item">
//                       <img
//                         className="object-cover w-full rounded-md h-96"
//                         src={url}
//                         alt={`Slide ${index}`}
//                       />
//                     </div>
//                   ))}
//                 </Carousel>
//               </div>
//               <p className="mt-4 text-gray-700">{room.description}</p>
//             </div>
//             <div className="flex justify-end p-4 border-t border-gray-200">
//               <button
//                 onClick={handleClose}
//                 className="px-4 py-2 text-white bg-black rounded hover:bg-gray-600 focus:outline-none"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// }

// export default Room;

//room.js
import React, { useState } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaSwimmingPool,
  FaHotdog,
  FaStopwatch,
  FaCocktail,
} from "react-icons/fa";

const facilities = [
  { name: "Wifi", icon: <FaWifi /> },
  { name: "Coffee", icon: <FaCoffee /> },
  { name: "Bath", icon: <FaBath /> },
  { name: "Parking Space", icon: <FaParking /> },
  { name: "Swimming Pool", icon: <FaSwimmingPool /> },
  { name: "Breakfast", icon: <FaHotdog /> },
  { name: "GYM", icon: <FaStopwatch /> },
  { name: "Drinks", icon: <FaCocktail /> },
];

function Room({ room, fromDate, toDate }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const handleBookNow = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      navigate(`/book/${room._id}/${fromDate}/${toDate}`);
    } else {
      navigate("/register");
    }
  };

  return (
    <div className="bg-gray-100 rounded row bs">
      <div className=" .rounded my-2 col-md-4">
        <img src={room.imageurls[0]} className="smallimg" alt="thumbnail" />
      </div>
      <div className="text-left col-md-7">
        <h1 className="mb-3 text-2xl font-bold font-custom text-accent">
          {room.name}
        </h1>
        <b className="space-y-4 text-gray-600 font-custom">
          <p>
            {room.maxcount - 1}- {room.maxcount} Persons{" "}
          </p>
          <p> {room.phonenumber} sqft room</p>
          <p> {room.rentperday}$/ Night</p>

          <div className="flex flex-wrap gap-3">
            {" "}
            Amenities:
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-center">
                {facility.icon}
              </div>
            ))}
          </div>
        </b>
        <div style={{ float: "right" }}>
          <button
            className="px-4 py-2 my-2 font-semibold text-white transition duration-300 rounded-lg font-custom bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-yellow-600"
            onClick={handleBookNow}
          >
            Book Now
          </button>
          <button
            className="px-4 py-2 font-semibold text-white transition duration-300 rounded-lg font-custom ml-7 bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-yellow-600"
            onClick={handleShow}
          >
            View Details
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-75">
          <div className="w-full h-screen max-w-4xl mx-4 overflow-scroll bg-white shadow-lg snap-y snap-mandatory ">
            <div className="flex items-center justify-between p-4 border-b border-accent">
              <h2 className="text-4xl font-semibold uppercase text-accent font-custom">{room.name}</h2>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                <span className="text-white sr-only bg-accent font-custom hover:bg-accent-hover">Close</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <div className="relative">
                
                <Carousel className="space-y-4">
                  {room.imageurls.map((url, index) => (
                    <div key={index} className="carousel-item">
                      <img
                        className="object-cover w-full bg-fixed"
                        src={url}
                        alt={`Slide ${index}`}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
              <p className="mt-4 text-lg text-gray-700 font-custom">{room.description}</p>
              <b className="space-y-4 text-accent font-custom">
          <p>
            {room.maxcount - 1}- {room.maxcount} Persons{" "}
          </p>
          <p> {room.phonenumber} sqft room</p>
          <p> {room.rentperday}$/ Night</p>

          <div className="flex flex-wrap gap-3 text-accent">
            {" "}
            
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-center">
                {facility.icon}
              </div>
            ))}
          </div>
        </b>
            </div>
            <div className="flex justify-end p-4 border-t border-accent">
              <button
                onClick={handleClose}
                className="px-4 py-2 text-white bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-yellow-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Room;
