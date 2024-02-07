import { TextField, Button, Grid } from "@mui/material";
import { useState } from "react";

interface SearchFormProps {
  handleSearch: (query: string, page: number) => void;
}

// Handle searchbar and button
export const SearchForm = ({ handleSearch }: SearchFormProps) => {
  const [query, setQuery] = useState("");

  // Function to searchbar input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Function to handle submit action
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(query, 1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justifyContent="center" spacing={3}>
        <Grid item width="80%">
          <TextField
            sx={{ marginBottom: "1rem" }}
            fullWidth
            label="Search Recipes"
            variant="outlined"
            value={query}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            sx={{
              marginBottom: "1rem",
              padding: "1rem 2rem",
              background: "#339933",
              ":hover": {
                background: "#215524",
              },
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
