import React from "react"
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main(){
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const [ingredient, setIngredient] = React.useState(ingredients);

    const [recipeShown, setRecipeShow] = React.useState(false)


    function handleSubmit(formData){
        // event.preventDefault(); // 매번 전체 새로고침 하는 것 방지
        // const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")

        setIngredient(prevIngredients => [...prevIngredients, newIngredient])
    }

    function toggleRecipeShown(){
        setRecipeShow(!recipeShown)
    }

    return (
        <main>
            <form action={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
           {ingredient.length > 0 && <IngredientsList ingredient={ingredient} toggleRecipeShown={toggleRecipeShown}/>}
            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}