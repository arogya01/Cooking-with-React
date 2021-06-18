import React from 'react'
import Recipe from './Recipe';
// import '../css/recipe-list.css';

export default function recipeList({ recipes }) {


    return (
        <div className={"recipe-list"}>
        <div>
            {recipes.map(recipe => {
                return (
                    
                    <Recipe key={recipe.id} 
                    {...recipe}></Recipe>
                    
                )
            })
            }
        </div>
        <div className={"recipe-list__add-recipe-btn-container"}>
       <button className={"btn btn--primary"}>Add Recipe</button>
      </div>
    </div>
    )
}
