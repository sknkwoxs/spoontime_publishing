import { Link } from "react-router-dom";

export default function Bookmark() {
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
          <div className="flex w-full py-2 border-b Font14sb text-GreyScale-grey03">
            {/* tab */}
            <div className="flex justify-center w-full text-center">레시피</div>
            <div className="flex justify-center w-full text-center">식재료</div>
          </div>
          <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center mx-4">
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
              {/* <button className="flex justify-center px-8 py-2 mx-auto mt-5 border rounded Font14sb border-BrandColor-green01">
                식재료 보러 가기
              </button> */}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
