import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Recipes } from "./Recipes";

// It will show bookmarked recipes
export const BookmarkedRecipesContainer = () => {
  const [bookmarkedRecipes, setBookmarkedRecipes] = useState([]);

  useEffect(() => {
    // Function to handle updates to localStorage
    const handleStorageChange = () => {
      const storedBookmarkedRecipes = JSON.parse(
        localStorage.getItem("bookmarkedRecipes") || "[]"
      );
      setBookmarkedRecipes(storedBookmarkedRecipes);
    };

    handleStorageChange();
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [bookmarkedRecipes]);

  return (
    <Container maxWidth="md">
      {bookmarkedRecipes.length > 0 ? (
        <Recipes recipes={bookmarkedRecipes} />
      ) : (
        <Typography variant="h5" sx={{ textAlign: "center", padding: "2rem" }}>
          No Bookmarked Recipes...
        </Typography>
      )}
    </Container>
  );
};
