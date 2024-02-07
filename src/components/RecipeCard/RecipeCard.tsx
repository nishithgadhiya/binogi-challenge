import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { RecipeData } from "components/utils/utils";

interface RecipeCardProps {
  recipe: RecipeData;
  handleRecipeClick: (recipe: RecipeData) => void;
}

// This component is responsible for showing individual recipes in a card form
export const RecipeCard = ({ recipe, handleRecipeClick }: RecipeCardProps) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Card
        sx={{
          margin: "0.5rem",
          backgroundColor: "#c8e6c9",
          borderRadius: "15px",
          boxShadow: "0 6px 10px 0 rgba(0, 0, 0, 0.14)",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
            cursor: "pointer",
          },
        }}
        onClick={() => handleRecipeClick(recipe)}
      >
        <CardMedia
          sx={{
            height: "20vh",
            objectFit: "cover",
            borderRadius: "15px 15px 0 0",
          }}
          image={recipe.image}
          title={recipe.label}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {recipe.label}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Calories: {recipe.calories.toFixed(2)} kcal
          </Typography>
          {recipe.dietLabels ? (
            <Typography variant="body2" color="textSecondary" component="div">
              Diets: {recipe.dietLabels}
            </Typography>
          ) : (
            <></>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};
