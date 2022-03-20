import React from 'react'
import { FaHeart } from "react-icons/fa";

function UnLiked() {
  return (
    <div className='fixed right-[30px] bottom-[30px] rounded-full bg-slate-100 border-2 border-teal-500 p-3 z-10 w-[50px] h-[50px] flex justify-center items-center'>
        <FaHeart size='2.2em' color='#0d9488'/>
    </div>
  )
}

export default UnLiked