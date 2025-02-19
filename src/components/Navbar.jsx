import React from 'react';
import { IoIosMusicalNotes } from "react-icons/io";
import { assets } from '../assets/assets';

function Navbar({ searchQuery, setSearchQuery }) {
  return (
    <div className="relative flex justify-between items-center gap-2 lg:gap-7 p-1 m-2 w-full">
      <div className='flex items-center'>
      <h1 className="text-white flex items-center text-2xl"> 
        <IoIosMusicalNotes className="text-[#1DB954] bg-white lg:bg-transparent w-8 h-8 p-1 rounded-full transform transition-transform hover:scale-110 " />
        <span className="hidden lg:block">Music</span>
      </h1>

      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by song or artist"
        className="p-[6px] lg:p-[9px]  m-4  w-[200px] lg:w-[500px] bg-[#1f1f1f] text-white placeholder-gray-400 rounded-full placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1DB954] transition-all ease-in-out"
      />
      <div className="w-10 hidden lg:block h-10 bg-[#1f1f1f] p-2 rounded-full transform transition-transform hover:scale-110">
          <img src={assets.Home_icon} alt='home'/>
      </div>
      

      </div>
      

      <div className="absolute right-0 ">
        <p className="bg-green-600 w-11 h-11 flex justify-center items-center text-lg border-[#121212] border-[6px] text-white font-medium rounded-full transform transition-transform hover:scale-110">
          S
        </p>
      </div>
    </div>
  );
}

export default Navbar;
