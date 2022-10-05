import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//
import Splash from "./pages/Splash";
import Authority from "./pages/Authority";
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
import Birthday from "./pages/BabyInfo/Birthday";
import PhotoUpload from "./pages/BabyInfo/PhotoUpload";
import Allergy from "./pages/BabyInfo/Allergy";
import Configuring from "./pages/BabyInfo/Configuring";
//
import Recipe from "./pages/Recipe";
import AddMenu from "./pages/Recipe/AddMenu/AddMenu";
import RecipeDetails from "./pages/Recipe/RecipeDetails/RecipeDetails";
import Search from "./pages/Recipe/Search/Search";
import SearchIngredient from "./pages/Recipe/Search/SearchIngredient";
import BookmarkRecipe from "./pages/Recipe/Bookmark/BookmarkRecipe";
import BookmarkIngredient from "./pages/Recipe/Bookmark/BookmarkIngredient";
import IngredientGuide from "./pages/Recipe/IngredientGuide/IngredientGuide";
import IngredientDetails from "./pages/Recipe/IngredientGuide/IngredientDetails";
//
import MealPlan from "./pages/MealPlan";
import MealPlanEditMode from "./pages/MealPlan/MealPlanEditMode";
import Settings from "./pages/MealPlan/Settings/Settings";
import MealDetails from "./pages/MealPlan/MealDetails";
import Feedback from "./pages/MealPlan/Recipe/Feedback";
import Library from "./pages/MealPlan/Recipe/Library";
import Album from "./pages/MealPlan/Recipe/Album";
import Read from "./pages/MealPlan/Recipe/Read";
import FeedbackEdit from "./pages/MealPlan/Recipe/FeedbackEdit";
import SearchRecipe from "./pages/MealPlan/Add/SearchRecipe";
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
        {/* <Route path="/Splash" element={<Splash />} /> */}
        <Route path="/Authority" element={<Authority />} />
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
        <Route path="/Birthday" element={<Birthday />} />
        <Route path="/PhotoUpload" element={<PhotoUpload />} />
        <Route path="/Allergy" element={<Allergy />} />
        <Route path="/Configuring" element={<Configuring />} />
        {/* Recipe */}
        <Route path="/Recipe" element={<Recipe />} />
        <Route path="/Recipe/AddMenu" element={<AddMenu />} />
        <Route path="/Recipe/RecipeDetails" element={<RecipeDetails />} />
        <Route path="/Recipe/Search" element={<Search />} />
        <Route path="/Recipe/SearchIngredient" element={<SearchIngredient />} />
        <Route path="/Recipe/BookmarkRecipe" element={<BookmarkRecipe />} />
        <Route
          path="/Recipe/BookmarkIngredient"
          element={<BookmarkIngredient />}
        />
        <Route path="/Recipe/IngredientGuide" element={<IngredientGuide />} />
        <Route
          path="/Recipe/IngredientDetails"
          element={<IngredientDetails />}
        />
        {/* MealPlan */}
        <Route path="/MealPlan" element={<MealPlan />} />
        <Route
          path="/MealPlan/MealPlanEditMode"
          element={<MealPlanEditMode />}
        />
        <Route path="/MealPlan/Settings" element={<Settings />} />
        <Route path="/MealPlan/MealDetails" element={<MealDetails />} />
        <Route path="/MealPlan/Recipe/Feedback" element={<Feedback />} />
        <Route path="/MealPlan/Recipe/Library" element={<Library />} />
        <Route path="/MealPlan/Recipe/Album" element={<Album />} />
        <Route path="/MealPlan/Recipe/Read" element={<Read />} />
        <Route
          path="/MealPlan/Recipe/FeedbackEdit"
          element={<FeedbackEdit />}
        />
        <Route path="/MealPlan/Add/SearchRecipe" element={<SearchRecipe />} />
        {/* MyPage */}
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Profile" element={<Profile />} />
        {/*  */}
        <Route path="/Preloader" element={<Preloader />} />
      </Routes>
    </BrowserRouter>
  );
}
