import { Link } from "react-router-dom";

export default function Library() {
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
            <p className="Font16sb">사진 선택</p>
          </div>
        </div>
        <article>
          <div className="object-cover w-full">
            <img
              className="object-cover w-full max-h-[360px]"
              src="/images/RecipeDetails1.jpg"
              alt="RecipeDetails1"
            />
          </div>
        </article>
        <article className="mb-[4.5rem]">
          <div className="flex items-center justify-between p-4">
            <button className="flex items-center">
              <p className="Font16sb">최근항목</p>
              <img src="/images/svgIcons/down2.svg" alt="down2" />
            </button>
            <button>
              <img src="/images/svgIcons/cameraOn.svg" alt="cameraOn" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-[3px]">
            <div className="object-cover w-full">
              <img
                className="object-cover w-full max-h-[7.375rem]"
                src="/images/RecipeDetails1.jpg"
                alt="RecipeDetails1"
              />
            </div>
            <div className="object-cover w-full">
              <img
                className="object-cover w-full max-h-[7.375rem]"
                src="/images/RecipeDetails1.jpg"
                alt="RecipeDetails1"
              />
            </div>
            <div className="object-cover w-full">
              <img
                className="object-cover w-full max-h-[7.375rem]"
                src="/images/RecipeDetails1.jpg"
                alt="RecipeDetails1"
              />
            </div>
            <div className="object-cover w-full">
              <img
                className="object-cover w-full max-h-[7.375rem]"
                src="/images/RecipeDetails1.jpg"
                alt="RecipeDetails1"
              />
            </div>
            <div className="object-cover w-full">
              <img
                className="object-cover w-full max-h-[7.375rem]"
                src="/images/RecipeDetails1.jpg"
                alt="RecipeDetails1"
              />
            </div>
            <div className="object-cover w-full">
              <img
                className="object-cover w-full max-h-[7.375rem]"
                src="/images/RecipeDetails1.jpg"
                alt="RecipeDetails1"
              />
            </div>
            <div className="object-cover w-full">
              <img
                className="object-cover w-full max-h-[7.375rem]"
                src="/images/RecipeDetails1.jpg"
                alt="RecipeDetails1"
              />
            </div>
          </div>
        </article>
      </section>
      <div>
        <button className="fixed bottom-0 left-0 right-0 w-full py-3 bg-BrandColor-green01 text-GreyScale-White Font16sb">
          사진 선택
        </button>
      </div>
    </>
  );
}
