import React from 'react';
import 'ionicons/icons'; // Import the Ionicons icons
import logo from '../Components/logo (1).png'; // Update the path to your logo file
import 'ionicons/dist/css/ionicons.min.css';


const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-sm leading-6 text-gray-400 duration-300 cursor-pointer hover:text-accent"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-5 px-5 py-16 ml-20 text-left sm:grid-cols-3 lg:grid-cols-5 sm:px-8">
      <h1 className="py-8 ml-0 text-3xl font-extrabold text-accent">
        <img src={logo} alt="Logo" className="h-8 w-30" />
      </h1>
      <Item Links={EXPLORE} title="EXPLORE" />
      <Item Links={CONTACTS} title="CONTACTS" />
      <Item Links={TELEPHONE} title="TELEPHONE" />
    </div>
  );
};

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-accent">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center rounded-full bg-zinc-500 mx-1.5 text-xl hover:text-gray-100 hover:bg-accent duration-300"
        >
          <ion-icon name={icon.name}></ion-icon> {/* Ionicon element */}
        </span>
      ))}
    </div>
  );
};

// Footer data
export const EXPLORE = [
  { name: "Home", link: "#" },
  { name: "Rooms & Suites", link: "#" },
  { name: "Restaurant", link: "#" },
  { name: "Spa", link: "#" },
  { name: "About Hotel", link: "#" },
];

export const CONTACTS = [
  { name: "1613 , Havlock Road,", link: "#" },
  { name: "Colombo 05", link: "#" },
  { name: "Sri Lanka", link: "#" },
];

export const TELEPHONE = [
  { name: "011 235 6887", link: "#" },
  { name: "info@cappahotel@gmail.com", link: "#" },
  { name: "Customer Stories", link: "#" },
];

export const Icons = [
  { name: "logo-facebook", link: "#" },
  { name: "logo-twitter", link: "#" },
  { name: "logo-github", link: "#" },
  { name: "logo-linkedin", link: "#" },
  { name: "logo-instagram", link: "#" },
];

// Footer component
const Footer = () => {
  return (
    <footer className="mt-2 text-white bg-zinc-900">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1 className="mb-6 text-3xl font-semibold lg:text-4xl md:mb-0 lg:leading-normal md:w-2/5">
          <span className="text-accent">Join</span> Our News Letter..
        </h1>
        <div className="px-40">
          <input
            type="text"
            placeholder="                Enter Your email"
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded-full px-2 focus:outline-none"
          />
          <button
            className="bg-accent font-semibold hover:bg-accent-hover duration-300 px-5 py-2.5 font-[Poppins] rounded-full text-white md:w-auto w-full"
          >
            Submit
          </button>
        </div>
      </div>
      <ItemsContainer />
      <div className="grid grid-cols-1 gap-3 pt-2 pb-8 text-sm text-center text-gray-400 sm:grid-cols-2 lg:grid-cols-3">
        <span>© 2024 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;
