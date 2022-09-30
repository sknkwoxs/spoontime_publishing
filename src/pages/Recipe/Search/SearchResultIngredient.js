import RecipeItem from "../RecipeItem";
import SearchResultIngredientFilter from "./SearchResultIngredientFilter";
import IngredientsItem from "../IngredientGuide/IngredientsItem";

export default function SearchResultIngredient() {
  return (
    <>
      <div className="px-4">
        <div className="flex justify-around mb-3 border-b Font14sb">
          <div className="w-full text-GreyScale-grey03">
            <button className="w-full py-2">레시피</button>
          </div>
          <div className="w-full border-b-2 border-GreyScale-grey01">
            <button className="w-full py-2">식재료</button>
          </div>
        </div>
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
        {/* Result / Recipe */}
        <div>
          <div className="flex justify-between mb-2">
            <div className="Font14">
              총 <span className="Font14sb">19</span>개
            </div>
            <div>
              {/* option width 값 수정 필요 */}
              <select className="flex items-center pl-2 py-1 border border-[#B7B7B7] rounded-[1.563rem] appearance-none bg-down bg-no-repeat bg-[center_right_0.5rem] Font12">
                <option value="알레르기">추천순</option>
                <option value="인기순">인기순</option>
                <option value="조리 시간순">조리 시간순</option>
              </select>
            </div>
          </div>
          <div>
            <IngredientsItem />
          </div>
          {/* <SearchResultIngredientFilter /> */}
        </div>
      </div>
    </>
  );
}
