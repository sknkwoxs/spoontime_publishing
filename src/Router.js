import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//
import Splash from "./pages/Splash";
import SplashRecipe from "./pages/Splash/SplashRecipe";
import SplashCalendar from "./pages/Splash/SplashCalendar";
import SplashPostscript from "./pages/Splash/SplashPostscript";
import SplashSpoontime from "./pages/Splash/SplashSpoontime";
//
import Login from "./pages/Login";
//
import FamilyShareCode from "./pages/FamilyShareCode/FamilyShareCode";
//
import BabyInfo from "./pages/BabyInfo/BabyInfo";
import Birth from "./pages/BabyInfo/Birth";
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
import Feedback from "./pages/MealPlan/Feedback/Feedback";
//
import MyPage from "./pages/MyPage";
import Profile from "./pages/MyPage/Profile/Profile";
//
import Preloader from "./pages/Preloader";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Splash */}
        <Route path="/Splash" element={<Splash />} />
        <Route path="/Splash/SplashRecipe" element={<SplashRecipe />} />
        <Route path="/Splash/SplashCalendar" element={<SplashCalendar />} />
        <Route path="/Splash/SplashPostscript" element={<SplashPostscript />} />
        <Route path="/Splash/SplashSpoontime" element={<SplashSpoontime />} />
        {/* Login */}
        <Route path="/" element={<Login />} />
        {/* FamilyShareCode */}
        <Route path="/FamilyShareCode" element={<FamilyShareCode />} />
        {/* BabyInfo */}
        <Route path="/BabyInfo" element={<BabyInfo />} />
        <Route path="/Birth" element={<Birth />} />
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
        <Route path="/MealPlan/Feedback" element={<Feedback />} />
        {/* MyPage */}
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Profile" element={<Profile />} />
        {/*  */}
        <Route path="/Preloader" element={<Preloader />} />
      </Routes>
    </BrowserRouter>
  );
}
