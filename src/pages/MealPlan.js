import { useState } from "react";
import { Link } from "react-router-dom";
import MealPlanItem from "./MealPlan/MealPlanItem";
import MealPlanItemUserCustom from "./MealPlan/MealPlanItemUserCustom";
import TabBar from "../components/TabBar";
import Calendar from "./MealPlan/Calendar/Calendar";
import WeeklyCalendar from "./MealPlan/Calendar/WeeklyCalendar";

export default function MealPlan() {
  const displayCalendar = true;

  return (
    <>
      <div className="w-full pb-[52px]">
        {displayCalendar ? (
          <div>
            <WeeklyCalendar />
            <div>
              <section className="px-4 mt-2">
                <article>
                  <div className="py-4">
                    <p className="Font16sb">4월 6일 목요일 / D+252</p>
                  </div>
                  <div className="Font12 flex px-2.5 leading-8 bg-GreyScale-grey05 rounded">
                    <span className="mr-1.5">💡</span>
                    <p>중기는 6배죽을 기준으로 합니다.</p>
                  </div>
                </article>
              </section>
              <section className="px-4 mt-6">
                <article>
                  <p className="Font16sb">식단</p>
                  <div className="text-center Font14">
                    <p>계획된 식단이 없습니다.</p>
                    <div className="flex justify-center">
                      <p className="flex justify-center">아래의</p>
                      <div className="mx-1 rounded-full shadow-lg bg-BrandColor-green03">
                        <img
                          src="/images/svgIcons/plusButton2.svg"
                          alt="plusButton2"
                        />
                      </div>
                      <p>버튼을 눌러</p>
                    </div>
                    <p>마음에 드는 식단을 추가해 보세요.</p>
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <p className="Font16sb testMenu">식단</p>
                      <button className="Font12">편집</button>
                    </div>
                    <MealPlanItem />
                    <MealPlanItemUserCustom />
                    <MealPlanItem />
                    <MealPlanItem />
                    <MealPlanItem />
                    <MealPlanItem />
                    <MealPlanItem />
                    <MealPlanItem />
                    <MealPlanItem />
                    <MealPlanItem />
                    <MealPlanItem />
                  </div>
                </article>
              </section>
            </div>
          </div>
        ) : (
          <Calendar />
        )}
        <button className="fixed bottom-[5.75rem] right-4 z-50 drop-shadow-button">
          <div className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg bg-BrandColor-green03">
            <img src="/images/svgIcons/plusButton2.svg" alt="plusButton2" />
          </div>
        </button>
      </div>
      <TabBar />
    </>
  );
}
