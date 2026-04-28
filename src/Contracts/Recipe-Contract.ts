

export interface RecipeContract {
    recipes: [
        {
            id: number,
            name: string,
            ingredients: string[],
            instructions: string[]
        }
    ]
}