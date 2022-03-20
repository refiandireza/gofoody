import Localbase from 'localbase'

let db = new Localbase('db');

const addRecipeToDb = () => {
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
      liked: isLiked

    })
    
  }

const deleteRecipeFromDb = (id) => {
    db.collection('recipe').doc({ id: id}).delete();
  }