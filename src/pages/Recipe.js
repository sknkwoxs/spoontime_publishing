import { useState } from "react";

import { BabyInfo } from "./Recipe/Recipe/BabyInfo";
import { List } from "./Recipe/Recipe/List";
import { Navigation } from "./Recipe/Recipe/Navigation";
import TabBar from "../components/TabBar";
import Alert from "./Recipe/Alert";
import PopUp from "./Recipe/PopUp";
import Filter from "./Recipe/Filter/Filter";
import RecipeSort from "./Recipe/RecipeSort";

export default function Recipe() {
  return (
    <>
      <div className="w-full pb-[52px]">
        <div className="px-4 pb-4">
          <Navigation />
          <BabyInfo />
          <List />
        </div>
        <TabBar />
      </div>
      {/* <Alert /> */}
      {/* <PopUp /> */}
      {/* <Filter /> */}
      {/* <RecipeSort /> */}
    </>
  );
}
