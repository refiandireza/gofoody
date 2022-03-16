import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../component/Spinner'
import Recipe from '../component/Recipe';

function RecipePage() {
  let params = useParams();
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getDetails = async () => {
    setIsLoading(true);
    const response = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${import.meta.env.VITE_KEY_API}`);
    const data = await response.json();

    const {title, image, summary, instructions, extendedIngredients, original, servings, pricePerServing, readyInMinutes} = data;

    const newData = {title, image, summary, instructions, extendedIngredients, original, servings, pricePerServing, readyInMinutes};

    localStorage.setItem('favorite', JSON.stringify(newData));

    const favorite = [];

    favorite.push(newData);

    setDetails(data);
    setIsLoading(false);

    // const local = localStorage.getItem('details');
    // if(local) {
    //     setDetails(JSON.parse(local));
    // } else {
    //     const response = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${import.meta.env.VITE_KEY_API}`);

    //     const data = await response.json();

    //     localStorage.setItem('details', JSON.stringify(data));
    //     setDetails(data);  
    //     console.log(data);
    // }

    // const local = localStorage.getItem('favorite');
    // if(local) {
    //     setDetails(JSON.parse(local));
    // } else {
    //     const response = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${import.meta.env.VITE_KEY_API}`);

    //     const data = await response.json();
        
    //     const {title, image, summary, instructions, extendedIngredients, original, servings, pricePerServing, readyInMinutes} = data;
    //     const newData = {title, image, summary, instructions, extendedIngredients, original, servings, pricePerServing, readyInMinutes}

    //     localStorage.setItem('favorite', JSON.stringify(newData));

    //     setDetails(newData);  
    //     console.log(newData);
    // }
  }


  useEffect(() => {
    getDetails()
  }, [params.name])

  return (
    <>
      {
        isLoading ? <Spinner/> : (
          <div key={details.id} className='bg-slate-50 py-8 px-5'>
            <Recipe  data={details}/>
            {/* <h1>{details.title}</h1> */}
            {/* <h1>Hello</h1> */}
          </div>
            )
      }
    </>
  )
}

export default RecipePage