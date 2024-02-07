import { Box, CircularProgress, Container, Typography } from "@mui/material";
import axios from "axios";
import { SearchForm } from "components/SearchForm/SearchForm";
import { mapResponseToRecipes, RecipeData } from "components/utils/utils";
import { useEffect, useState } from "react";
import { Recipes } from "./Recipes";

// Resposible for searching recipes
export const SearchContainer = () => {
  const [searchResults, setSearchResults] = useState<RecipeData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Function to fetch data
  const handleSearch = async (query: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.edamam.com/api/recipes/v2",
        {
          params: {
            type: "public",
            q: query,
            app_id: process.env.REACT_APP_API_ID,
            app_key: process.env.REACT_APP_API_KEY,
          },
        }
      );

      const recipes = mapResponseToRecipes(response.data);
      setSearchResults(recipes);

      // Save searched recipes to local storage
      localStorage.setItem("lastSearchedRecipes", JSON.stringify(recipes));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Load last searched recipes from local storage on component mount
    const lastSearchedRecipes = JSON.parse(
      localStorage.getItem("lastSearchedRecipes") || "[]"
    );
    setSearchResults(lastSearchedRecipes);
  }, []);

  return (
    <Container maxWidth="md">
      <SearchForm handleSearch={handleSearch} />
      {loading && (
        <Box textAlign="center" mt={3}>
          <CircularProgress />
        </Box>
      )}
      {searchResults.length > 0 ? (
        <Recipes recipes={searchResults} />
      ) : (
        <>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", padding: "2rem" }}
          >
            No Searched Recipes ...
          </Typography>
        </>
      )}
    </Container>
  );
};
