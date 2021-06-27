import React, { useContext, useEffect } from 'react';
import IngredientList from './IngredientList';
import { RecipeContext } from './App';


export default function Recipe(props) {
    const { handleRecipeDelete } = useContext(RecipeContext);


    const {
        name,
        CookTime,
        Servings,
        Instructions,
        ingredients
    } = props


    useEffect(
    ()=>{
       console.log('render');

       return () =>{
           console.log('unmount');
       }
        },
    [])

    return (
        <div className={"recipe"}>
            <div className={"recipe__header"}>
                <h3 className={"recipe__title"}>{name}</h3>
                <div>
                    <button className={"btn btn--primary mr-1"}>Edit</button>
                    <button className={"btn btn--danger"}
                        onClick={() => handleRecipeDelete(props.id)}>
                        Delete</button>
                </div>
            </div>
            <div className={"recipe__row"}>
                <span className={"recipe__label"}>Cook Time:</span>
                <span className={"recipe__value"}>{CookTime}</span>
            </div>
            <div className={"recipe_rows"}>
                <span className={"recipe__label"}>Servings:</span>
                <span className={"recipe__value"}>{Servings}</span>
            </div>
            <div className={"recipe__row"}>
                <span className={"recipe__label"}>Instructions</span>
                <div className={"recipe__value recipe__value--indented recipe__value--instructions"}>
                    {Instructions}
                </div>
            </div>
            <div className={"recipe__row"}>
                <span className={"recipe__label"}>Ingredients</span>
                <div className={"recipe__value recipe__value--indented"}>
                    <IngredientList ingredientList={ingredients}></IngredientList>
                </div>
            </div>

        </div>
    )
}
