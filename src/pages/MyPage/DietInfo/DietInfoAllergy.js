import { Link } from "react-router-dom";
import DietInfoAllergyRecommendationChange from "./DietInfoAllergyRecommendationChange";

export default function DietInfoAllergy() {
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
            <p className="Font16sb">알레르기</p>
          </div>
        </div>

        <article className="px-4 py-3">
          <div className="grid grid-cols-4 gap-6 mb-9">
            <button className="flex flex-col items-center justify-center gap-1 py-2 rounded Font12 min-h-[64px] allergyButtonOnClick">
              <img src="/images/ingredients/egg.svg" alt="egg" />
              <p>달걀</p>
            </button>
            <button className="flex flex-col items-center justify-center gap-1 py-2 Font12 min-h-[64px]">
              <img src="/images/ingredients/crab.svg" alt="crab" />
              <p>게</p>
            </button>
          </div>
          <div>
            <button className="w-full py-3 border rounded Font12 text-BrandColor-green01 border-GreyScale-grey04">
              아직까지는 이상 반응이 없었어요
            </button>
          </div>
        </article>
      </section>
      <section className="fixed bottom-0 w-full">
        <div className="w-full">
          <button className="w-full py-3 pb-11 text-GreyScale-White bg-BrandColor-green01">
            알레르기 수정하기
          </button>
          {/* <button className="w-full py-3 pb-11 text-GreyScale-White bg-GreyScale-grey04">
            알레르기 수정하기
          </button> */}
        </div>
      </section>
      {/* <DietInfoAllergyRecommendationChange /> */}
    </>
  );
}
