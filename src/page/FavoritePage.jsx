import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../component/Spinner'
import Recipe from '../component/Recipe';
import UnLiked from '../component/Like Button/UnLiked'
import Liked from '../component/Like Button/Liked';
import Localbase from 'localbase'
import Empty from '../component/Empty';
import { Link } from 'react-router-dom';

function FavoritePage() {
  let params = useParams();
  let db = new Localbase('db');
  const [favorite, setFavorite] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getFavoriteRecipe = async () => {
    setIsLoading(true);
    db.collection('recipe').get().then(data => {
      setFavorite(data);
    })
    setIsLoading(false);
  }

  const renderFavoriteItem = (
    <div className='card-container mx-5 grid grid-cols-1 sm:grid-cols-8 md:grid-cols-12 md:gap-4 lg:mx-24 xl:mx-32'>
        {
            favorite.length > 0 ?
            favorite.map((item) => (
            <Link className='sm:col-span-4 md:col-span-4 2xl:col-span-3' key={item.id} to={`/recipe/${item.id}`}>
              <div  className="group w-full max-w-[280px] mx-auto mb-5 rounded-md overflow-hidden shadow-lg ">
                  <figure className='w-full h-[160px] relative overflow-hidden'>
                      <img className='group-hover:scale-110 transition ease-in-out delay-100 duration-300 object-cover h-full w-full' src={item.image} alt={item.title}/>
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-500/[.2] to-teal-500/[.2] group-hover:bg-none"/>
                  </figure>
                  <p className='my-3 text-center'>{item.title}</p>
              </div>

            </Link>
        )) : (<Empty/>)
        }
    </div>
  );

  useEffect(() => {
        getFavoriteRecipe(params.name);
    }, [params.name]);
  return (
    <article className='py-6'>
            <h3 className='text-center text-3xl mb-5 md:text-4xl text-teal-600'>Favorite Recipe</h3>
            <div className='flex flex-row justify-center items-center flex-wrap'>
              {
                isLoading ? <SkeletonCard/>
                 : renderFavoriteItem
            }
            </div>
            
            
    </article>
  )
}

export default FavoritePage