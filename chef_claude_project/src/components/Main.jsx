import React from "react"
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromChefClaude } from "../ai"


export default function Main(){
    const ingredients = []

    const [ingredient, setIngredient] = React.useState(ingredients);

    const [recipe, setRecipe] = React.useState("");


    function handleSubmit(formData){
        // event.preventDefault(); // 매번 전체 새로고침 하는 것 방지
        // const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")

        setIngredient(prevIngredients => [...prevIngredients, newIngredient])
    }

    async function getRecipe(){
        const result = await getRecipeFromChefClaude(ingredient);
        setRecipe(result);
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
           {ingredient.length > 0 && <IngredientsList ingredient={ingredient} getRecipe={getRecipe}/>}
           {recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}