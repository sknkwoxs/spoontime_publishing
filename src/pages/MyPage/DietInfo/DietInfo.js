import { Link } from "react-router-dom";

export default function DietInfo() {
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
            <p className="Font16sb">식이 정보</p>
          </div>
        </div>

        <article className="px-4 py-6 border-b">
          <div className="flex items-center justify-between">
            <p className="Font16sb">이유식 단계</p>
            <button className="flex items-center gap-4">
              <p className="Font12 text-GreyScale-grey02">초기 2</p>
              <img
                src="/images/svgIcons/directionsRight.svg"
                alt="directionsRight"
              />
            </button>
          </div>
        </article>
        <article className="px-4 py-6 border-b">
          <div className="flex items-center justify-between">
            <p className="Font16sb">알레르기</p>
            <button className="flex items-center gap-4">
              <p className="Font12 text-GreyScale-grey02">
                <span className="font-PretendardSemiBold">1</span>개
              </p>
              <img
                src="/images/svgIcons/directionsRight.svg"
                alt="directionsRight"
              />
            </button>
          </div>
        </article>
        <article className="px-4 py-6 border-b">
          <div className="flex items-center justify-between">
            <p className="Font16sb">먹어본 식재료</p>
            <button className="flex items-center gap-4">
              <p className="Font12 text-GreyScale-grey02">
                <span className="font-PretendardSemiBold">71</span> / 120개
              </p>
              <img
                src="/images/svgIcons/directionsRight.svg"
                alt="directionsRight"
              />
            </button>
          </div>
        </article>
      </section>
    </>
  );
}
