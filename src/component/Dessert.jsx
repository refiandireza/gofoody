import { useState, useEffect } from 'react'
import Card from './Card'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import SkeletonCard from './Skeleton';



function Dessert() {
    const [dessert, setDessert] = useState([]);
    const [loading, setLoading] = useState(false);
    const getDessert = async () => {
        setLoading(true);
        const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_KEY_API}&number=10&tags=dessert`);
        const data = await response.json();
        setDessert(data.recipes);
        setLoading(false);
        
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
        getDessert();
    }, []);
    
    return(
        <article className='pb-6'>
            <h2 className='text-center text-3xl mb-5 text-teal-600'>Popular Dessert</h2>
            <div className='card-container mx-5 lg:mx-8 xl:mx-24'>
                <Splide 
                    options={{ 
                    perPage: 4,
                    gap: '1rem',
                    arrows: false,
                    pagination: false,
                    lazyLoad: 'sequential',
                    autoplay: true,
                    perMove: 2,
                    interval: 3000,
                    breakpoints: {
                        768: {
                            perPage: 3,
                        },
                        640: {
                            perPage: 2,
                        }
                    }
                }}>
                    {
                        loading ? 
                        (<SkeletonCard/>) : 
                            dessert.map((item) => (
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

export default Dessert;