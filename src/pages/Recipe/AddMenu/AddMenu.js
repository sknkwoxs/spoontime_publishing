import { Link } from "react-router-dom";

export default function AddMenu() {
  return (
    <>
      <div>
        <div>
          <Link to="/Recipe">
            <div className="absolute px-4 pt-8">
              <div className="h-14 my-auto py-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 12H5"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 19L5 12L12 5"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Link>
          <article className="border-b">
            <div className="h-[22.5rem]">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                alt="RecipeAddMenuImg"
              />
            </div>
            <div className="w-full flex flex-col my-auto px-4 py-6">
              <p className="Font20sb mb-2">한우가지로메인죽</p>
              <div className="Font12 flex text-GreyScale-grey02">
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
            <div className="flex px-4 justify-between py-6">
              <div className="w-8 h-8 bg-red-300 rounded-full"></div>
              <div className="w-8 h-8 bg-orange-300 rounded-full"></div>
              <div className="w-8 h-8 bg-yellow-300 rounded-full"></div>
              <div className="w-8 h-8 bg-green-300 rounded-full"></div>
              <div className="w-8 h-8 bg-blue-300 rounded-full"></div>
              <div className="w-8 h-8 bg-purple-300 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </article>
          <article className="border-b">
            <div className="px-4">기간 선택</div>
          </article>
          <article className="Font16sb w-full fixed bottom-0 pb-8 text-center bg-BrandColor-green01 text-GreyScale-White">
            <p className="py-6">식단 추가하기</p>
          </article>
        </div>
      </div>
    </>
  );
}
