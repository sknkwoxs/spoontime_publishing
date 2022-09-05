import { Link } from "react-router-dom";
import MealPlanItem from "./MealPlan/MealPlanItem";
import TabBar from "../components/TabBar";
import DeleteMenu from "./MealPlan/MealPlan/DeleteMenu";

export default function MealPlan() {
  return (
    <>
      <div className="w-full h-screen pb-[76px]">
        <div>
          <section className="p-4">
            <article className="flex justify-between">
              <div className="flex Font16sb">
                <p className="mr-2">2022년 6월</p>
                <img src="/images/svgIcons/down2.svg" alt="down2" />
              </div>
              <div className="flex">
                <p className="px-2 py-1 mr-4 rounded Font12 text-GreyScale-grey02 bg-BrandColor-green04">
                  중기 (~4/16)
                </p>
                <Link to="/MealPlan/Settings">
                  <img src="/images/svgIcons/settings.svg" alt="settings" />
                </Link>
              </div>
            </article>
          </section>
          <section>
            <article className="flex justify-center items-center h-[8.5rem] bg-BrandColor-green04">
              달력
            </article>
          </section>
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
              {/* 식단이 없음 */}
              {/* <div className="text-center Font14">
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
              </div> */}
              {/* 식단이 있음 */}
              <div>
                <MealPlanItem />
              </div>
            </article>
            <div className="fixed bottom-[5.75rem] right-4 z-50">
              <div className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg bg-BrandColor-green03">
                <img src="/images/svgIcons/plusButton2.svg" alt="plusButton2" />
              </div>
            </div>
          </section>
        </div>
      </div>
      <TabBar />
      {/* <DeleteMenu /> */}
    </>
  );
}
