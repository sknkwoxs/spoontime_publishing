import { Link } from "react-router-dom";

export default function Album() {
  return (
    <>
      <section>
        <div className="flex py-4">
          <div className="flex justify-center w-full">
            <p className="Font16sb">사진첩 선택</p>
          </div>
          <div className="absolute right-4">
            <Link to="/MealPlan">
              <span className="Font12 text-BrandColor-green01">취소</span>
            </Link>
          </div>
        </div>
        <article className="px-4">
          <div className="flex gap-4 mb-2">
            <div className="max-w-[4rem] max-h-[4rem] object-cover">
              <img
                className="object-cover w-full h-full rounded-lg"
                src="/images/RecipeDetails1.jpg"
                alt="RecipeDetails1"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <p className="Font16 font-PretendardSemiBold">최근 항목</p>
              <p className="Font12sb font-PretendardSemiBold">7505</p>
            </div>
          </div>
          <div className="flex gap-4 mb-2">
            <div className="max-w-[4rem] max-h-[4rem] object-cover">
              <img
                className="object-cover w-full h-full rounded-lg"
                src="/images/RecipeDetails1.jpg"
                alt="RecipeDetails1"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <p className="Font16 font-PretendardSemiBold">즐겨찾는 항목</p>
              <p className="Font12sb">53</p>
            </div>
          </div>
          <div className="flex gap-4 mb-2">
            <div className="max-w-[4rem] max-h-[4rem] object-cover">
              <img
                className="object-cover w-full h-full rounded-lg"
                src="/images/RecipeDetails1.jpg"
                alt="RecipeDetails1"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <p className="Font16 font-PretendardSemiBold">스크린샷</p>
              <p className="Font12sb font-PretendardSemiBold">142</p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
