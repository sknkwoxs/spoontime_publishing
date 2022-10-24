import { useState } from "react";
import { Link } from "react-router-dom";
import SearchResultIngredient from "./SearchResultIngredient";
import SearchResultRecipe from "./SearchResultRecipe";

export default function Search() {
  // input창 clear버튼
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    setMessage("");
  };

  return (
    <>
      <article className="w-full min-h-[calc(100vh_-_7.75rem)]">
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
                onChange={handleChange}
                value={message}
              />
              <button className="absolute top-0 h-full left-2">
                <img src="/images/svgIcons/mainSearch.svg" alt="mainSearch" />
              </button>
              <button
                className="absolute top-0 h-full right-2"
                onClick={handleClick}
              >
                <img src="/images/svgIcons/outlinedX.svg" alt="outlinedX" />
              </button>
            </div>
          </div>
          {/* default */}
          {/* recommend banner */}
          <div className="flex items-center justify-between px-4 py-3 mb-6 bg-BrandColor-green04 Font12sb">
            <p>식재료를 선택해서 레시피를 검색해보세요.</p>
            <button>
              <img
                src="/images/svgIcons/directionsRight.svg"
                alt="directionsRight"
              />
            </button>
          </div>

          <div className="px-4 pb-6 border-b">
            <p className="mb-4">추천 검색어</p>
            <div className="gap-x-2">
              <button className="inline-block mr-2 mb-2 px-4 py-1 border border-GreyScale-grey01 rounded-[19px] Font12">
                알레르기
              </button>
              <button className="inline-block mr-2 mb-2 px-4 py-1 border border-GreyScale-grey01 rounded-[19px] Font12">
                감기
              </button>
              <button className="inline-block mr-2 mb-2 px-4 py-1 border border-GreyScale-grey01 rounded-[19px] Font12">
                이앓이
              </button>
              <button className="inline-block mr-2 mb-2 px-4 py-1 border border-GreyScale-grey01 rounded-[19px] Font12">
                여름
              </button>
              <button className="inline-block mr-2 mb-2 px-4 py-1 border border-GreyScale-grey01 rounded-[19px] Font12">
                한우
              </button>
              <button className="inline-block mr-2 mb-2 px-4 py-1 border border-GreyScale-grey01 rounded-[19px] Font12">
                아기 주도
              </button>
              <button className="inline-block mr-2 mb-2 px-4 py-1 border border-GreyScale-grey01 rounded-[19px] Font12">
                냉이
              </button>
              <button className="inline-block mr-2 mb-2 px-4 py-1 border border-GreyScale-grey01 rounded-[19px] Font12">
                알레르기
              </button>
            </div>
          </div>
          <div className="px-4">
            <div className="flex justify-between pt-6 pb-4">
              <p className="Font14sb">최근 검색</p>
              <button className="Font12 text-BrandColor-green01">
                전체삭제
              </button>
            </div>
            <div>
              <div className="flex items-center justify-between pb-3">
                <p className="Font14">한우가지로메인죽</p>
                <button>
                  <img src="/images/svgIcons/x.svg" alt="x" />
                </button>
              </div>
              <div className="flex items-center justify-between pb-3">
                <p className="Font14">김가네 떡볶이</p>
                <button>
                  <img src="/images/svgIcons/x.svg" alt="x" />
                </button>
              </div>
              <div className="flex items-center justify-between pb-3">
                <p className="Font14">한우강낭콩죽</p>
                <button>
                  <img src="/images/svgIcons/x.svg" alt="x" />
                </button>
              </div>
              <div className="flex items-center justify-between pb-3">
                <p className="Font14">닭고기시금치죽</p>
                <button>
                  <img src="/images/svgIcons/x.svg" alt="x" />
                </button>
              </div>
            </div>
          </div>
          {/* Autocomplete */}
          {/* <div className="px-4">
          <ul className="flex flex-col gap-3 Font14 text-BrandColor-green01">
            <li>
              [식재료] 본<span className="text-BrandColor-green03">죽</span>
            </li>
            <li>
              [레시피] [6개월]{" "}
              <span className="text-BrandColor-green03">죽</span>
            </li>
            <li>
              [레시피] [6개월] 전복
              <span className="text-BrandColor-green03">죽</span>
            </li>
            <li>
              [레시피] [8개월] 닭
              <span className="text-BrandColor-green03">죽</span>
            </li>
            <li>
              [레시피] [9개월] 팥
              <span className="text-BrandColor-green03">죽</span>
            </li>
          </ul>
        </div> */}
          {/* SearchResult */}
          {/* <SearchResultRecipe /> */}
          {/* <SearchResultIngredient /> */}
        </div>
      </article>
    </>
  );
}
