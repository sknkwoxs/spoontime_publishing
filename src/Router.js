import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//
import Login from "./pages/Login";
//
import Recipe from "./pages/Recipe";
import AddMenu from "./pages/Recipe/AddMenu/AddMenu";
import RecipeDetails from "./pages/Recipe/RecipeDetails/RecipeDetails";
import Search from "./pages/Recipe/Search/Search";
import Bookmark from "./pages/Recipe/Bookmark/Bookmark";
import IngredientGuide from "./pages/Recipe/IngredientGuide/IngredientGuide";
import IngredientDetails from "./pages/Recipe/IngredientGuide/IngredientDetails";
//
import MealPlan from "./pages/MealPlan";
import Settings from "./pages/MealPlan/Settings/Settings";
//
import MyPage from "./pages/MyPage";
//
import Preloader from "./pages/Preloader";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Recipe */}
        <Route path="/Recipe" element={<Recipe />} />
        <Route path="/Recipe/AddMenu" element={<AddMenu />} />
        <Route path="/Recipe/RecipeDetails" element={<RecipeDetails />} />
        <Route path="/Recipe/Search" element={<Search />} />
        <Route path="/Recipe/Bookmark" element={<Bookmark />} />
        <Route path="/Recipe/IngredientGuide" element={<IngredientGuide />} />
        <Route
          path="/Recipe/IngredientDetails"
          element={<IngredientDetails />}
        />
        {/* MealPlan */}
        <Route path="/MealPlan" element={<MealPlan />} />
        <Route path="/MealPlan/Settings" element={<Settings />} />
        {/* MyPage */}
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Preloader" element={<Preloader />} />
      </Routes>
    </BrowserRouter>
  );
}
