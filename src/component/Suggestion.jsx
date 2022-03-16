import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import CardSuggestion from './CardSuggestion';

function Suggestion() {
  const [suggestion, setSuggestion] = useState([]);
    const getSuggestion = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_KEY_API_2}&number=10`);
        const data = await response.json();
        
        setSuggestion(data.recipes);
        
        // const getLocalStorage = localStorage.getItem('dessert');

        // if(getLocalStorage) {
        //     setDessert(JSON.parse(getLocalStorage));
        // } else {
        //     const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_KEY_API_2}&number=10&tags=dessert`);
        //     const data = await response.json();
            
        //     localStorage.setItem('dessert', JSON.stringify(data.recipes));
        //     setDessert(data.recipes);
        // }
        
    }

    useEffect(() => {
        getSuggestion();
    }, []);
  
    return (
    <article className='pb-6'>
            <h2 className='text-center text-3xl mb-5 text-teal-600'>For You</h2>
            <div className='card-container mx-5 grid grid-cols-1 sm:grid-cols-8 md:grid-cols-12 md:gap-4 lg:mx-8 xl:mx-24'>
                {
                    suggestion.map((item) => (
                    <Link className='flex justify-center items-center mb-5 sm:col-span-4 md:col-span-4 2xl:col-span-3' key={item.id} to={`/recipe/${item.id}`}>
                        <CardSuggestion  data={item}/>

                    </Link>
                    ))
                }
            </div>
            
        </article>
  )
}

export default Suggestion