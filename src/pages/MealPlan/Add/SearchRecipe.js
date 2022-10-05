import { Link } from "react-router-dom";
import SearchRecipeFilter from "./SearchRecipeFilter";
import SearchRecipeItem from "./SearchRecipeItem";

export default function SearchRecipe() {
  return (
    <>
      <section>
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
            />
            <button className="absolute top-0 h-full left-2">
              <img src="/images/svgIcons/mainSearch.svg" alt="mainSearch" />
            </button>
            <button className="absolute top-0 h-full right-2">
              <img src="/images/svgIcons/outlinedX.svg" alt="outlinedX" />
            </button>
          </div>
        </div>
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
        <article className="h-full px-4">
          <div className="flex justify-between py-3">
            <p className="Font14sb">즐겨찾는 레시피</p>
            <button className="flex items-center gap-1 py-1 px-2 border border-GreyScale-grey03 rounded-[25px]">
              <span className="Font12">최근 추가한 순</span>
              <img src="/images/svgIcons/down.svg" alt="down" />
            </button>
          </div>
          {/* <div className="h-full">
            <p className="absolute top-[50%] left-[50%] -translate-x-[50%] Font14">
              즐겨 찾는 레시피가 없습니다.
            </p>
          </div> */}
          <div>
            <SearchRecipeItem />
            <SearchRecipeItem />
            <SearchRecipeItem />
            <SearchRecipeItem />
          </div>
        </article>
      </section>
      {/* <SearchRecipeFilter /> */}
    </>
  );
}
