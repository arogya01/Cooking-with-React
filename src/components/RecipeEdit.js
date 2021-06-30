import React, { useState, useEffect } from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";

export default function RecipeEdit({recipe}) {

  return (
    <div className={"recipe-edit"}>
      <div className={"recipe-edit__remove-button-container btn"}>
        <button className={"recipe-edit__remove-button btn"}>&times;</button>
      </div>

      <form className={"recipe-edit__details-grid"}>
        <label className={"recipe-edit__label"} htmlFor={"name"}>
          Name:
        <input type="text" value={recipe.name} id="name" className={"recipe-edit__input"}></input>
        </label>
        

      <label className={"recipe-edit__label"} >
        cooktime:
        <input type="text" value={recipe.cookTime} className={'recipe-edit__input'} />
      </label>

          
      <label className={"recipe-edit__label"} htmlFor={"servings"}>
        servings:
      <input
       value={recipe.servings}
        type="numbers"
        id="servings"
        className={"recipe-edit__input"}
      ></input>
      </label>

      <label className={"recipe-edit__label"} htmlFor={"instuctions"}>
        instructions:
      <textarea
        value={recipe.instructions}
        type="text"
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
         return  <RecipeIngredientEdit ingredient={ingredient} key={ingredient.id} />
          })
        }       
        <div className={"recipe-edit__add-ingredient-btn-container"}>
          <button className={"btn btn--primary center"}>
            Add Ingredient
          </button>
        </div>
      </div>

      </label>


    


         
      </form>
    </div>
  );
}
