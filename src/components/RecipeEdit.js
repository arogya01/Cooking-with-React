import React, { useState, useEffect } from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";

export default function RecipeEdit() {
    return (
        <div className={"recipe-edit"}>
            <div className={"recipe-edit__remove-button-container btn"}>
                <button className={"recipe-edit__remove-button btn"} >&times;</button>
            </div>


            <form className={"recipe-edit__details-grid"}>
                <label className={"recipe-edit__label"} htmlFor={"name"}>
                    Name:
                </label>
                    <input type='text' id="name" className={"recipe-edit__input"}></input>


                <label className={"recipe-edit__label"} htmlFor={"cookTime"}>
                    cookTime:
                </label>
                    <input type='text' id="cookTime" className={"recipe-edit__input"}></input>


                <label className={"recipe-edit__label"} htmlFor={"servings"}>
                    servings:
                </label>
                <input type='numbers' id="servings" className={"recipe-edit__input"} ></input>


                <label className={"recipe-edit__label"} htmlFor={"instuctions"}>
                    instructions:
                </label>
            <textarea type='text' id="instructions" className={"recipe-edit__input"}>

            </textarea>
               
                <label className={"recipe-edit__label"} htmlFor={"ingredients"}>
                    ingredients:
                </label>
                    <div className={"recipe-edit__ingredient-grid"} id={"ingredients"}>
                        <div>Name</div>
                        <div>Amount</div>
                        <div></div>
                        {/*Ingredient Component*/}
                         
                         <RecipeIngredientEdit />
                         <RecipeIngredientEdit />
                       <div className={"recipe-edit__add-ingredient-btn-container"}>
                         <button className={"btn btn--primary center"}>Add Ingredient</button>
                    </div>
                        </div>
            </form>
        </div>
    )
}