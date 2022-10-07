import { Link } from "react-router-dom";

export default function DietInfoTried() {
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
            <p className="Font16sb">먹어본 식재료</p>
          </div>
        </div>

        <article className="px-4 py-6"></article>
      </section>
      <section className="fixed bottom-0 w-full">
        <div className="w-full">
          <button className="w-full py-3 pb-11 text-GreyScale-White bg-BrandColor-green01">
            먹어본 식재료 수정하기
          </button>
          {/* <button className="w-full py-3 pb-11 text-GreyScale-White bg-GreyScale-grey04">
          먹어본 식재료 수정하기
            </button> */}
        </div>
      </section>
    </>
  );
}
