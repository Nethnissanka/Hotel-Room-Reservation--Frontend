

// export function Rooms() {
//   const [rooms, setrooms] = useState([]);
//   const [loading, setloading] = useState(false);
//   const [error, seterror] = useState(false);
//   const [sucess, setsucess] = useState();

//   useEffect(() => {
//     const fetchRooms = async () => {
//       try {
//         setloading(true);
//         const { data } = await axios.get("/api/rooms/getallrooms");
//         setrooms(data);
//         setloading(false);
//       } catch (error) {
//         setloading(false);
//         seterror(true);
//       }
//     };

//     fetchRooms();
//   }, []);

//   async function deleteroom( roomid) {
//     try {
//       // setloading(true);
//       const result = await axios.post("/api/rooms/deleteroom", {
       
//         roomid,
//       });
//       // setloading(false);
//       // setsucess(true);
//       // toast.success("Your room deleted  successfully")
    
//       // setTimeout(() => {
//       //   window.location.href = "/bookings";
//       // }, 1000);
    
       


//     } catch (error) {
   
//       // setloading(false);
//     }
//   }

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
//                   <td className="px-4 py-2"><button
//                       className="px-6 py-2 font-semibold text-white transition duration-300 rounded-lg font-custom bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-yellow-600"
//                       onClick={() => deleteroom(room._id)}
//                     >
//                       Deleteroom
//                     </button></td>
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
//   const [rooms, setrooms] = useState([]);
//   const [loading, setloading] = useState(false);
//   const [error, seterror] = useState(false);

//   useEffect(() => {
//     const fetchRooms = async () => {
//       try {
//         setloading(true);
//         const { data } = await axios.get("/api/rooms/getallrooms");
//         setrooms(data);
//         setloading(false);
//       } catch (error) {
//         setloading(false);
//         seterror(true);
//       }
//     };

//     fetchRooms();
//   }, []);

//   async function deleteroom(roomid) {
//     try {
//       await axios.post("/api/rooms/deleteroom", { roomid });

//       // Remove the deleted room from the state
//       setrooms(rooms.filter(room => room._id !== roomid));
//       toast.success("Room deleted successfully");
//     } catch (error) {
//       toast.error("Failed to delete room");
//     }
//   }

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
//                       className="px-6 py-2 font-semibold text-white transition duration-300 rounded-lg font-custom bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-yellow-600"
//                       onClick={() => deleteroom(room._id)}
//                     >
//                       Delete Room
//                     </button>
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