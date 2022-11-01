import { useState } from "react";
import { Link } from "react-router-dom";

export default function TabBar() {
  return (
    <>
      <section className="fixed bottom-0 left-0 right-0 w-full bg-GreyScale-White">
        <ul className="flex py-2 justify-around font-semibold text-[0.625rem] leading-3">
          <li>
            <Link to="/Recipe">
              <div className="flex flex-col gap-1 mx-auto text-center">
                <div className="mx-auto">
                  <img src="/images/svgIcons/recipe.svg" alt="recipe" />
                </div>
                <p className="">레시피</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/MealPlan">
              <div className="flex flex-col gap-1 mx-auto text-center">
                <div className="mx-auto">
                  <img src="/images/svgIcons/diet.svg" alt="diet" />
                </div>
                <p>식단</p>
                <div className="absolute right-0 top-1 left-6">
                  <span className="px-1 rounded-[25px] text-GreyScale-White bg-ContentsColor-heart font-Pretendard text-[10px] leading-3">
                    D-5
                  </span>
                </div>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/MyPage">
              <div className="flex flex-col items-center justify-center gap-1 mx-auto text-center">
                <div className="mx-auto max-w-[20px] max-h-[20px]">
                  <img src="/images/babyDefault.svg" alt="babyDefault" />
                </div>
                <p>꼬물이</p>
              </div>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
