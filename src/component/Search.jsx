import React, {useState} from 'react'
import {FaSearch} from "react-icons/fa";
import {useNavigate} from 'react-router-dom';

function Search() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault;
    navigate('/search/' + input);
    setInput('');
  }

  const submitForm = () => {
    return false;
  }
  
  return (
    <div className='bg-teal-700 min-w-[300px] w-1/2 max-w-lg mt-5 text-white rounded-full px-3  h-10'>
      <div className='h-full flex flex-row justify-center items-center '>
        <input
          value={input}
          placeholder='Search Recipes ...'
          type='text'
          onChange={(e) => setInput(e.target.value)}
          className="pl-2 bg-[transparent] placeholder:text-white flex-auto"
        />
        <div className='w-[44px] h-full flex justify-center items-center' onClick={submitHandler}>
          <FaSearch size='1.2em'/>
        </div>
      </div>
    </div>
  )
}

export default Search