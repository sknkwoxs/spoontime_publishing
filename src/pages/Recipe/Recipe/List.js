import { useState } from "react";

import RecipeItem from "../RecipeItem.js";
import RecipeContents from "./RecipeContents";
import RecipeNavItem from "./RecipeNavItem";

export function List({
  openFilterModal,
  setOpenFilterModal,
  openSortModal,
  setOpenSortModal,
}) {
  // 탭
  const [activeTab, setActiveTab] = useState("recipeMaindishTab");

  return (
    <>
      <section>
        <article>
          <ul className="flex border-b Font14sb text-GreyScale-grey03 searchResultTab">
            <RecipeNavItem
              id="recipeMaindishTab"
              title="메인요리"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <RecipeNavItem
              id="recipeSnackTab"
              title="간식"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <RecipeNavItem
              id="recipeAllTab"
              title="전체"
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

          {/* Maindish */}
          <RecipeContents id="recipeMaindishTab" activeTab={activeTab}>
            <article className="flex gap-2 py-3 Font12">
              <button
                className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1"
                onClick={() => setOpenFilterModal(!openFilterModal)}
              >
                추천순 <img src="/images/svgIcons/down.svg" alt="down" />
              </button>
              <button
                className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1"
                onClick={() => setOpenFilterModal(!openFilterModal)}
              >
                알레르기 <img src="/images/svgIcons/down.svg" alt="down" />
              </button>
              <button
                className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1"
                onClick={() => setOpenFilterModal(!openFilterModal)}
              >
                상태 <img src="/images/svgIcons/down.svg" alt="down" />
              </button>
              <button
                className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1"
                onClick={() => setOpenSortModal(!openSortModal)}
              >
                단계 <img src="/images/svgIcons/down.svg" alt="down" />
              </button>
            </article>

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
          </RecipeContents>

          {/* Snack */}
          <RecipeContents id="recipeSnackTab" activeTab={activeTab}>
            <article className="flex gap-2 py-3 Font12">
              <button
                className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1"
                onClick={() => setOpenFilterModal(!openFilterModal)}
              >
                추천순 <img src="/images/svgIcons/down.svg" alt="down" />
              </button>
              <button
                className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1"
                onClick={() => setOpenFilterModal(!openFilterModal)}
              >
                알레르기 <img src="/images/svgIcons/down.svg" alt="down" />
              </button>
              <button
                className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1"
                onClick={() => setOpenFilterModal(!openFilterModal)}
              >
                상태 <img src="/images/svgIcons/down.svg" alt="down" />
              </button>
              <button
                className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1"
                onClick={() => setOpenSortModal(!openSortModal)}
              >
                단계 <img src="/images/svgIcons/down.svg" alt="down" />
              </button>
            </article>

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

            <RecipeItem />
            <RecipeItem />
            <RecipeItem />
            <RecipeItem />
          </RecipeContents>

          {/* All */}
          <RecipeContents id="recipeAllTab" activeTab={activeTab}>
            <article className="flex gap-2 py-3 Font12">
              <button
                className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1"
                onClick={() => setOpenFilterModal(!openFilterModal)}
              >
                추천순 <img src="/images/svgIcons/down.svg" alt="down" />
              </button>
              <button
                className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1"
                onClick={() => setOpenFilterModal(!openFilterModal)}
              >
                알레르기 <img src="/images/svgIcons/down.svg" alt="down" />
              </button>
              <button
                className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1"
                onClick={() => setOpenFilterModal(!openFilterModal)}
              >
                상태 <img src="/images/svgIcons/down.svg" alt="down" />
              </button>
              <button
                className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1"
                onClick={() => setOpenSortModal(!openSortModal)}
              >
                단계 <img src="/images/svgIcons/down.svg" alt="down" />
              </button>
            </article>

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

            <RecipeItem />
          </RecipeContents>
        </article>
      </section>
    </>
  );
}
