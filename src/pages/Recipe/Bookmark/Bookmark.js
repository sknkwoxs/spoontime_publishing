import { useState } from "react";
import { Link } from "react-router-dom";

import BookmarkNavItem from "./BookmarkNavItem";
import BookmarkContents from "./BookmarkContents";
import BookmarkRecipeSort from "./BookmarkRecipeSort";
import BookmarkIngredientSort from "./BookmarkIngredientSort";
import RecipeItem from "../RecipeItem";
import IngredientsItem from "../IngredientGuide/IngredientsItem";

export default function Bookmark() {
  // 탭
  const [activeTab, setActiveTab] = useState("bookmarkRecipeTab");

  // 필터 모달
  const [openRecipeSortModal, setOpenRecipeSortModal] = useState(false);
  const [openIngredientSortModal, setOpenIngredientSortModal] = useState(false);

  return (
    <>
      <article className="h-full px-4">
        <div className="flex py-4">
          <div className="absolute">
            <Link to="/Recipe">
              <img
                src="/images/svgIcons/directionsLeft.svg"
                alt="directionsLeft"
              />
            </Link>
          </div>
          <div className="flex justify-center w-full">
            <p className="Font16sb">즐겨찾기</p>
          </div>
        </div>
      </article>
      <article className="px-4">
        <ul className="flex border-b Font14sb text-GreyScale-grey03 searchResultTab">
          <BookmarkNavItem
            id="bookmarkRecipeTab"
            title="레시피"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <BookmarkNavItem
            id="bookmarkIngredientTab"
            title="식재료"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </ul>
        {/* No Data */}
        {/* <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center mx-4">
            <div className="mb-4">
              <img
                className="object-cover h-[128px] w-full"
                src="/images/RecipeDetails1.jpg"
                alt="RecipeDetails1"
              />
            </div>
            <div>
              <p className="mb-4 text-center Font14">
                즐겨 찾는 레시피가 없습니다.
                <br /> 마음에 드는 레시피에 (하트)를 눌러보세요.
              </p>
              <button className="flex justify-center px-8 py-2 mx-auto mt-5 border rounded Font14sb border-BrandColor-green01">
                레시피 보러 가기
              </button>
            </div>
          </div> */}
        {/* Result / No-data */}
        {/* 로고 및 텍스트 위치 조정 필요 */}
        {/* <div className="flex flex-col items-center mt-[252px]">
          <div className="mb-4">
            <img
              src="/images/Recipe/RecipeSearchNoData.svg"
              alt="RecipeSearchNoData"
            />
          </div>
          <p className="Font14 text-BrandColor-green01">
            검색 결과가 없습니다.
          </p>
        </div> */}

        {/* Recipe */}
        <BookmarkContents id="bookmarkRecipeTab" activeTab={activeTab}>
          <div className="flex items-center justify-between py-3">
            <div className="Font14">
              총 <span className="Font14sb">19</span>개
            </div>
            <article className="flex gap-2 Font12">
              <button
                className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1"
                onClick={() => setOpenRecipeSortModal(!openRecipeSortModal)}
              >
                추천순 <img src="/images/svgIcons/down.svg" alt="down" />
              </button>
            </article>
          </div>

          {/* <ul className="mt-3">
            <form className="grid grid-cols-4 gap-4 mb-3 selectForm Font12 text-GreyScale-grey01">
              {allergyList.map((allergyList, index) => {
                return (
                  <li className="mx-auto text-center " key={index}>
                    <input id={allergyList.id} type="checkbox" />
                    <label className="cursor-pointer" htmlFor={allergyList.for}>
                      <img
                        className="mx-auto mb-1"
                        src={allergyList.src}
                        alt={allergyList.alt}
                      />
                      {allergyList.allergyName}
                    </label>
                  </li>
                );
              })}
            </form>
          </ul> */}

          <RecipeItem />
          <RecipeItem />
        </BookmarkContents>

        {/* Ingredient */}
        <BookmarkContents id="bookmarkIngredientTab" activeTab={activeTab}>
          <div className="flex items-center justify-between py-3">
            <div className="Font14">
              총 <span className="Font14sb">2</span>개
            </div>
            <article className="flex gap-2 Font12">
              <button
                className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1"
                onClick={() =>
                  setOpenIngredientSortModal(!openIngredientSortModal)
                }
              >
                최근 추가한 순{" "}
                <img src="/images/svgIcons/down.svg" alt="down" />
              </button>
            </article>
          </div>

          {/* <ul className="mt-3">
            <form className="grid grid-cols-4 gap-4 mb-3 selectForm Font12 text-GreyScale-grey01">
              {statusList.map((statusList, index) => {
                return (
                  <li className="mx-auto text-center " key={index}>
                    <input id={statusList.id} type="checkbox" />
                    <label
                      className="max-w-[64px] whitespace-nowrap cursor-pointer"
                      htmlFor={statusList.for}
                    >
                      <img
                        className="mx-auto mb-1"
                        src={statusList.src}
                        alt={statusList.alt}
                      />
                      {statusList.status}
                    </label>
                  </li>
                );
              })}
            </form>
          </ul> */}

          <IngredientsItem />
          <IngredientsItem />
        </BookmarkContents>
      </article>
      {openRecipeSortModal && (
        <BookmarkRecipeSort
          closeRecipeSortModal={() =>
            setOpenRecipeSortModal(!openRecipeSortModal)
          }
        />
      )}
      {openIngredientSortModal && (
        <BookmarkIngredientSort
          closeIngredientSortModal={() =>
            setOpenIngredientSortModal(!openIngredientSortModal)
          }
        />
      )}
    </>
  );
}
