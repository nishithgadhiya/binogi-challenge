import { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { RecipeData } from "components/utils/utils";
import { Close as CloseIcon } from "@mui/icons-material";
import { RecipeInfo } from "./RecipeInfo";

interface RecipeModalProps {
  open: boolean;
  handleClose: () => void;
  recipe: RecipeData; // Assuming RecipeData is your recipe data type
}

export const RecipeDialog = ({
  open,
  handleClose,
  recipe,
}: RecipeModalProps) => {
  const [bookmarkedRecipes, setBookmarkedRecipes] = useState<RecipeData[]>([]);

  useEffect(() => {
    // Retrieve bookmarked recipes from local storage on component mount
    const storedBookmarkedRecipes = localStorage.getItem("bookmarkedRecipes");
    if (storedBookmarkedRecipes) {
      setBookmarkedRecipes(JSON.parse(storedBookmarkedRecipes));
    }
  }, []);

  const toggleBookmark = () => {
    // Copy the current state of bookmarkedRecipes
    const newBookmarkedRecipes = [...bookmarkedRecipes];

    // Find the index of the recipe in the array
    const index = newBookmarkedRecipes.findIndex(
      (r) => r.label === recipe.label
    );

    if (index !== -1) {
      // If the recipe is found, remove it from the array
      newBookmarkedRecipes.splice(index, 1);
    } else {
      // If the recipe is not found, add it to the array
      newBookmarkedRecipes.push(recipe);
    }

    // Update the state with the new bookmarks
    setBookmarkedRecipes(newBookmarkedRecipes);

    // Store the new bookmarks in local storage
    localStorage.setItem(
      "bookmarkedRecipes",
      JSON.stringify(newBookmarkedRecipes)
    );
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle
        variant="h5"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: "bold",
        }}
      >
        {recipe.label}
        <div>
          <IconButton onClick={toggleBookmark}>
            {bookmarkedRecipes.some((r) => r.label === recipe.label) ? (
              <BookmarkIcon sx={{ fontSize: "2rem" }} />
            ) : (
              <BookmarkBorderIcon sx={{ fontSize: "2rem" }} />
            )}
          </IconButton>

          <IconButton onClick={handleClose} color="primary">
            <CloseIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>
        <RecipeInfo recipe={recipe} />
      </DialogContent>
    </Dialog>
  );
};
