import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchResultIngredient from "./SearchResultIngredient";
import SearchResultRecipe from "./SearchResultRecipe";

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

  const handleClearKeyword = () => {
    setKeyword("");
  };

  //keyword가 있으면 true, 없으면 false가 리턴이 되는 것을 확인 할 수 있습니다
  console.log(!!keyword);

  useEffect(() => {
    //array 타입을 string 형태로 변환
    localStorage.setItem("keywords", JSON.stringify(keywords));
  }, [keywords]);

  //검색어 삭제
  const handleRemoveKeyword = (id) => {
    const nextKeyword = keywords.filter((thisKeyword) => {
      return thisKeyword.id !== id;
    });
    setKeywords(nextKeyword);
  };

  // input창 clear
  const handleClearKeywords = () => {
    setKeywords([]);
  };

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
                // onClick={handleClick}
                onClick={handleClearKeyword}
              >
                <img src="/images/svgIcons/outlinedX.svg" alt="outlinedX" />
              </button>
            </div>
          </div>
          {/* default */}
          {/* recommend banner */}

          {/* 추천 검색어 */}

          {/* 최근 검색 */}

          {/* Autocomplete */}

          {/* SearchResult */}
          <SearchResultRecipe />
          {/* <SearchResultIngredient /> */}
        </div>
      </article>
    </>
  );
}
