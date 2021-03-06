import { Spin } from 'hamburger-react'
import React from 'react'
import { useState, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import Empty from '../component/Empty'
import Spinner from '../component/Spinner'

function SearchPage() {
  let params = useParams();
  const [search, setSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSearchRecipe = async (name) => {
    setIsLoading(true);
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_KEY_API_2}&query=${name}&number=20`);

    const data = await response.json();

    setSearch(data.results);
    setIsLoading(false);
    
    // const local = localStorage.getItem('search');
    // if(local) {
    //     setSearch(JSON.parse(local));
    // } else {
    //     const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_KEY_API_2}&query=${name}&number=20`);

    //     const data = await response.json();

    //     localStorage.setItem('search', JSON.stringify(data.results));
    //     setSearch(data.results);  
    // }
  }

  const renderSearchItem = (
    <div className='card-container mx-5 grid grid-cols-1 sm:grid-cols-8 md:grid-cols-12 md:gap-4 lg:mx-24 xl:mx-32'>
        {
            search.length > 0 ?
            search.map((item) => (
            <Link className='sm:col-span-4 md:col-span-4 2xl:col-span-3' key={item.id} to={`/recipe/${item.id}`}>
              <div  className="w-full max-w-[280px] mx-auto mb-5 rounded-md overflow-hidden shadow-lg ">
                  <figure className='w-full h-[160px]'>
                      <img className='object-cover h-full w-full' src={item.image} alt={item.title}/>
                  </figure>
                  <p className='my-3 text-center'>{item.title}</p>
              </div>

            </Link>
        )) : (<Empty/>)
        }
    </div>
  );

  useEffect(() => {
        getSearchRecipe(params.search);
    }, [params.search]);
  
    return (
    <article className='py-6'>
            <h3 className='text-center text-3xl mb-5 md:text-4xl text-teal-600'>Result for {params.search} : </h3>
            {
                isLoading ? <Spinner/>
                 : renderSearchItem
            }
            
        </article>
  )
}

export default SearchPage;