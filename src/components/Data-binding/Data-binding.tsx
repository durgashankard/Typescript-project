import { useEffect, useState } from "react"
import { type RecipeContract } from "../../Contracts/Recipe-Contract"
import axios from "axios";


export function DataBinding() {

    const categories = ["All", "Electronics", "Fashion", "Footwear", "Man's Fashion"];

    const [menuItems, SetMenuItems] = useState<string[]>(categories);

    const [recipes, SetRecipes] = useState<RecipeContract>();

    useEffect(() => {
        axios.get("https://dummyjson.com/recipes")
            .then(Response =>
                SetRecipes(Response.data)
            )
    }, []);

    return (
        <div className="container-fluid">
            <h3>Data Binding</h3>

            <select name="" id="">
                {
                    menuItems.map(menuItem =>
                        <option value="" key={menuItem}>{menuItem}</option>
                    )
                }
            </select>

            <br /><br />

            <ol>
                {
                    recipes?.recipes.map(item =>
                        <li key={item.id}>{item.name}</li>
                    )
                }
            </ol>

        </div>
    )
}