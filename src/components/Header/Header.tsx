import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

//This component contains Navigation buttons
export const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#008080", marginBottom: "2rem" }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Recipe Explorer
        </Typography>

        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{
            "&:hover": {
              backgroundColor: "#004040",
            },
          }}
        >
          Search Recipes
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/bookmarked"
          sx={{
            "&:hover": {
              backgroundColor: "#004040",
              padding: "0.8rem",
            },
          }}
        >
          Bookmarked Recipes
        </Button>
      </Toolbar>
    </AppBar>
  );
};
