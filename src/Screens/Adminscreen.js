// import React, { useState, useEffect } from "react";
// import { Tabs, Tag, Divider } from "antd";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import Swal from "sweetalert2";
// import Error from "../Components/Error";
// import Loader from "../Components/Loader";
// import Sucess from "../Components/Sucess";

// import { Modal } from 'antd';


// const { TabPane } = Tabs;

// const user = JSON.parse(localStorage.getItem("currentUser"));

// function Adminscreen() {
//   useEffect(() => {
//     if (!JSON.parse(localStorage.getItem("currentUser")).isAdmin) {
//       window.location.href = "/home";
//     }
//   }, []);

//   return (
//     <div className="container p-4 mx-auto mt-10 font-custom">
//       <h2 className="m-2 text-4xl text-center font-custom md-20">
//         Admin Panel
//       </h2>
//       <Tabs
//         defaultActiveKey="1"
//         className="w-full bg-gray-100 shadow-md font-custom"
//       >
//         <TabPane className="font-custom" tab="Bookings" key="1">
//           <div className=" font-custom row">
//             <Bookings />
//           </div>
//         </TabPane>
//         <TabPane tab="Rooms" key="2">
//           <div className="row">
//             <Rooms />
//           </div>
//         </TabPane>
//         <TabPane tab="Add Room" key="3">
//           <Addroom />
//         </TabPane>
//         {/* <TabPane tab="Upadate Room" key="4">
//           <UpdateRoom/>
//         </TabPane> */}
//         <TabPane tab="Users" key="4">
//           <Users />
//         </TabPane>
//       </Tabs>
//     </div>
//   );
// }

// export default Adminscreen;

// export function Bookings() {
//   const [bookings, setbookings] = useState([]);
//   const [loading, setloading] = useState(false);
//   const [error, seterror] = useState(false);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         setloading(true);
//         const { data } = await axios.get("/api/bookings/getallbookings");
//         setbookings(data);
//         setloading(false);
//       } catch (error) {
//         setloading(false);
//         seterror(true);
//       }
//     };

//     fetchBookings();
//   }, []);

//   return (
//     <div className="col-md-12">
//       <h1 className="text-2xl font-semibold">Bookings</h1>
//       {loading ? (
//         <Loader />
//       ) : error ? (
//         <Error />
//       ) : (
//         <div>
//           <table className="w-full text-left bg-white rounded-md shadow-md table-auto">
//             <thead className="text-white bg-gray-800 bs">
//               <tr>
//                 <th className="px-4 py-2">Booking Id</th>
//                 <th className="px-4 py-2">User Id</th>
//                 <th className="px-4 py-2">Room</th>
//                 <th className="px-4 py-2">Check in</th>
//                 <th className="px-4 py-2">Check out</th>
//                 <th className="px-4 py-2">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bookings.map((booking) => (
//                 <tr key={booking._id} className="border-b">
//                   <td className="px-4 py-2">{booking._id}</td>
//                   <td className="px-4 py-2">{booking.userid}</td>
//                   <td className="px-4 py-2">{booking.room}</td>
//                   <td className="px-4 py-2">{booking.fromDate}</td>
//                   <td className="px-4 py-2">{booking.toDate}</td>
//                   <td className="px-4 py-2">
//                     {booking.status === "booked" ? (
//                       <Tag color="green">Confirmed</Tag>
//                     ) : (
//                       <Tag color="red">Cancelled</Tag>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }





// export function Rooms() {
//   const [rooms, setRooms] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [selectedRoom, setSelectedRoom] = useState(null);
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   useEffect(() => {
//     const fetchRooms = async () => {
//       try {
//         setLoading(true);
//         const { data } = await axios.get("/api/rooms/getallrooms");
//         setRooms(data);
//         setLoading(false);
//       } catch (error) {
//         setLoading(false);
//         setError(true);
//       }
//     };

//     fetchRooms();
//   }, []);

//   const handleUpdateClick = (room) => {
//     setSelectedRoom(room);
//     setIsModalVisible(true);
//   };

//   const handleUpdate = () => {
//     // Refresh the rooms list after updating
//     setIsModalVisible(false);
//     fetchRooms(); // Call the fetchRooms function to refresh the data
//   };

//   const fetchRooms = async () => {
//     try {
//       const { data } = await axios.get("/api/rooms/getallrooms");
//       setRooms(data);
//     } catch (error) {
//       setError(true);
//     }
//   };
//   async function deleteroom(roomid) {
//         try {
//           await axios.post("/api/rooms/deleteroom", { roomid });
    
//           // Remove the deleted room from the state
//           setRooms(rooms.filter(room => room._id !== roomid));
//           toast.success("Room deleted successfully");
//         } catch (error) {
//           toast.error("Failed to delete room");
//         }
//       }

//   return (
//     <div className="justify-center align-middle col-md-12">
//       {loading ? (
//         <Loader />
//       ) : error ? (
//         <Error />
//       ) : (
//         <div>
//           <table className="w-full text-left bg-white rounded-md shadow-md table-auto">
//             <thead className="text-white bg-gray-800">
//               <tr>
//                 <th className="px-4 py-2">Room Id</th>
//                 <th className="px-4 py-2">Name</th>
//                 <th className="px-4 py-2">Type</th>
//                 <th className="px-4 py-2">Price / Night ($)</th>
//                 <th className="px-4 py-2">Max Count</th>
//                 <th className="px-4 py-2">Area ft</th>
//                 <th className="px-4 py-2">Delete</th>
//                 <th className="px-4 py-2">Update</th>
//               </tr>
//             </thead>
//             <tbody>
//               {rooms.map((room) => (
//                 <tr key={room._id} className="border-b">
//                   <td className="px-4 py-2">{room._id}</td>
//                   <td className="px-4 py-2">{room.name}</td>
//                   <td className="px-4 py-2">{room.type}</td>
//                   <td className="px-4 py-2">{room.rentperday}</td>
//                   <td className="px-4 py-2">{room.maxcount}</td>
//                   <td className="px-4 py-2">{room.phonenumber}</td>
//                   <td className="px-4 py-2">
                    
//                     <button
//                       className="px-3 py-2 font-semibold text-white transition duration-300 bg-red-900 rounded-lg font-custom hover:bg-red-950 focus:outline-none focus:ring-2 focus:ring-yellow-600"
//                       onClick={() => deleteroom(room._id)}
//                     >
//                       Delete Room
//                     </button>
//                   </td>
//                   <td className="px-4 py-2">
//                     <button
//                       className="px-3 py-2 font-semibold text-white transition duration-300 rounded-lg bg-accent hover:bg-accent-hover font-custom focus:outline-none focus:ring-2 focus:ring-yellow-600"
//                       onClick={() => handleUpdateClick(room)}
//                     >
//                       Update Room
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//       <Modal
//         title="Update Room"
//         visible={isModalVisible}
//         footer={null}
//         onCancel={() => setIsModalVisible(false)}
//       >
//         {selectedRoom && (
//           <UpdateRoom room={selectedRoom} onUpdate={handleUpdate} />
//         )}
//       </Modal>
//       <ToastContainer />
//     </div>
//   );
// }


// export function Users() {
//   const [users, setusers] = useState([]);
//   const [loading, setloading] = useState(true);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const { data } = await axios.get("/api/users/getallusers");
//         setusers(data);
//         setloading(false);
//       } catch (error) {
//         setloading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="row">
//       {loading && <Loader />}

//       <div className="col-md-12">
//         <table className="w-full text-left bg-white rounded-md shadow-md table-auto">
//           <thead className="text-white bg-gray-800">
//             <tr>
//               <th className="px-4 py-2">Id</th>
//               <th className="px-4 py-2">Name</th>
//               <th className="px-4 py-2">Email</th>
//               <th className="px-4 py-2">IsAdmin</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users &&
//               users.map((user) => (
//                 <tr key={user._id} className="border-b">
//                   <td className="px-4 py-2">{user._id}</td>
//                   <td className="px-4 py-2">{user.name}</td>
//                   <td className="px-4 py-2">{user.email}</td>
//                   <td className="px-4 py-2">{user.isAdmin ? "YES" : "NO"}</td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export function Addroom() {
//   const [sucess, setsucess] = useState();
//   const [name, setname] = useState("");
//   const [rentperday, setrentperday] = useState();
//   const [maxcount, setmaxcount] = useState();
//   const [description, setdescription] = useState("");
//   const [phonenumber, setphonenumber] = useState("");
//   const [type, settype] = useState("");
//   const [image1, setimage1] = useState("");
//   const [image2, setimage2] = useState("");
//   const [image3, setimage3] = useState("");

//   async function addRoom() {
//     const newroom = {
//       name,
//       rentperday,
//       maxcount,
//       description,
//       phonenumber,
//       type,
//       imageurls: [image1, image2, image3],
//     };

//     try {
//       await axios.post("/api/rooms/addroom", newroom);
//       setsucess(true);
//       toast.success("Room added successfully");
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   }

//   return (
//     <div className="flex justify-center min-h-screen bg-gray-50">
//       <div className="flex flex-col w-full max-w-4xl p-8 space-y-6 bg-white rounded-lg shadow-md md:flex-row md:space-y-0 md:space-x-6">
//         <div className="space-y-4 text-left md:w-1/2">
//           <div>
//             <label className="block font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setname(e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="block font-medium text-gray-700">
//               Price / Night
//             </label>
//             <input
//               type="text"
//               className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="Price"
//               value={rentperday}
//               onChange={(e) => setrentperday(e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="block font-medium text-gray-700">Max count</label>
//             <input
//               type="text"
//               className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="Max count"
//               value={maxcount}
//               onChange={(e) => setmaxcount(e.target.value)}
//             />
//           </div>
//           {/* {sucess && <Sucess className="mt-40" message={"Room Added Successfully!"} />} */}
//           <div>
//             <label className="block font-medium text-gray-700">
//               Description
//             </label>
//             <input
//               type="text"
//               className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="Description"
//               value={description}
//               onChange={(e) => setdescription(e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="block font-medium text-gray-700">Area</label>
//             <input
//               type="text"
//               className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="Area in ft"
//               value={phonenumber}
//               onChange={(e) => setphonenumber(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="space-y-4 text-left md:w-1/2">
//           <div>
//             <label className="block font-medium text-gray-700">Type</label>
//             <input
//               type="text"
//               className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="Type"
//               value={type}
//               onChange={(e) => settype(e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="block font-medium text-gray-700">
//               Image URL 1
//             </label>
//             <input
//               type="text"
//               className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="Image URL 1"
//               value={image1}
//               onChange={(e) => setimage1(e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="block font-medium text-gray-700">
//               Image URL 2
//             </label>
//             <input
//               type="text"
//               className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="Image URL 2"
//               value={image2}
//               onChange={(e) => setimage2(e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="block font-medium text-gray-700">
//               Image URL 3
//             </label>
//             <input
//               type="text"
//               className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="Image URL 3"
//               value={image3}
//               onChange={(e) => setimage3(e.target.value)}
//             />
//           </div>

//           <div className="mt-6 text-right">
//             <button
//               className="px-6 py-2 font-semibold text-white rounded-md shadow bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent"
//               onClick={addRoom}
//             >
//               ADD ROOM
//             </button>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }

// export function UpdateRoom({ room, onUpdate }) {
//   const [name, setName] = useState(room.name);
//   const [rentPerDay, setRentPerDay] = useState(room.rentperday);
//   const [maxCount, setMaxCount] = useState(room.maxcount);
//   const [phoneNumber, setPhoneNumber] = useState(room.phonenumber);

//   async function handleSubmit() {
//     const updatedRoom = {
//       name,
//       rentperday: parseFloat(rentPerDay),
//       maxcount: parseInt(maxCount, 10),
//       phonenumber: phoneNumber,
//     };

//     try {
//       await axios.post("/api/rooms/updateroom", {
//         roomid: room._id,
//         updates: updatedRoom,
//       });

//       toast.success("Room updated successfully");
//       onUpdate(); // Notify parent component to refresh data
//     } catch (error) {
//       toast.error("Failed to update room");
//     }
//   }

//   return (
//     <div>
//       <div>
//         <label className="block font-medium text-gray-700">Name</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Name"
//           className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//         />
//       </div>

//       <div>
//         <label className="block font-medium text-gray-700">Rent per Day</label>
//         <input
//           type="number"
//           value={rentPerDay}
//           onChange={(e) => setRentPerDay(e.target.value)}
//           placeholder="Rent per Day"
//           className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//         />
//       </div>

//       <div>
//         <label className="block font-medium text-gray-700">Max Count</label>
//         <input
//           type="number"
//           value={maxCount}
//           onChange={(e) => setMaxCount(e.target.value)}
//           placeholder="Max Count"
//           className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//         />
//       </div>

//       <div>
//         <label className="block font-medium text-gray-700">Area</label>
//         <input
//           type="text"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//           placeholder="Area"
//           className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//         />
//       </div>

//       <div className="mt-6 text-right">
//         <button
//           onClick={handleSubmit}
//           className="px-6 py-2 font-semibold text-white rounded-md shadow bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent"
//         >
//           Update Room
//         </button>
//       </div>
//     </div>
//   );
// }