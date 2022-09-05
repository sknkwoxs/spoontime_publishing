import { Link } from "react-router-dom";
import IngredientsItem from "../IngredientsItem";
import IngredientGuideFilter from "./IngredientGuideFilter";
import IngredientGuideSort from "./IngredientGuideSort";

export default function IngredientGuide() {
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
          <p>식재료 가이드</p>
          <Link to="/">
            <img src="/images/svgIcons/search.svg" alt="search" />
          </Link>
        </div>
        <div>
          <div className="flex w-full py-2 border-b Font14sb text-GreyScale-grey03">
            {/* tab */}
            <div className="flex justify-center w-full text-center">전체</div>
            <div className="flex justify-center w-full text-center">곡류</div>
            <div className="flex justify-center w-full text-center">야채류</div>
            <div className="flex justify-center w-full text-center">
              단백질류
            </div>
            <div className="flex justify-center w-full text-center">우유류</div>
            <div className="flex justify-center w-full text-center">과일류</div>
          </div>
          <div className="flex gap-2 py-3 Font12">
            <button className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1">
              추천순
              <img src="/images/svgIcons/down.svg" alt="down" />
            </button>
            <button className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1">
              섭취 가능 시기 <img src="/images/svgIcons/down.svg" alt="down" />
            </button>
            <button className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1">
              알레르기 위험 <img src="/images/svgIcons/down.svg" alt="down" />
            </button>
          </div>
          <IngredientsItem />
          <IngredientsItem />
          <IngredientsItem />
          <IngredientsItem />
          <IngredientsItem />
        </div>
      </article>
      {/* <IngredientGuideFilter /> */}
      {/* <IngredientGuideSort /> */}
    </>
  );
}
