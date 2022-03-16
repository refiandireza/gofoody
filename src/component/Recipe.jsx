import {useState} from 'react'
import { BsClockFill } from "react-icons/bs";
import { FaConciergeBell, FaDollarSign } from "react-icons/fa";
import { BiCheckDouble} from "react-icons/bi";


function Recipe({data}) {
    const [activeTab, setActiveTab] = useState('instructions');

    return (
        <div className='overflow-hidden rounded-lg shadow-xl bg-slate-50 flex flex-col justify-center 2xl:px-10 xl:grid xl:grid-cols-9 xl:grid-rows-3 2xl:grid-rows-2 2xl:h-auto'>
            <figure className='lg:h-[380x] lg:mx-auto xl:mx-0 overflow-hidden rounded-lg xl:col-span-4 xl:row-span-1 2xl:h-[450px]'>
                <img className='lg:w-full lg:h-full' loading='lazy' src={data.image ? data.image : '/src/img/NoImageFound.png'}/>
            </figure>
            <div className='mt-2 lg:mt-5 text-justify lg:text-center px-4 pb-5 xl:col-start-5 xl:col-span-5 xl:row-span-3 2xl:row-span-2'>
                <h3 className='text-3xl text-semibold text-left lg:text-center mb-2 text-teal-600'>{data.title}</h3>
                <div className='lg:flex flex-col justify-center items-center'>
                    <div className='flex flex-row items-center h-5 mb-2'>
                        <span className='mr-2'><BsClockFill size='1rem'/></span>
                        <p className='text-lg'>{data.readyInMinutes} minutes</p>
                    </div>
                    <div className='flex flex-row items-center h-5 mb-2'>
                        <span className='mr-2'><FaConciergeBell size='1rem'/></span>
                        <p className='text-lg'>{data.servings} Portion</p>
                    </div>
                    <div className='flex flex-row items-center h-5 mb-5'>
                        <span className='mr-2'><FaDollarSign size='1rem'/></span>
                        <p className='text-lg'>{data.pricePerServing} minutes</p>
                    </div>
                    
                </div>
                <div className='mb-4 flex justify-start lg:justify-center'>
                    <button className={`border border-teal-600 p-2 rounded-md text-teal-600 mr-5 ${activeTab === 'instructions' ? 'active' : ''} active:text-slate-50`}
                    onClick={() => setActiveTab('instructions')}
                    >
                        Instructions
                    </button>
                    <button className={`border border-teal-600 p-2 rounded-md text-teal-600  ${activeTab === 'ingredients' ? 'active' : ''}`}
                    onClick={() => setActiveTab('ingredients')}
                    >
                        Ingredients
                    </button>
                </div>

                <div className='px-5'>
                    {activeTab === 'instructions' && (
                    <>
                        <h4 className='text-3xl text-teal-600 mb-2'>Summary</h4>
                        {
                            data.summary === '' ? (
                                <p className='mt-5 '>Summary Not Available</p>
                            ) : (
                                <p className='xl:text-justify' dangerouslySetInnerHTML={{ __html: data.summary }}></p>
                            )
                        }

                        <h4 className='mt-5 text-3xl text-teal-600 mb-2 '>Instructions</h4>
                        {
                            data.instructions === '' ? (
                                <p className='mt-5'>Instruction Not Available</p>
                            ) : (
                                <p className='xl:text-justify' dangerouslySetInnerHTML={{ __html: data.instructions }}></p>
                            )
                        }
                    </>
                )}

                {activeTab === 'ingredients' && (
                    <>
                        <h4 className='mt-5 text-3xl text-teal-600 mb-2'>Ingredients</h4>
                        <ul className='xl:text-left xl:ml-5'>
                            {data.extendedIngredients.map((item) => (
                                <li className='xl:py-2 flex flex-row'><BiCheckDouble size='1.4em'/> <p className='xl:pl-5'>{item.original}</p></li>
                            ))}
                        </ul>
                    </>

                )}
                </div>

                

            </div>
        </div>
  )
}

export default Recipe