import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../component/Spinner'
import Recipe from '../component/Recipe';
import UnLiked from '../component/Like Button/UnLiked'
import Liked from '../component/Like Button/Liked';
import Localbase from 'localbase'
import Modal from '../component/Modal';
import { CSSTransition } from 'react-transition-group';


function RecipePage() {
  let params = useParams();
  let db = new Localbase('db');
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLiked, setLiked] = useState(false);
  const [modal, isOpen] = useState(false);

  const showModal = () => {
    isOpen(true);
    document.body.style.overflow = 'hidden';
  }
  
  const closeModal = () => {
    isOpen(false);
    document.body.style.overflow = 'unset';
  }

  const getDetails = async () => {
    setIsLoading(true);
    const response = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${import.meta.env.VITE_KEY_API_2}`);
    const data = await response.json();

    setDetails(data);

    db.collection('recipe').doc({ id: parseInt(params.name) }).get().then(data => {
      if(data === undefined) {
        return false
      } else {
        setLiked(data.liked);

      }
    });

    setIsLoading(false);

  }

  const addRecipeToDb = () => {
    setLiked(true);
    db.collection('recipe').add({
      id: details.id,
      title: details.title,
      image: details.image,
      summary: details.summary,
      instructions: details.instructions,
      extendedIngredients: details.extendedIngredients,
      original: details.extendedIngredients.map((item) => {
        return item.original;
      }),
      servings: details.servings,
      pricePerServing: details.pricePerServing,
      readyInMinutes: details.readyInMinutes,
      liked: !isLiked

    })
    showModal();
    
  }
  
  const deleteRecipeFromDb = () => {
    db.collection('recipe').doc({ id: details.id }).delete();
    setLiked(false);
    showModal();
  }

  useEffect(() => {
    getDetails()
  }, [params.name])

  return (
    <>
      {
        isLoading ? <Spinner/> : (
          <>
            <div key={details.id} className='bg-slate-50 py-8 px-5 lg:px-0'>
              <Recipe  data={details}/>
            </div>
            <button className={`fixed right-[30px] bottom-[30px] rounded-full bg-slate-50 border-2 border-teal-500  p-3 z-10 w-[50px] h-[50px] flex justify-center items-center overflow-hidden transition-all ${isLiked ? 'liked' : 'unliked'}`}
            onClick={!isLiked ? addRecipeToDb : deleteRecipeFromDb}>
              {isLiked ? <Liked/> : <UnLiked/>}
            </button>
              <CSSTransition
                in={modal}
                timeout={300}
                unmountOnExit
                onEnter={() => isOpen(true)}
              >
                <Modal data={closeModal} favorited={isLiked}/>
              </CSSTransition>
               
          </>
            )
      }
    </>
  )
}

export default RecipePage