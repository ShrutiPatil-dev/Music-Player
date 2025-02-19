import React, { useState, useEffect, useRef } from 'react';
import { FaMusic } from 'react-icons/fa';
import Player from './components/Player'; 
import MusicPlayer from './components/MusicPlayer'; 
import { songsData, albumsData } from './assets/assets';
import Navbar from './components/Navbar'; 
import Sidebar from './components/Sidebar';
import Preloader from './components/Preloader';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [playingIndex, setPlayingIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const audioRefs = useRef([]);

  const filteredSongs = songsData.filter((item) => {
    if (searchQuery.trim() === '') {
      return true;
    }
    return (
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.artist.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handlePlayPause = (index) => {
    const audioElement = audioRefs.current[index];

    if (playingIndex === index) {
      if (audioElement.paused) {
        audioElement.play();
        setIsPlaying(true);
      } else {
        audioElement.pause();
        setIsPlaying(false);
      }
    } else {
      if (playingIndex !== null) {
        audioRefs.current[playingIndex].pause();
      }
      audioElement.play();
      setPlayingIndex(index);
      setIsPlaying(true);
    }
  };

  const handleAudioLoaded = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (playingIndex !== null) {
      const audioElement = audioRefs.current[playingIndex];
      audioElement.addEventListener('canplaythrough', handleAudioLoaded);

      return () => {
        audioElement.removeEventListener('canplaythrough', handleAudioLoaded);
      };
    }
  }, [playingIndex]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="h-screen bg-black">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <div className="h-[10%] flex">
            <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>

          <div className="h-[75%] flex">
            <Sidebar />
            <Player
              filteredSongs={filteredSongs}
              handlePlayPause={handlePlayPause}
              isPlaying={isPlaying}
              playingIndex={playingIndex}
              audioRefs={audioRefs}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>

          <div className="h-[14%] flex">
            {playingIndex !== null && (
              <MusicPlayer
                song={filteredSongs[playingIndex]}
                audioRef={audioRefs.current[playingIndex]}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
