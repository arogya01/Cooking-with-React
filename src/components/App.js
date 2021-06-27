import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import RecipeEdit from './RecipeEdit';
import '../css/app.css';
import { uuid } from 'uuidv4';

const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';

export const RecipeContext = React.createContext();

function App() {
  const [recipes, setRecipes] = useState(recipeSamples);


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
    handleRecipeDelete
  }

  function handleRecipesAdd() {
    const newRecipe = {

      id: uuid(),
      name: "New",
      CookTime: "1:45",
      Servings: "1",
      Instructions: "Instruc.",
      ingredients: [{
        id: 1, name: 'Name', amount: "1 tbs"
      }]
    }

    setRecipes([...recipes, newRecipe])
  }

  //takes in the 'id' of the recipe to delete
  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  }


  return (
    <div className={"parent-container"}>
      <RecipeContext.Provider value={recipeContextValue} >


        <div className={"recipe-container"}>
          <RecipeList recipes={recipes} />
        </div>


        <div className={"recipeedit-container"}>
          <RecipeEdit />
        </div>
      </RecipeContext.Provider>
    </div>
  )
}




const recipeSamples = [
  {

    id: 1,
    name: "Plain Chicken",
    CookTime: "1:45",
    Servings: 3,
    Instructions: "1.Put Salt On Chicken \n2.Put Chicken in Oven \n3.Eat Chicken",
    ingredients: [
      {
        id: 1,
        name: 'chicken',
        amount: '2 Pounds',
      },
      {
        id: 2,
        name: 'salt',
        amount: '1 tbs',
      }
    ]
  },
  {

    id: 2,
    name: "Pork Chicken",
    CookTime: "1:45",
    Servings: 3,
    Instructions: "1.Put paparika on pork \n2.Put Pork in Oven \n3.Eat Pork",
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '2 Pounds',
      },
      {
        id: 2,
        name: 'poprika',
        amount: '2 Pounds',
      }
    ]
  }

]

export default App;
