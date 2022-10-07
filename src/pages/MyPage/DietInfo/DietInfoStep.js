import { Link } from "react-router-dom";
import DietInfoStepRecommendationChange from "./DietInfoStepRecommendationChange";

export default function DietInfoStep() {
  return (
    <>
      <section>
        <div className="flex p-4">
          <div className="absolute">
            <Link to="/MyPage">
              <img
                src="/images/svgIcons/directionsLeft.svg"
                alt="directionsLeft"
              />
            </Link>
          </div>
          <div className="flex justify-center w-full">
            <p className="Font16sb">이유식 단계</p>
          </div>
        </div>

        <article className="px-4 py-6">
          <div className="flex justify-between mb-4">
            <div className="flex items-center gap-2">
              <div>
                <img src="/images/dietInfoBaby.svg" alt="dietInfoBaby" />
              </div>
              <div>
                <p className="Font14sb">출생(예정)일</p>
                <p className="Font12">2021.8.19 (D+241)</p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="px-2 py-1 Font12 text-GreyScale-grey02 bg-[#F2D186] rounded">
                초기 2
              </p>
            </div>
          </div>
          <div className="p-2 mb-6 rounded bg-GreyScale-grey05">
            <p className="Font12">
              이유식 권고 일정에 따라 변경할 수 있는 이유식 단계가 제한됩니다.
            </p>
          </div>

          <div className="mb-8">
            {/* components */}
            <button className="w-full  grid grid-cols-[max(56px)_1fr] mb-2 gap-4 items-center border border-GreyScale-grey01 rounded p-2">
              <div className="h-0 pb-[100%] overflow-hidden relative rounded z-0 max-w-[3.5rem]">
                <img
                  className="absolute max-w-[3.5rem] object-cover w-full h-full rounded"
                  src="/images/RecipeDetails4.jpg"
                  alt="RecipeDetails4"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <p>초기 1</p>
                  <p className="px-2 Font11 text-[0.625rem] bg-BrandColor-green04 rounded">
                    권장 150~190일
                  </p>
                </div>
                <div>
                  <p className="text-left Font12 text-GreyScale-grey02">
                    10~ 20배죽의 주르륵 흘러내리는 묽은 수프 농도
                  </p>
                </div>
              </div>
            </button>

            <button className="w-full grid grid-cols-[max(56px)_1fr] mb-2 gap-4 items-center border border-GreyScale-grey04 rounded p-2">
              <div className="h-0 pb-[100%] overflow-hidden relative rounded z-0 max-w-[3.5rem]">
                <p className="absolute px-1 Font11 text-[0.625rem] bg-BrandColor-green04 rounded z-[100] top-0.5 left-0.5">
                  추천
                </p>
                <img
                  className="absolute max-w-[3.5rem] object-cover w-full h-full rounded"
                  src="/images/RecipeDetails4.jpg"
                  alt="RecipeDetails4"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <p>초기 2</p>
                  <p className="px-2 Font11 text-[0.625rem] bg-BrandColor-green04 rounded">
                    권장 191~209일
                  </p>
                </div>
                <div>
                  <p className="text-left Font12 text-GreyScale-grey02">
                    8배죽의 뚝뚝 떨어지는 묽은 마요네즈 농도
                  </p>
                </div>
              </div>
            </button>
            <button className="w-full grid grid-cols-[max(56px)_1fr] mb-2 gap-4 items-center border border-GreyScale-grey04 rounded p-2">
              <div className="h-0 pb-[100%] overflow-hidden relative rounded z-0 max-w-[3.5rem]">
                <p className="absolute px-1 Font11 text-[0.625rem] bg-BrandColor-green04 rounded z-[100] top-0.5 left-0.5">
                  추천
                </p>
                <img
                  className="absolute max-w-[3.5rem] object-cover w-full h-full rounded"
                  src="/images/RecipeDetails4.jpg"
                  alt="RecipeDetails4"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <p>중기</p>
                  <p className="px-2 Font11 text-[0.625rem] bg-BrandColor-green04 rounded">
                    권장 210~269일
                  </p>
                </div>
                <div>
                  <p className="text-left Font12 text-GreyScale-grey02">
                    10~ 20배죽의 주르륵 흘러내리는 묽은 수프 농도
                  </p>
                </div>
              </div>
            </button>
            <button className="w-full grid grid-cols-[max(56px)_1fr] mb-2 gap-4 items-center border border-GreyScale-grey04 rounded p-2">
              <div className="h-0 pb-[100%] overflow-hidden relative rounded z-0 max-w-[3.5rem]">
                <img
                  className="absolute max-w-[3.5rem] object-cover w-full h-full rounded"
                  src="/images/RecipeDetails4.jpg"
                  alt="RecipeDetails4"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <p>후기</p>
                  <p className="px-2 Font11 text-[0.625rem] bg-BrandColor-green04 rounded">
                    권장 270~364일
                  </p>
                </div>
                <div>
                  <p className="text-left Font12 text-GreyScale-grey02">
                    4배죽의 밥알의 형태가 있으며
                    <br /> 잇몸으로 으깰 수 있는 묽기
                  </p>
                </div>
              </div>
            </button>
            <button className="w-full grid grid-cols-[max(56px)_1fr] mb-2 gap-4 items-center border border-GreyScale-grey04 rounded p-2">
              <div className="h-0 pb-[100%] overflow-hidden relative rounded z-0 max-w-[3.5rem]">
                <img
                  className="absolute max-w-[3.5rem] object-cover w-full h-full rounded"
                  src="/images/RecipeDetails4.jpg"
                  alt="RecipeDetails4"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <p>완료기</p>
                  <p className="px-2 Font11 text-[0.625rem] bg-BrandColor-green04 rounded">
                    2배죽
                  </p>
                </div>
                <div>
                  <p className="text-left Font12 text-GreyScale-grey02">
                    물기가 많은 진밥
                  </p>
                </div>
              </div>
            </button>
          </div>

          <div className="flex justify-center">
            <a className="underline text-BrandColor-green01 Font12" href="#!">
              아직 이유식을 시작하지 않았어요.
            </a>
          </div>
        </article>
      </section>
      <section className="fixed bottom-0 w-full">
        <div className="w-full">
          {/* <button className="w-full py-3 pb-11 text-GreyScale-White bg-BrandColor-green01">
            이유식 단계 수정하기
          </button> */}
          <button className="w-full py-3 pb-11 text-GreyScale-White bg-GreyScale-grey04">
            이유식 단계 수정하기
          </button>
        </div>
      </section>
      <DietInfoStepRecommendationChange />
    </>
  );
}
