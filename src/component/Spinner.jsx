import React from 'react'

function Spinner() {
  return (
    <div className='h-60 px-8 text-center flex flex-col justify-center items-center'>
        <div class="sk-folding-cube">
        <div class="sk-cube1 sk-cube"></div>
        <div class="sk-cube2 sk-cube"></div>
        <div class="sk-cube4 sk-cube"></div>
        <div class="sk-cube3 sk-cube"></div>
      </div>
    </div>
  )
}

export default Spinner