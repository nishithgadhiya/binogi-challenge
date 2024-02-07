export interface RecipeData {
  label: string;
  image: string;
  calories: number;
  dietLabels: string[] | null;
  healthLabels: string[] | null;
  ingredients: string[] | null;
  nutrients: string[] | null;
  cautions: string[] | null;
}

interface Ingredient {
  text: string;
  quantity: number;
  measure: string | null;
  food: string;
  weight: number;
  foodCategory: string;
  foodId: string;
  image: string;
}

interface Nutrient {
  label: string;
  quantity: number;
  unit: string;
}

// Function is responsible for transforming the data as needed from api results
export const mapResponseToRecipes = (response: any): RecipeData[] => {
  return response.hits.map((hit: any) => ({
    label: hit.recipe.label,
    image: hit.recipe.image,
    calories: hit.recipe.calories,
    dietLabels:
      hit.recipe.dietLabels.length > 0
        ? hit.recipe.dietLabels.join(", ")
        : null,
    healthLabels:
      hit.recipe.healthLabels.length > 0
        ? hit.recipe.healthLabels.join(", ")
        : null,
    ingredients:
      hit.recipe.ingredients.length > 0
        ? hit.recipe.ingredients.map(
            (ingredient: Ingredient) => ingredient.text
          )
        : null,
    nutrients: mapNutrients(hit.recipe.totalNutrients),
    cautions:
      hit.recipe.cautions.length > 0 ? hit.recipe.cautions.join(", ") : null,
  }));
};

// It will change the format as needed to display in list
const mapNutrients = (nutrients: Record<string, Nutrient>): string[] => {
  return Object.keys(nutrients).map((key) => {
    const nutrient = nutrients[key];
    return `${nutrient.label}: ${nutrient.quantity} ${nutrient.unit}`;
  });
};
