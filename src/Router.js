import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Recipe from "./pages/Recipe";
import AddMenu from "./pages/Recipe/AddMenu/AddMenu";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Recipe" element={<Recipe />} />
        <Route path="/Recipe/AddMenu" element={<AddMenu />} />
      </Routes>
    </BrowserRouter>
  );
}
