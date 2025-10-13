import React from "react"
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromChefClaude } from "../ai"


export default function Main(){
    const ingredients = []

    const [ingredient, setIngredient] = React.useState(ingredients);

    const [recipe, setRecipe] = React.useState("");

    const recipeSection = React.useRef(null);


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

    React.useEffect(() => {
        if((recipe !== "") && (recipeSection.current !== null)){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
            // iframe
            // const yCoord = recipeSection.current.getBoundingClientRect().top + window.scrollY
            // window.scroll({
            //     top: yCoord,
            //     behavior: "smooth"
            // })
        }
    }, [recipe])

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
           {ingredient.length > 0 && <IngredientsList ref={recipeSection} ingredient={ingredient} getRecipe={getRecipe}/>}
           {recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}