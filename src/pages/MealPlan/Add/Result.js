import { Link } from "react-router-dom";
import SearchRecipeFilter from "./SearchRecipeFilter";
import SearchRecipeItem from "./SearchRecipeItem";

export default function Result() {
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
        <article className="absolute top-[50%] left-[50%] -translate-x-[50%] px-4">
          <div className="flex flex-col items-center justify-center whitespace-nowrap">
            <div className="mb-4">
              <img src="/images/noDataLogo.svg" alt="noDataLogo" />
            </div>
            <p className="mb-4 Font14">검색 결과가 없습니다.</p>
            <button className="Font14sb text-BrandColor-green01 py-2 px-[1.625rem] border border-BrandColor-green01 rounded">
              식단 직접 입력하기
            </button>
          </div>
        </article>
      </section>
    </>
  );
}
