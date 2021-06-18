import React from 'react';
import Ingredient from './Ingredient';

export default function IngredientList({ingredientList}) {
  
    const ingredientsElements = ingredientList.map(ingredient=>{
        return <Ingredient  id={ingredient.id} {...ingredient}></Ingredient>
    })
  
    return (
        <div className={"ingredient--grid"}>
            {ingredientsElements} 
        </div>
    )
}
