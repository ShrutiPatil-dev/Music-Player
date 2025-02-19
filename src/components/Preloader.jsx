import React from 'react';
import { FaMusic } from 'react-icons/fa';

const Preloader = () => {
  return (
    <div className="fixed top-0 center w-full h-full bg-black bg-opacity-80 flex justify-center items-center flex-col z-50">
      <FaMusic className="animate-spin text-[#1DB954] text-5xl" />
      <p className="text-white m-5 text-2xl">Loading...</p>
    </div>
  );
};

export default Preloader;
