import React from 'react'
import { DiCoffeescript } from "react-icons/di";
import { BsFillTrashFill } from "react-icons/bs";


function Modal(props) {
  
    const favorited = (
        <>
            <DiCoffeescript color='#0d9488' size='6em'/>
            <p className='text-teal-600 text-2xl font-medium text-center mt-3'>Recipe Has Been Added to Favorite List</p> 
        </>
    )

    const unfavorited = (
        <>
            <BsFillTrashFill color='#0d9488' size='4em'/>
            <p className='text-teal-600 text-2xl font-medium text-center mt-3'>Recipe Has Been Removed to Favorite List</p>
        </>
    )

    return (
    <div className='fixed flex justify-center items-center top-0 left-0 h-full w-full z-50 bg-teal-800/40'>
        <div className='w-[80%] bg-slate-50 h-[50%] rounded-lg flex justify-center items-center flex-col px-6'>
            {props.favorited ? favorited : unfavorited}
            <button className='mt-5 bg-teal-600 text-white py-1 px-5 rounded-lg hover:bg-teal-400' onClick={props.data}>Close</button>
        </div>
    </div>
  )
}

export default Modal