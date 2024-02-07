import { Grid } from "@mui/material";
import { RecipeCard } from "components/RecipeCard/RecipeCard";
import { RecipeDialog } from "components/RecipeDialog/RecipeDialog";
import { RecipeData } from "components/utils/utils";
import { useState } from "react";

interface RecipesProps {
  recipes: RecipeData[];
}

// It will show recipes and control RecipeDialog
export const Recipes = ({ recipes }: RecipesProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeData | null>(null);

  // Function to open the modal and set the selected recipe
  const handleRecipeClick = (recipe: RecipeData) => {
    setSelectedRecipe(recipe);
    setOpenModal(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedRecipe(null);
  };

  return (
    <>
      <Grid container spacing={4} justifyContent="center">
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} handleRecipeClick={handleRecipeClick} />
        ))}
      </Grid>
      {selectedRecipe && openModal && (
        <RecipeDialog
          open={openModal}
          handleClose={handleCloseModal}
          recipe={selectedRecipe}
        />
      )}
    </>
  );
};
