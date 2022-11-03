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
  // 모달 창
  const [openFilterModal, setOpenFilterModal] = useState(false);

  const [openSortModal, setOpenSortModal] = useState(false);

  return (
    <>
      <div className="w-full pb-[52px]">
        <div className="px-4 pb-4">
          <Navigation />
          <BabyInfo />
          <List
            openFilterModal={openFilterModal}
            setOpenFilterModal={setOpenFilterModal}
            openSortModal={openSortModal}
            setOpenSortModal={setOpenSortModal}
          />
        </div>
        <TabBar />
      </div>
      {/* <Alert /> */}
      {/* <PopUp /> */}
      {openFilterModal && (
        <Filter closeFilterModal={() => setOpenFilterModal(!openFilterModal)} />
      )}
      {openSortModal && (
        <RecipeSort closeSortModal={() => setOpenSortModal(!openSortModal)} />
      )}
    </>
  );
}
