import React, { useState } from 'react';
import { albumsData } from '../assets/assets';
import { motion } from "framer-motion";

function Player({ filteredSongs, handlePlayPause, isPlaying, playingIndex, audioRefs,setSearchQuery, searchQuery }) {
  
 
  const filteredAlbums = albumsData.filter(album =>
    album.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    album.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full w-[100%] lg:w-[70%] bg-[#121212] rounded-lg mx-2 p-2 overflow-y-auto">
      <h1 className="text-2xl text-gray-200 font-bold tracking-tighter p-2 mt-2">Popular Singles</h1>

      <div className="flex overflow-x-auto py-4 space-x-4">
        {filteredSongs.length > 0 ? (filteredSongs.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 relative group h-[200px] lg:h-[240px] hover:bg-[#1f1f1f] mx-2 p-1 rounded-md transition-opacity ease-in group-hover:opacity-100"
          >
            <img
              className="w-32 h-32 m-2 md:w-36 md:h-36 lg:w-40 lg:h-40 object-cover transition-transform duration-300"
              src={item.image}
              alt={item.desc}
            />

            <div
              onClick={() => handlePlayPause(index)}
              className="cursor-pointer mt-2 absolute right-4 p-2 bottom-[65px] lg:bottom-[80px] bg-[#1DB954] rounded-full transition-all ease-in opacity-0 group-hover:opacity-100"
            >
              {isPlaying && playingIndex === index ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="black" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7z" fill="black" />
                </svg>
              )}
            </div>

            <div className="text-center text-white mt-2 w-36 lg:w-40 overflow-hidden">
              <p className="text-sm opacity-1">{item.name}</p>
              <p className="text-xs text-gray-400 text-center">{item.artist}</p>
            </div>

            <audio
              ref={(el) => (audioRefs.current[index] = el)}
              src={item.file}
              className="hidden"
              onEnded={() => setPlayingIndex(null)}
            />
          </div>
        ))): (
            <p className="text-white">No Songs found.</p>
          )}
      </div>

      <h1 className="text-2xl text-gray-200 font-bold tracking-tighter p-2">Popular Albums</h1>

      

      <div className="flex overflow-x-auto py-4 space-x-4">
        {filteredAlbums.length > 0 ? (
          filteredAlbums.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 relative group h-[200px] lg:h-[240px] hover:bg-[#1f1f1f] mx-2 p-1 rounded-md transition-opacity ease-in group-hover:opacity-100"
            >
              <img
                className="w-32 h-32 m-2 md:w-36 md:h-36 lg:w-40 lg:h-40 object-cover transition-transform duration-300"
                src={item.image}
                alt={item.desc}
              />

              <div
                onClick={() => handlePlayPause(index)}
                className="cursor-pointer mt-2 absolute right-4 p-2 bottom-[65px] lg:bottom-[80px] bg-[#1DB954] rounded-full transition-all ease-in opacity-0 group-hover:opacity-100"
              >
                {isPlaying && playingIndex === index ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="black" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5v14l11-7z" fill="black" />
                  </svg>
                )}
              </div>

              <div className="text-center text-white mt-2 w-36 lg:w-40 overflow-hidden">
                <p className="text-sm opacity-1">{item.name}</p>
                <p className="text-xs text-gray-400 text-center">{item.desc}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white w-full">No albums found.</p>
        )}
      </div>
    </div>
  );
}

export default Player;
