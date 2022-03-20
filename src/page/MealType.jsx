import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Category from '../component/Category';
import { Link } from 'react-router-dom';
import Spinner from '../component/Spinner';
import Empty from '../component/Empty';
import SkeletonCard from '../component/Skeleton';

function MealType() {
    const [type, setType] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let params = useParams();
    // const key = d6022a7f6f004505842de86ca4eccf15;
    const getType = async (name) => {
        setIsLoading(true);
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_KEY_API_2}&type=${name}&number=20`);

        const data = await response.json();
        setType(data.results);
        setIsLoading(false);
        console.log(data.results);
    }

    const renderTypeList = (
        <div className='card-container mx-5 grid grid-cols-1 sm:grid-cols-8 md:grid-cols-12 md:gap-4 lg:mx-10'>
            {
                type.length > 0 ?
                type.map((item) => (
                <Link className="w-full max-w-[280px] 2xl:max-w-[320px] mx-auto mb-5 rounded-md overflow-hidden shadow-lg sm:col-span-4 md:col-span-4 2xl:col-span-3" key={item.id} to={`/recipe/${item.id}`}>
                    <div>
                        <figure className='w-full h-[160px]'>
                            <img className='object-cover h-full w-full' loading='lazy' src={item.image}/>
                        </figure>
                        <p className='my-3 text-center'>{item.title}</p>
                    </div>

                </Link>
            )) : (<Empty/>)
            }
        </div>
    )

    useEffect(() => {
        getType(params.type);
    }, [params.type]);
    
    return(
        <>
            <Category/>
            <article className='py-6'>
                <h3 className='text-center text-3xl mb-5 text-teal-600'>Food & Drink Results</h3>
                <div className='flex flex-row justify-center items-center flex-wrap'>
                    {
                    isLoading ? (<SkeletonCard/>) : renderTypeList
                }
                </div>
                
                
            </article>
        </>
    )
}

export default MealType