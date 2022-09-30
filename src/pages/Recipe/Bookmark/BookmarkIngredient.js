import { Link } from "react-router-dom";
import IngredientsItem from "../IngredientGuide/IngredientsItem";
import BookmarkIngredientFilter from "./BookmarkIngredientFilter";

export default function BookmarkIngredient() {
  return (
    <>
      <article className="h-full px-4">
        <div className="flex py-4">
          <div className="absolute">
            <Link to="/MealPlan">
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
        <div className="h-full">
          <div className="flex justify-around mb-3 border-b Font14sb">
            <div className="w-full text-GreyScale-grey03">
              <button className="w-full py-2">레시피</button>
            </div>
            <div className="w-full border-b-2 border-GreyScale-grey01">
              <button className="w-full py-2">식재료</button>
            </div>
          </div>
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
                식재료 보러 가기
              </button>
            </div>
          </div> */}
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
            {/* <BookmarkIngredientFilter /> */}
          </div>
        </div>
      </article>
    </>
  );
}
