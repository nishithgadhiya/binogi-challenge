import { Grid, List, ListItem, styled, Typography } from "@mui/material";
import { RecipeData } from "components/utils/utils";

interface RecipeInfoProps {
  recipe: RecipeData;
}

const StyledKey = styled(Typography)({
  fontSize: "1.2rem",
});

const StyledValue = styled(Typography)({
  fontSize: "1rem",
  paddingLeft: "1rem",
});

const StyledContainer = styled(Typography)({
  display: "flex",
  alignItems: "center",
  paddingBottom: "1rem",
});

// This will show additional info in RecipeDialog
export const RecipeInfo = ({ recipe }: RecipeInfoProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <img
          src={recipe.image}
          alt={recipe.label}
          style={{ width: "100%", maxHeight: "70vh" }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <StyledContainer>
          <StyledKey>Calories: </StyledKey>
          <StyledValue>{recipe.calories.toFixed(2)} kcal</StyledValue>
        </StyledContainer>
        <StyledContainer>
          <StyledKey>Diet Labels: </StyledKey>
          <StyledValue>{recipe.dietLabels}</StyledValue>
        </StyledContainer>
        <StyledContainer>
          <StyledKey>Caution: </StyledKey>
          <StyledValue sx={{ color: "red" }}>{recipe.cautions}</StyledValue>
        </StyledContainer>
        <StyledContainer>
          <StyledKey>Health Labels: </StyledKey>
          <StyledValue>{recipe.healthLabels}</StyledValue>
        </StyledContainer>
        <StyledContainer>
          <StyledKey>Ingredients: </StyledKey>
          <List dense disablePadding>
            {recipe.ingredients &&
              recipe.ingredients.map((label, index) => (
                <ListItem key={index} sx={{ padding: "0" }}>
                  <StyledValue sx={{ color: "green" }}>{label}</StyledValue>
                </ListItem>
              ))}
          </List>
        </StyledContainer>
      </Grid>
    </Grid>
  );
};
