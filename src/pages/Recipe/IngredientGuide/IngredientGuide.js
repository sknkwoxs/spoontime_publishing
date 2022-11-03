import { useState } from "react";
import { Link } from "react-router-dom";

import IngredientNavItem from "./IngredientGuideNavItem";
import IngredientGuideContents from "./IngredientGuideContents";
import IngredientsItem from "./IngredientsItem";
import IngredientGuideSort from "./IngredientGuideSort";
import IngredientGuideFilter from "./IngredientGuideFilter";

export default function IngredientGuide() {
  // 탭
  const [activeTab, setActiveTab] = useState("ingredientGuideDefaultTab");

  // sort 모달
  const [openIngredientGuideSortModal, setOpenIngredientGuideSortModal] =
    useState(false);

  // filter 모달
  const [openIngredientGuideFilterModal, setOpenIngredientGuideFilterModal] =
    useState(false);

  return (
    <>
      <article className="mx-4">
        <div className="flex justify-between py-4">
          <Link to="/Recipe">
            <img
              src="/images/svgIcons/directionsLeft.svg"
              alt="directionsLeft"
            />
          </Link>
          <p className="Font16sb">식재료 가이드</p>
          <Link to="#">
            <img src="/images/svgIcons/search.svg" alt="search" />
          </Link>
        </div>
      </article>
      <article className="px-4">
        <ul className="flex gap-6 my-2 overflow-x-auto border-b Font14sb ingredientGuideTab text-GreyScale-grey03 whitespace-nowrap">
          <IngredientNavItem
            id="ingredientGuideDefaultTab"
            title="전체"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <IngredientNavItem
            id="ingredientCrealsGuideTab"
            title="곡류"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <IngredientNavItem
            id="ingredientGuideVegetableTab"
            title="야채류"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <IngredientNavItem
            id="ingredientGuideProteinsTab"
            title="단백질류"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <IngredientNavItem
            id="ingredientGuideMilksTab"
            title="우유류"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <IngredientNavItem
            id="ingredientGuideFruitsTab"
            title="과일류"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </ul>

        {/* Default */}
        <IngredientGuideContents
          id="ingredientCrealsGuideTab"
          activeTab={activeTab}
        >
          <div className="flex items-center justify-between py-3">
            <article className="flex gap-2 Font12">
              <button
                className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1"
                onClick={() =>
                  setOpenIngredientGuideSortModal(!openIngredientGuideSortModal)
                }
              >
                추천순 <img src="/images/svgIcons/down.svg" alt="down" />
              </button>
              <button
                className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1"
                onClick={() =>
                  setOpenIngredientGuideFilterModal(
                    !openIngredientGuideFilterModal
                  )
                }
              >
                섭취 가능 시기
                <img src="/images/svgIcons/down.svg" alt="down" />
              </button>
              <button
                className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1"
                onClick={() =>
                  setOpenIngredientGuideFilterModal(
                    !openIngredientGuideFilterModal
                  )
                }
              >
                알레르기 위험 <img src="/images/svgIcons/down.svg" alt="down" />
              </button>
            </article>
          </div>
          <IngredientsItem />
        </IngredientGuideContents>

        {/* Default */}
        <IngredientGuideContents
          id="ingredientGuideDefaultTab"
          activeTab={activeTab}
        >
          <div className="flex items-center justify-between py-3">
            <article className="flex gap-2 Font12">
              <button
                className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1"
                onClick={() =>
                  setOpenIngredientGuideSortModal(!openIngredientGuideSortModal)
                }
              >
                추천순 <img src="/images/svgIcons/down.svg" alt="down" />
              </button>
              <button
                className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1"
                onClick={() =>
                  setOpenIngredientGuideFilterModal(
                    !openIngredientGuideFilterModal
                  )
                }
              >
                섭취 가능 시기
                <img src="/images/svgIcons/down.svg" alt="down" />
              </button>
              <button
                className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1"
                onClick={() =>
                  setOpenIngredientGuideFilterModal(
                    !openIngredientGuideFilterModal
                  )
                }
              >
                알레르기 위험 <img src="/images/svgIcons/down.svg" alt="down" />
              </button>
            </article>
          </div>
          <IngredientsItem />
          <IngredientsItem />
        </IngredientGuideContents>
      </article>

      {openIngredientGuideSortModal && (
        <IngredientGuideSort
          closeIngredientGuideSortModal={() =>
            setOpenIngredientGuideSortModal(!openIngredientGuideSortModal)
          }
        />
      )}
      {openIngredientGuideFilterModal && (
        <IngredientGuideFilter
          closeIngredientGuideFilterModal={() =>
            setOpenIngredientGuideFilterModal(!openIngredientGuideFilterModal)
          }
        />
      )}
    </>
  );
}
