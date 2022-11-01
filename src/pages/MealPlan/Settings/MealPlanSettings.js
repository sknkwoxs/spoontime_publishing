import { Link } from "react-router-dom";
import RecommendationChange from "./RecommendationChange";
import RecommendationOff from "./RecommendationOff";

export default function MealPlanSettings() {
  return (
    <>
      <article className="px-4">
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
            <p className="Font16sb">식단 관리</p>
          </div>
        </div>
        <div>
          <div className="py-6 border-b">
            <div className="flex justify-between mb-6">
              <p className="Font16sb">식단 추천</p>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
            <p className="Font12 text-GreyScale-grey02">
              아기의 정보에 맞춰 균형 잡힌 식단을 추천합니다.
              <br /> 이유식 권고 일정에 따라 초기에서 후기 단계의 아기를 위해
              <br />
              제공됩니다.
            </p>
          </div>
          <div className="py-6 border-b">
            <div className="flex justify-between mb-6">
              <p className="Font16sb">새로운 식단 추천</p>
              <button>
                <img src="/images/svgIcons/rotation.svg" alt="rotation" />
              </button>
            </div>
            <p className="Font12 text-GreyScale-grey02">
              7월 14일 (수) ~ 7월 31일 (화)
            </p>
          </div>
          <div className="py-6 border-b">
            <p className="mb-6 Font16sb">아기 식이 정보</p>
            <div>
              <div className="flex items-center justify-between mb-4 whitespace-nowrap">
                <p className="flex items-center Font14sb">이유식 단계</p>
                <button className="flex items-center">
                  <p className="flex items-center mr-2 Font12 text-GreyScale-grey02">
                    초기 2
                  </p>
                  <img
                    src="/images/svgIcons/directionsRight.svg"
                    alt="directionsRight"
                  />
                </button>
              </div>
              <div className="flex items-center justify-between mb-4 whitespace-nowrap">
                <p className="flex items-center Font14sb">알레르기</p>
                <button className="flex items-center">
                  <p className="flex items-center mr-2 Font12 text-GreyScale-grey02">
                    1개
                  </p>
                  <img
                    src="/images/svgIcons/directionsRight.svg"
                    alt="directionsRight"
                  />
                </button>
              </div>
              <div className="flex items-center justify-between mb-4 whitespace-nowrap">
                <p className="flex items-center Font14sb">먹어본 식재료</p>
                <button className="flex items-center">
                  <p className="flex items-center mr-2 Font12 text-GreyScale-grey02">
                    71 / 120개
                  </p>
                  <img
                    src="/images/svgIcons/directionsRight.svg"
                    alt="directionsRight"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-6">
          <div className="flex">
            <p className="Font16sb">월 달력 표시 정보</p>&nbsp;
            <p className="Font14">(식재료 이름 + 일러스트)</p>
          </div>
          <button>
            <img
              src="/images/svgIcons/directionsRight.svg"
              alt="directionsRight"
            />
          </button>
        </div>
      </article>
      {/* <RecommendationOff /> */}
      {/* <RecommendationChange /> */}
    </>
  );
}
