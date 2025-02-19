import React, {useState} from 'react'
import { assets } from '../assets/assets'


function Sidebar() {
  
  return (
    <div className='hidden lg:flex flex-col items-center h-full w-[30%] bg-[#121212] rounded-lg mx-2 text-white p-5'>
      <div className="flex  justify-between items-center p-1 gap-24 ">
        <div className="flex items-center gap-3 opacity-65">
        <img src={assets.Stack} className='h-6 w-6' alt=""/>
        <p>Your Libraray</p>
        </div>
        <img src={assets.Plus} className='h-6 w-6 opacity-65' alt=""/>
      </div>

      <div className='flex flex-col justify-start items-start bg-[#1f1f1f] p-4 my-8 w-full rounded-md'>
        <h1 className='font-bold my-1'>Create your first playlist</h1>
        <p className='font-extralight text-sm text-gray-200 my-2'>It's easy, we'll help you</p>
        <button className='bg-white text-black text-sm font-semibold rounded-full py-1 px-2'>Create Playlist</button>
      </div>

      <div className='flex flex-col justify-start items-start bg-[#1f1f1f] p-4 my-8 w-full rounded-md'>
        <h1 className='font-bold my-1'>Let's find some podcasts to follow</h1>
        <p className='font-extralight text-sm text-gray-200 my-2'>We'll keep you updated on new episodes</p>
        <button className='bg-white text-black text-sm font-semibold rounded-full py-1 px-2'>Browse Podcasts</button>
      </div>
     

      
          
    </div>
  )
}

export default Sidebar
