import { Link } from "react-router-dom";

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
            <p className="Font16sb">먹어본 식재료</p>
          </div>
        </div>

        <article className="px-4 py-3">
          <p className="mb-5 Font16sb">
            야채류<span className=" text-BrandColor-green03"> 4</span>
          </p>
          <div className="grid grid-cols-4 gap-6 mb-9">
            <button className="flex flex-col items-center justify-center gap-1 py-2 rounded Font12 min-h-[64px] allergyButtonOnClick">
              <img src="/images/ingredients/eggplant.svg" alt="eggplant" />
              <p>가지</p>
            </button>
            <button className="flex flex-col items-center justify-center gap-1 py-2 Font12 min-h-[64px]">
              <img src="/images/ingredients/crab.svg" alt="crab" />
              <p>게</p>
            </button>
          </div>
        </article>
        <article className="px-4 py-3">
          <p className="mb-5 Font16sb">
            단백질류<span className=" text-BrandColor-green03"> 2</span>
          </p>
          <div className="grid grid-cols-4 gap-6 mb-9">
            <button className="flex flex-col items-center justify-center gap-1 py-2 rounded Font12 min-h-[64px] allergyButtonOnClick">
              <img src="/images/ingredients/fish.svg" alt="fish" />
              <p>생선</p>
            </button>
            <button className="flex flex-col items-center justify-center gap-1 py-2 Font12 min-h-[64px]">
              <img src="/images/ingredients/crab.svg" alt="crab" />
              <p>게</p>
            </button>
          </div>
        </article>
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
