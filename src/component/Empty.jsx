import React from 'react'
import {BsEmojiFrownFill} from "react-icons/bs"

function Empty() {
  return (
    <div className='h-60 px-8 text-center flex flex-col justify-center items-center'>
        <BsEmojiFrownFill size='3em' color='#0d9488'/>
        <h3 className='mt-5 text-teal-600'>Opss, the item you're looking is not found</h3>
    </div>
  )
}

export default Empty