import { Link } from "react-router-dom";
import DeleteMenu from "../MealPlan/DeleteMenu";

export default function FinalStep() {
  return (
    <>
      <section>
        <div>
          <div className="absolute px-4 pt-8">
            <div className="py-4 my-auto h-14">
              <img src="/images/svgIcons/back.svg" alt="back" />
            </div>
          </div>
          <article className="border-b">
            <div className="h-[22.5rem]">
              <img
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                alt="RecipeAddMenuImg"
              />
            </div>
            <div className="flex flex-col w-full px-4 py-6 my-auto">
              <div className="flex items-center justify-between mb-2">
                <p className="flex items-center Font20sb">한우가지로메인죽</p>
                <button className="px-4 py-1 border rounded border-GreyScale-grey01 Font12">
                  변경
                </button>
              </div>
              <div className="flex Font12 text-GreyScale-grey02">
                <div className="flex items-center gap-1 mr-2">
                  <img src="/images/svgIcons/baby.svg" alt="baby" />
                  <p>중기</p>
                </div>
                <div className="flex items-center gap-1 mr-2">
                  <img src="/images/svgicons/clock.svg" alt="clock" />
                  <p>30분</p>
                </div>
              </div>
            </div>
          </article>
          <article className="border-b">
            <div className="flex justify-between px-4 py-6">
              <div className="w-8 h-8 bg-[#FCD6DD] rounded-full"></div>
              <div className="w-8 h-8 bg-[#FEDAC9] rounded-full"></div>
              <div className="w-8 h-8 bg-[#F9EEAB] rounded-full"></div>
              <div className="w-8 h-8 bg-[#CCF3D4] rounded-full"></div>
              <div className="w-8 h-8 bg-[#CCE2FE] rounded-full"></div>
              <div className="w-8 h-8 bg-[#E3D0FB] rounded-full"></div>
              <div className="w-8 h-8 bg-[#D9DADC] rounded-full"></div>
            </div>
          </article>
          <article className="mb-4 border-b">
            <button className="flex m-4">
              <img src="/images/svgIcons/diet.svg" alt="diet" />
              <p className="px-2 Font14sb">7월 13일</p>
              <img src="/images/svgIcons/down20x20.svg" alt="down20x20" />
            </button>
          </article>
          <article className="px-4">
            <button className="w-full py-2 border Font14sb">식단 삭제</button>
          </article>

          <div>
            <button className="fixed bottom-0 left-0 right-0 w-full py-3 bg-BrandColor-green01 text-GreyScale-White Font16sb">
              식단 추가하기
            </button>
            {/* <button className="fixed bottom-0 left-0 right-0 w-full py-3 bg-GreyScale-grey04 text-GreyScale-White Font16sb">
              식단 수정하기
            </button> */}
          </div>
        </div>
      </section>
      {/* <DeleteMenu /> */}
    </>
  );
}
