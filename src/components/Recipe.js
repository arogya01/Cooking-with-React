import React from 'react';
import IngredientList from './IngredientList';


export default function recipe(props) {

    /*
    alternatively,can destructure the props like so 
    const{ 
        name, 
        cookTime,
        servings,
        instructions
    } = props
    */

   const {ingredients} = props;
    return (
        <div className={"recipe"}>
            <div className={"recipe__header"}>
                <h3 className={"recipe__title"}>{props.name}</h3>
                <div>
                    <button className={"btn btn--primary mr-1"}>Edit</button>
                    <button className={"btn btn--danger"}>Delete</button>
                </div>
            </div>
            <div   className={"recipe__row"}>
                <span className={"recipe__label"}>Cook Time:</span>
                <span className={"recipe__value"}>{props.CookTime}</span>
            </div>
            <div   className={"recipe_rows"}>
                <span className={"recipe__label"}>Servings:</span>
                <span className={"recipe__value"}>{props.Servings}</span>
            </div>
            <div  className={"recipe__row"}>
                <span className={"recipe__label"}>Instructions</span>
                <div className={"recipe__value recipe__value--indented recipe__value--instructions"}>
                    {props.Instructions}
                </div>
            </div>
            <div className={"recipe__row"}>
                <span className={"recipe__label"}>Ingredients</span>
                <div className={"recipe__value recipe__value--indented"}>
                <IngredientList ingredientList= {ingredients}></IngredientList>
                </div>
            </div>

        </div>
    )
}
