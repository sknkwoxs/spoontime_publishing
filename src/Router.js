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
import MealPlanSettings from "./pages/MealPlan/Settings/MealPlanSettings";
import MealDetails from "./pages/MealPlan/MealDetails";
import Feedback from "./pages/MealPlan/Recipe/Feedback";
import Library from "./pages/MealPlan/Recipe/Library";
import Album from "./pages/MealPlan/Recipe/Album";
import Read from "./pages/MealPlan/Recipe/Read";
import FeedbackEdit from "./pages/MealPlan/Recipe/FeedbackEdit";
import SearchRecipe from "./pages/MealPlan/AddAMealPlan/SearchRecipe";
import Result from "./pages/MealPlan/AddAMealPlan/Result";
import Name from "./pages/MealPlan/AddAMealPlan/Manual/Name";
import FinalStep from "./pages/MealPlan/AddAMealPlan/FinalStep";
//
import MyPage from "./pages/MyPage";
import Profile from "./pages/MyPage/Profile/Profile";
import ProfileLibrary from "./pages/MyPage/Profile/ProfileLibrary";
import ProfileAlbum from "./pages/MyPage/Profile/ProfileAlbum";
import DeleteProfile from "./pages/MyPage/Profile/DeleteProfile";
import Sharing from "./pages/MyPage/Profile/Sharing";
import DietInfo from "./pages/MyPage/DietInfo/DietInfo";
import DietInfoAllergy from "./pages/MyPage/DietInfo/DietInfoAllergy";
import DietInfoStep from "./pages/MyPage/DietInfo/DietInfoStep";
import DietInfoTried from "./pages/MyPage/DietInfo/DietInfoTried";
import FamilyShareInfo from "./pages/MyPage/FamilyShareInfo/FamilyShareInfo";
import Settings from "./pages/MyPage/Settings/Settings";
import AccountInfo from "./pages/MyPage/Settings/AccountInfo";
import EditPWCurrent from "./pages/MyPage/Settings/EditPWCurrent";
import EditPWNew from "./pages/MyPage/Settings/EditPWNew";
import Leave from "./pages/MyPage/Settings/Leave";
import Opinion from "./pages/MyPage/Settings/Opinion";
import Confirm from "./pages/MyPage/Settings/Confirm";
import Notice from "./pages/MyPage/Settings/Notice";
import Details from "./pages/MyPage/Settings/Details";
import Inquiry from "./pages/MyPage/Settings/Inquiry";
import TermsofService from "./pages/MyPage/Settings/TermsofService";
import PrivacyPolicy from "./pages/MyPage/Settings/PrivacyPolicy";
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
        <Route path="/Login" element={<Login />} />
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
        <Route
          path="/MealPlan/MealPlanSettings"
          element={<MealPlanSettings />}
        />
        <Route path="/MealPlan/MealDetails" element={<MealDetails />} />
        <Route path="/MealPlan/Recipe/Feedback" element={<Feedback />} />
        <Route path="/MealPlan/Recipe/Library" element={<Library />} />
        <Route path="/MealPlan/Recipe/Album" element={<Album />} />
        <Route path="/MealPlan/Recipe/Read" element={<Read />} />
        <Route
          path="/MealPlan/Recipe/FeedbackEdit"
          element={<FeedbackEdit />}
        />
        <Route
          path="/MealPlan/AddAMealPlan/SearchRecipe"
          element={<SearchRecipe />}
        />
        <Route path="/MealPlan/AddAMealPlan/Result" element={<Result />} />
        <Route path="/MealPlan/AddAMealPlan/Manual/Name" element={<Name />} />
        <Route
          path="/MealPlan/AddAMealPlan/FinalStep"
          element={<FinalStep />}
        />
        {/* MyPage */}
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/MyPage/Profile" element={<Profile />} />
        <Route
          path="/MyPage/Profile/ProfileLibrary"
          element={<ProfileLibrary />}
        />
        <Route path="/MyPage/Profile/ProfileAlbum" element={<ProfileAlbum />} />
        <Route path="/MyPage/DeleteProfile" element={<DeleteProfile />} />
        <Route path="/MyPage/Sharing" element={<Sharing />} />
        <Route path="/MyPage/DietInfo" element={<DietInfo />} />
        <Route path="/MyPage/DietInfoAllergy" element={<DietInfoAllergy />} />
        <Route path="/MyPage/DietInfoStep" element={<DietInfoStep />} />
        <Route path="/MyPage/DietInfoTried" element={<DietInfoTried />} />
        <Route path="/MyPage/FamilyShareInfo" element={<FamilyShareInfo />} />
        <Route path="/MyPage/Settings" element={<Settings />} />
        <Route path="/MyPage/Settings/AccountInfo" element={<AccountInfo />} />
        <Route
          path="/MyPage/Settings/EditPWCurrent"
          element={<EditPWCurrent />}
        />
        <Route path="/MyPage/Settings/EditPWNew" element={<EditPWNew />} />
        <Route path="/MyPage/Settings/Leave" element={<Leave />} />
        <Route path="/MyPage/Settings/Opinion" element={<Opinion />} />
        <Route path="/MyPage/Settings/Confirm" element={<Confirm />} />
        <Route path="/MyPage/Settings/Notice" element={<Notice />} />
        <Route path="/MyPage/Settings/Details" element={<Details />} />
        <Route path="/MyPage/Settings/Inquiry" element={<Inquiry />} />
        <Route
          path="/MyPage/Settings/TermsofService"
          element={<TermsofService />}
        />
        <Route
          path="/MyPage/Settings/PrivacyPolicy"
          element={<PrivacyPolicy />}
        />
        {/*  */}
        <Route path="/Preloader" element={<Preloader />} />
      </Routes>
    </BrowserRouter>
  );
}
