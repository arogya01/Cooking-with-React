import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import RecipeEdit from './RecipeEdit';
import '../css/app.css';
import { uuid } from 'uuidv4';

const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';

export const RecipeContext = React.createContext();

function App() {


  const [selectedRecipeId,setSelectedRecipeId]=useState();//don't want any defualt value.
  const [recipes, setRecipes] = useState(recipeSamples);
  let selectedRecipe=recipes.find(recipe=>recipe.id===selectedRecipeId);
  console.log(selectedRecipe); 


  useEffect(
    () => {
      const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
    },
    [] //only ever run it once when the component are being rendered for the first time
  )
  useEffect(
    () => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
    }, [recipes]
  )


  const recipeContextValue = {
    handleRecipesAdd,
    handleRecipeDelete,
    handleEditClick
  }

  function handleRecipesAdd() {
    const newRecipe = {

      id: uuid(),
      name: "New",
      cookTime: "1:45",
      servings: "1",
      instructions: "Instruc.",
      ingredients: [{
        id: uuid(), name: 'Name', amount: "1 tbs"
      }]
    }

    setRecipes([...recipes, newRecipe])
  }

  //takes in the 'id' of the recipe to delete
  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  }
  
  function handleEditClick(id){
    setSelectedRecipeId(id);
   
  }

  

  return (
    <div className={"parent-container"}>
      <RecipeContext.Provider value={recipeContextValue} >
        <div className={"recipe-container"}>
          <RecipeList recipes={recipes} />
        </div>


        <div className={"recipeedit-container"}>
        {selectedRecipe && <RecipeEdit recipe={selectedRecipe} /> }  
        </div>
      </RecipeContext.Provider>
    </div>
  )
}




const recipeSamples = [
  {

    id: 1,
    name: "Plain Chicken",
    cookTime: "1:45",
    servings: 3,
    instructions: "1.Put Salt On Chicken \n2.Put Chicken in Oven \n3.Eat Chicken",
    ingredients: [
      {
        id: uuid(),
        name: 'chicken',
        amount: '2 Pounds',
      },
      {
        id: uuid(),
        name: 'salt',
        amount: '1 tbs',
      }
    ]
  },
  {

    id: 2,
    name: "Pork Chicken",
    cookTime: "1:45",
    servings: 3,
    instructions: "1.Put paparika on pork \n2.Put Pork in Oven \n3.Eat Pork",
    ingredients: [
      {
        id:  uuid(),
        name: 'Pork',
        amount: '2 Pounds',
      },
      {
        id:  uuid(),
        name: 'poprika',
        amount: '2 Pounds',
      }
    ]
  }

]

export default App;
