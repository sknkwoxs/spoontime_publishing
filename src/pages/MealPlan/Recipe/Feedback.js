import { Link } from "react-router-dom";

export default function Feedback() {
  return (
    <>
      <section>
        <div className="flex py-4">
          <div className="absolute left-4">
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
        <article className="border-b">
          <p className="px-4 pt-6 pb-4 Font16sb">
            <span className="text-BrandColor-green02">꾸물이</span>가 잘
            먹었나요?
          </p>
          {/* delete photo */}
          <div className="h-[22.5rem] bg-GreyScale-grey05">
            <div className="object-cover w-full">
              <div className="relative">
                <img
                  className="object-cover w-full max-h-[22.5rem]"
                  src="/images/RecipeDetails1.jpg"
                  alt="RecipeDetails1"
                />
                <button className="absolute top-4 right-4 text-GreyScale-White">
                  <img
                    src="/images/svgIcons/suggestedCircleX.svg"
                    alt="suggestedCircleX"
                  />
                </button>
                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-GreyScale-White">
                  <img src="/images/watermarkLogo.svg" alt="watermarkLogo" />
                </div>
                <div className="absolute bottom-4 right-4 text-GreyScale-White">
                  <p className="Font14sb">
                    2022년 4월 5일, 첫 번째 식사
                    <br /> 소고기브로콜리당근죽 120g
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="flex items-center justify-center w-full h-full">
              <img src="/images/defaultImgLogo.svg" alt="defaultImgLogo" />
            </div> */}
          </div>
          <div className="py-4 mx-4">
            <button className="flex items-center justify-center w-full gap-1 py-2 border rounded border-GreyScale-grey04 Font14sb">
              <img src="/images/svgIcons/camera.svg" alt="camera" />
              직접 촬영한 식단 사진으로 변경
            </button>
          </div>
        </article>
        <article className="px-4 mt-6 border-b">
          <p className="mb-2 Font16sb">얼마나 먹었나요?</p>
          <div className="mb-4 Font14">
            <input
              className="px-3 py-2 mx-1 border rounded border-GreyScale-grey04 w-14"
              type="text"
            />
            g
          </div>
          <div className="w-full mb-6">
            <input
              className="rangeSlider"
              type="range"
              min="80"
              max="200"
              defaultValue="140"
            />
          </div>
        </article>
        <article className="px-4 my-6 mb-[80px]">
          <p className="mb-2 Font16sb">한 마디 남겨주세요.</p>
          <input
            className="w-full p-2 mb-2 border rounded border-GreyScale-grey04 Font14 placeholder:text-GreyScale-grey03"
            type="text"
            placeholder="우리 아기 오늘도 잘 먹어줘서 고마워!"
          />
        </article>
      </section>
      <div>
        <button className="fixed bottom-0 left-0 right-0 w-full py-3 bg-BrandColor-green01 text-GreyScale-White Font16sb">
          기록 남기기
        </button>
      </div>
    </>
  );
}
