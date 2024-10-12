import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../Components/Room";
import Loader from "../Components/Loader";
import "antd/dist/reset.css";
import moment from "moment";
import { DatePicker} from "antd";
import backgroundImage from "../Screens/images/a6d645110189895.5fe657ef098e6.jpg"; // Import the image
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

const { RangePicker } = DatePicker;

function Homescreen() {
  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState([]);
  const [error, seterror] = useState();

  // Creating two Hooks for Date Handling
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  const [duplicaterooms, setduplicaterooms] = useState([]);
  const [searchkey, setsearchkey] = useState('');
  const [type, settype] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const { data } = await axios.get("/api/rooms/getallrooms");
        setrooms(data);
        setduplicaterooms(data);
        setloading(false);
      } catch (error) {
        seterror(true);
        console.error(error);
        setloading(false);
      }
    };

    fetchData();

    // Initialize AOS for animations
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      offset: 50,     // offset from trigger point
    });
    AOS.refresh();
  }, []);

  const filterByDate = (dates) => {
    setFromDate(dates[0].format("DD-MM-YYYY"));
    setToDate(dates[1].format("DD-MM-YYYY"));

    var temprooms = [];
    var availability = false;

    for (const room of duplicaterooms) {
      if (room.currentbookings.length > 0) {
        for (const booking of room.currentbookings) {
          if (
            !moment(dates[0].format("DD-MM-YYYY")).isBetween(
              booking.fromDate,
              booking.toDate
            ) &&
            !moment(dates[1].format("DD-MM-YYYY")).isBetween(
              booking.fromDate,
              booking.toDate
            )
          ) {
            if (
              dates[0].format("DD-MM-YYYY") !== booking.fromDate &&
              dates[0].format("DD-MM-YYYY") !== booking.toDate &&
              dates[1].format("DD-MM-YYYY") !== booking.fromDate &&
              dates[1].format("DD-MM-YYYY") !== booking.toDate
            ) {
              availability = true;
            }
          }
        }
      }
      if (availability === true || room.currentbookings.length === 0) {
        temprooms.push(room);
      }
      setrooms(temprooms);
    }
  };

  function filterBySearch() {
    const temprooms = duplicaterooms.filter(room =>
      room.name.toLowerCase().includes(searchkey.toLowerCase())
    );
    setrooms(temprooms);
  }

  function filterByType(e) {
    settype(e);
    if (e !== 'all') {
      const temprooms = duplicaterooms.filter(room =>
        room.type.toLowerCase().includes(e.toLowerCase())
      );
      setrooms(temprooms);
    } else {
      setrooms(duplicaterooms);
    }
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-fixed bg-gray-800 bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="justify-center mt-5 row bss focus:ring-yellow-600">
          <div className="mt-2 col-md-5" data-aos="fade-up">
            <RangePicker
              className="text-accent"
              format={"DD-MM-YYYY"}
              onChange={filterByDate}
            />
          </div>

          <div className="ml-4 col-md-3" data-aos="fade-right">
            <input
              type="text"
              className="m-2 text-sm form-control i2 font-custom"
              placeholder="Search Rooms"
              value={searchkey}
              onKeyUp={filterBySearch}
              onChange={(e) => {
                setsearchkey(e.target.value);
              }}
            />
          </div>
          
          <div className="ml-7 col-md-2" data-aos="fade-left">
            <select
              className="m-2 text-sm text-gray-500 font-custom text form-control"
              value={type}
              onChange={(e) => {
                filterByType(e.target.value);
              }}
            >
              <option value="all">All</option>
              <option value="Room">Rooms</option>
              <option value="Suite">Suites</option>
            </select>
          </div>
        </div>

        <div className="mt-5 mb-20 row justify-content-center">
          {loading ? (
            <Loader />
          ) : (
            rooms.map((room) => {
              return (
                <div
                  className="mt-4 transition-transform transform col-md-9 hover:scale-105"
                  data-aos="zoom-in"
                  key={room._id}
                >
                  <Room room={room} fromDate={fromDate} toDate={toDate} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Homescreen;
