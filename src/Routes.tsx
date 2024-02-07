import { BookmarkedRecipes } from "pages/BookmarkedRecipes";
import { SearchPage } from "pages/SearchPage";
import { createBrowserRouter } from "react-router-dom";

// This will handle routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
  },
  {
    path: "/bookmarked",
    element: <BookmarkedRecipes />,
  },
]);
