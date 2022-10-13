import { Link } from "react-router-dom";
import IngredientList from "./IngredientList";

export default function Name() {
  return (
    <>
      <section className="px-4">
        <div className="flex py-4 mb-6">
          <div className="absolute left-4">
            <Link to="/MealPlan">
              <img
                src="/images/svgIcons/directionsLeft.svg"
                alt="directionsLeft"
              />
            </Link>
          </div>
          <div className="flex justify-center w-full">
            <p className="Font16sb">식단 직접 입력</p>
          </div>
        </div>
        <article className="mb-6">
          <p className="mb-2 Font16sb">식단 이름은 무엇인가요?</p>
          <input
            className="w-full p-2 border rounded border-GreyScale-grey04 Font14"
            type="text"
          />
        </article>
        <article className="mb-2">
          <p className="mb-2 Font16sb">식재료를 입력해 주세요.</p>
          <input
            className="w-full p-2 border rounded border-GreyScale-grey04 Font14"
            type="text"
          />
        </article>
        <IngredientList />
        <article>
          <p className="mb-2 Font16sb">식단 사진이 있나요?</p>
          <p className="mb-6 Font12 text-GreyScale-grey02">
            없어도 괜찮아요. 스푼타임 기본 이미지로 대체합니다.
          </p>
          <button className="flex items-center justify-center w-full gap-1 py-2 border rounded border-GreyScale-grey04">
            <img src="/images/svgIcons/camera.svg" alt="camera" />
            <p className="Font14sb">식단 사진 올리기</p>
          </button>
        </article>
      </section>
      <div>
        <button className="fixed bottom-0 left-0 right-0 w-full py-3 bg-BrandColor-green01 text-GreyScale-White Font16sb">
          식단 입력 완료
        </button>
        <button className="fixed bottom-0 left-0 right-0 w-full py-3 bg-GreyScale-grey04 text-GreyScale-White Font16sb">
          식단 입력 완료
        </button>
      </div>
    </>
  );
}
