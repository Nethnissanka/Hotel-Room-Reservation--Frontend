import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homescreen from './Screens/Homescreen';
import Bookingscreen from './Screens/Bookingscreen';
import Registerscreen from './Screens/Registerscreen';
import Loginscreen from './Screens/Loginscreen';
import Profilescreen from './Screens/Profilescreen';
import Adminscreen from './Screens/Adminscreen';
import Landing from './Screens/Landingscreen';
import Footer from './Components/Footer';

import 'ionicons/dist/css/ionicons.min.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/home' element={<Homescreen />} />
          <Route path='/book/:roomid/:fromDate/:toDate' element={<Bookingscreen />} />
          <Route path='/register' element={<Registerscreen />} />
          <Route path='/login' element={<Loginscreen />} />
          <Route path='/bookings' element={<Profilescreen />} />
          <Route path='/admin' element={<Adminscreen />} />
          {/* <Route path='/main' element={<Mainscreen />} /> */}
          <Route path='/' element={<Landing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


