import React from 'react'
import { FaHeart } from "react-icons/fa";

function Liked() {
  return (
    <div className='fixed right-[30px] bottom-[30px] rounded-full bg-slate-50 border-2 border-teal-500 p-3 z-10 w-[50px] h-[50px] flex justify-center items-center'>
        <FaHeart size='2.2em' color='#dc2626'/>
    </div>
  )
}

export default Liked