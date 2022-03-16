import { useState, useEffect } from 'react'
import Card from './Card'
import { Splide, SplideSlide } from '@splidejs/react-splide'




function Popular() {
    const [recipe, setRecipe] = useState([]);
    const getRecipe = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_KEY_API_2}&number=10`);
        const data = await response.json();
        setRecipe(data.recipes);
        
        // const getLocalStorage = localStorage.getItem('recipe');

        // if(getLocalStorage) {
        //     setRecipe(JSON.parse(getLocalStorage));
        // } else {
        //     const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_KEY_API_2}&number=10`);
        //     const data = await response.json();
            
        //     localStorage.setItem('recipe', JSON.stringify(data.recipes));
        //     setRecipe(data.recipes);

        // }
        
    }

    useEffect(() => {
        getRecipe();
    }, []);
    
    return(
        <article className='py-6'>
            <h2 className='text-center text-3xl mb-5 text-teal-600'>Popular Recipe</h2>
            <div className='card-container mx-5 lg:mx-8 xl:mx-24'>
                <Splide 
                    options={{ 
                    perPage: 6,
                    gap: '1rem',
                    arrows: false,
                    pagination: false,
                    lazyLoad: 'sequential',
                    autoplay: true,
                    perMove: 2,
                    interval: 3000,
                    breakpoints: {
                        1536: {
                            perPage: 5,
                        },
                        1024: {
                            perPage: 4,
                        },
                        768: {
                            perPage: 3,
                        },
                        640: {
                            perPage: 2,
                        }
                    }
                }}>
                    {
                        recipe.map((item) => (
                            <SplideSlide key={item.id}>
                                <Card data={item}/>
                            </SplideSlide>
                        ))
                    }
                </Splide>
            </div>
            
        </article>
    )
}

export default Popular;