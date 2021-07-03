import React, { useContext } from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { RecipeContext } from "./App";
import { uuid } from "uuidv4";


export default function RecipeEdit({recipe}) {

  const {handleRecipeChange,handleEditClick} = useContext(RecipeContext);

  function handleChange(changes){
    handleRecipeChange(recipe.id,{...recipe,...changes});
  }

  function handleIngredientChange(id,ingredient){
    const newIngredients = [...recipe.ingredients]; //copying all the values so as to can mutate them
    const index = newIngredients.findIndex((i) => i.id === id);
    newIngredients[index] = ingredient;
    handleChange({ingredients: newIngredients});
  }

  function handleIngredientAdd(){
    const newIngredient={
      id: uuid(),
      name: "",
      amount: "",
    }
    handleChange({ingredients:[...recipe.ingredients,newIngredient]});
  }

  function handleIngredientDelete(id){
    handleChange({
      ingredients: recipe.ingredients.filter(ingredient => id !== ingredient.id)
    })
     
  }

  return (
    <div className={"recipe-edit"}>
      <div className={"recipe-edit__remove-button-container btn"}>
        <button   onClick={()=>{handleEditClick(undefined)}}
         className={"recipe-edit__remove-button btn"}
        >
          &times;
        </button>
      </div>

      <form className={"recipe-edit__details-grid"}>
        <label className={"recipe-edit__label"} htmlFor={"name"}>
          Name:
        <input type="text"   
        value={recipe.name}
        onInput={e => handleChange({name:e.target.value})}  
        className={"recipe-edit__input"}></input>
        </label>
        

      <label className={"recipe-edit__label"} >
        cooktime:
        <input type="text" value={recipe.cookTime}
            onInput={e => handleChange({cookTime:e.target.value})}
        className={'recipe-edit__input'} />
      </label>

          
      <label className={"recipe-edit__label"} htmlFor={"servings"}>
        servings:
      <input
       value={recipe.servings}
        type="numbers"
        onInput={e => handleChange({servings:parseInt(e.target.value) || ''})}
        id="servings"
        className={"recipe-edit__input"}
      ></input>
      </label>

      <label className={"recipe-edit__label instruct"} htmlFor={"instuctions"}>
        instructions:
      <textarea
        value={recipe.instructions}
        type="text"
        onChange={e => handleChange({instructions:e.target.value})}
        id="instructions"
        className={"recipe-edit__input"}
      ></textarea>
      </label>

      <label className={"recipe-edit__label"} htmlFor={"ingredients"}>
        ingredients:
      <div className={"recipe-edit__ingredient-grid"} id={"ingredients"}>
        <div>Name</div>
        <div>Amount</div>
        <div></div>  
        {
          recipe.ingredients.map(ingredient=>{
         return  <RecipeIngredientEdit
          ingredient={ingredient}
          handleIngredientChange={handleIngredientChange} 
          handleIngredientDelete={handleIngredientDelete}
          key={ingredient.id} />

          })
        }

        <div className={"recipe-edit__add-ingredient-btn-container"}>
           <button
            className="btn btn--primary"
            onClick={() => handleIngredientAdd()}
           >
            Add ingredient
           </button>
          </div>       

      </div>

      </label>
      </form>
    </div>
  );
}
