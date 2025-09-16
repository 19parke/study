import React from "react"

export default function Main(){
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const [ingredient, setIngredient] = React.useState(ingredients);


    const ingredientListItems = ingredient.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(formData){
        // event.preventDefault(); // 매번 전체 새로고침 하는 것 방지
        // const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")

        setIngredient(prevIngredients => [...prevIngredients, newIngredient])
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
            <ul>
                {ingredientListItems}
            </ul>
        </main>
    )
}