import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchResultIngredient from "./SearchResultIngredient";
import SearchResultRecipe from "./SearchResultRecipe";
import SearchResultNavItem from "./SearchResultNavItem";
import SearchResultContents from "./SearchResultContents";
import SearchResultRecipeFilter from "./SearchResultRecipeFilter";
import SearchResultIngredientFilter from "./SearchResultIngredientFilter";
import RecipeItem from "../RecipeItem";
import IngredientsItem from "../IngredientGuide/IngredientsItem";

export default function Search() {
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem("keywords") || "[]")
  );

  //검색어 추가
  const handleAddKeyword = (text) => {
    console.log("text", text);
    const newKeyword = {
      id: Date.now(),
      text: text,
    };
    setKeywords([newKeyword, ...keywords]);
  };

  const [keyword, setKeyword] = useState("");

  const handleKeyword = (event) => {
    setKeyword(event.target.value);
  };

  // Enter로 검색어 추가
  const handleEnter = (event) => {
    if (keyword && event.keyCode === 13) {
      handleAddKeyword(keyword);
      setKeyword("");
    }
  };

  // input창 clear
  const handleClearKeyword = () => {
    setKeyword("");
  };

  //keyword가 있으면 true, 없으면 false
  console.log(!!keyword);

  useEffect(() => {
    //array 타입을 string 형태로 변환
    localStorage.setItem("keywords", JSON.stringify(keywords));
  }, [keywords]);

  // 탭
  const [activeTab, setActiveTab] = useState("searchResultRecipeTab");

  // 데이터
  const allergyList = [
    {
      for: "eggCheckbox",
      id: "eggCheckbox",
      src: "/images/ingredients/egg.svg",
      alt: "egg",
      allergyName: "달걀",
    },
  ];

  const statusList = [
    {
      for: "eggCheckbox",
      id: "eggCheckbox",
      src: "/images/ingredients/default.svg",
      alt: "default",
      status: "감기/고열",
    },
  ];

  const [openRecipeFilterModal, setOpenRecipeFilterModal] = useState(false);

  const [openIngredientFilterModal, setOpenIngredientFilterModal] =
    useState(false);

  return (
    <>
      <article className="w-full">
        <div>
          <div className="flex items-center gap-4 px-4 py-3">
            <div>
              <Link to="/Recipe">
                <img
                  src="/images/svgIcons/directionsLeft.svg"
                  alt="directionsLeft"
                />
              </Link>
            </div>
            <div className="relative w-full">
              <input
                className="flex w-full py-1 border-none rounded px-9 bg-GreyScale-grey05 Font14 text-GreyScale-grey01"
                type="text"
                placeholder="식단검색"
                onChange={handleKeyword}
                onKeyDown={handleEnter}
                value={keyword}
              />
              {/* search 버튼 */}
              <button className="absolute top-0 h-full left-2">
                <img src="/images/svgIcons/mainSearch.svg" alt="mainSearch" />
              </button>
              {/* clear 버튼 */}
              <button
                className="absolute top-0 h-full right-2"
                onClick={handleClearKeyword}
              >
                <img src="/images/svgIcons/outlinedX.svg" alt="outlinedX" />
              </button>
            </div>
          </div>

          {/* <SearchResultRecipe /> */}
          {/* <SearchResultIngredient /> */}
        </div>
      </article>
      <article className="px-4">
        <ul className="flex border-b Font14sb text-GreyScale-grey03 searchResultTab">
          <SearchResultNavItem
            id="searchResultRecipeTab"
            title="레시피"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <SearchResultNavItem
            id="searchResultIngredientTab"
            title="식재료"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </ul>

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
        <SearchResultContents id="searchResultRecipeTab" activeTab={activeTab}>
          <div className="flex items-center justify-between py-3">
            <div className="Font14">
              총 <span className="Font14sb">19</span>개
            </div>
            <article className="flex gap-2 Font12">
              <button
                className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1"
                onClick={() => setOpenRecipeFilterModal(!openRecipeFilterModal)}
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
        </SearchResultContents>

        {/* Ingredient */}
        <SearchResultContents
          id="searchResultIngredientTab"
          activeTab={activeTab}
        >
          <div className="flex items-center justify-between py-3">
            <div className="Font14">
              총 <span className="Font14sb">2</span>개
            </div>
            <article className="flex gap-2 Font12">
              <button
                className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1"
                onClick={() =>
                  setOpenIngredientFilterModal(!openIngredientFilterModal)
                }
              >
                추천순 <img src="/images/svgIcons/down.svg" alt="down" />
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
        </SearchResultContents>
      </article>

      {openRecipeFilterModal && (
        <SearchResultRecipeFilter
          closeRecipeFilterModal={() =>
            setOpenRecipeFilterModal(!openRecipeFilterModal)
          }
        />
      )}
      {openIngredientFilterModal && (
        <SearchResultIngredientFilter
          closeIngredientFilterModal={() =>
            setOpenIngredientFilterModal(!openIngredientFilterModal)
          }
        />
      )}
    </>
  );
}
