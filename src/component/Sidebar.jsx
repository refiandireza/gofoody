import React from 'react'
import { FaGlobeAsia } from "react-icons/fa"
import { GiCupcake } from "react-icons/gi";
import { Link } from 'react-router-dom';



function Sidebar() {
    const cuisine = [
        'African', 'American', 'British', 'Cajun', 'Caribbean', 'Eastern European', 'European', 'French', 'German', 'Greek', 'Indian', 'Irish', 'Italian', 'Japanese', 'Jewish', 'Korean', 'Latin American', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic', 'Southern', 'Spanish', 'Thai', 'Vietnamese'
    ];

    const type = [
        'main course',
        'side dish',
        'appetizer',
        'salad',
        'bread',
        'breakfast',
        'soup',
        'beverage',
        'sauce',
        'marinade',
        'fingerfood',
        'snack',
        'drink'
    ]

    let i = 0;

  
    return (
    <div className='hidden lg:block lg:col-span-3 2xl:col-span-2 bg-teal-700 sticky top-[60px] overflow-y-auto h-[calc(100vh-60px)]'>
        <div className='mx-5 mt-10 pb-3'>
            <div className='flex flex-row items-center justify-center h-10 text-white border-b pb-3'>
                <h3 className='text-[28px] ml-2'>Meal Type</h3>
            </div>
            <div className='text-white mt-5 text-center'>
                {type.map((item) => (
                    <Link key={i++} to={'/type/' + item}>
                        <p className='py-2 hover:bg-teal-600'>{item.toUpperCase()}</p>
                    </Link>
                ))}
            </div>
        </div>

        <div className='mx-5 mt-10 mb-5'>
            <div className='flex flex-row items-center justify-center h-10 text-white border-b pb-3'>
                <h3 className='text-[28px] ml-2'>Cuisine</h3>
            </div>
            <div className='text-white mt-5 text-center'>
                {cuisine.map((item) => (
                    <Link key={i++} to={'/cuisine/' + item}>
                        <p className='py-2 hover:bg-teal-600'>{item.toUpperCase()}</p>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Sidebar