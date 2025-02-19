import React, { useState, useEffect } from 'react';

function MusicPlayer({ song, audioRef, isPlaying, setIsPlaying }) {

    // Toggle play/pause logic
    const togglePlayPause = () => {
        if (audioRef.paused) {
            audioRef.play();
            setIsPlaying(true);
        } else {
            audioRef.pause();
            setIsPlaying(false);
        }
    };

    useEffect(() => {
        const handlePlayPause = () => {
            if (audioRef.paused) {
                setIsPlaying(false);
            } else {
                setIsPlaying(true);
            }
        };

        audioRef.addEventListener('play', handlePlayPause);
        audioRef.addEventListener('pause', handlePlayPause);

        
        return () => {
            audioRef.removeEventListener('play', handlePlayPause);
            audioRef.removeEventListener('pause', handlePlayPause);
        };
    }, [audioRef, setIsPlaying]);

    return (
        <div className="flex items-center justify-center rounded-lg m-2 w-full">
          
            <img src={song.image} alt={song.name} className="w-11 h-11 mr-4" />

           
            <div className="text-white">
                <p className="text-sm">{song.name}</p>
                <p className="text-gray-400 text-xs">{song.artist}</p>
            </div>

          
            <button
                onClick={togglePlayPause}
                className="ml-6 p-2 bg-[#1DB954] rounded-full flex items-center justify-center"
            >
                {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="black" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5v14l11-7z" fill="black" />
                    </svg>
                )}
            </button>
        </div>
    );
}

export default MusicPlayer;
