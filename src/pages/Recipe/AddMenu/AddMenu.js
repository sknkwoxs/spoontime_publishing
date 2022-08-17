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
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.8555 4.80779C11.8034 4.80779 11.7602 4.83014 11.7094 4.83573C11.2001 2.6385 9.29851 1 7.01461 1C4.73071 1 2.82534 2.64129 2.31724 4.84132C2.25881 4.83294 2.20546 4.8064 2.14449 4.8064C1.51318 4.8064 1 5.31205 1 5.93505C1 6.55804 1.51318 7.0637 2.14449 7.0637C2.19276 7.0637 2.23468 7.04135 2.28168 7.03576C2.74405 9.30004 4.68625 11 7.01461 11C9.34297 11 11.2814 9.30284 11.7463 7.04274C11.7844 7.04693 11.8161 7.06509 11.8555 7.06509C12.4868 7.06509 13 6.55944 13 5.93644C13 5.31345 12.4881 4.80779 11.8555 4.80779Z"
                      fill="white"
                      stroke="#555555"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 4.50077C6 4.77743 5.77554 5 5.5 5C5.22446 5 5 4.77743 5 4.50077C5 4.22411 5.22446 4 5.5 4C5.77554 4 6 4.22257 6 4.50077Z"
                      fill="#555555"
                    />
                    <path
                      d="M9 4.50077C9 4.77743 8.77554 5 8.5 5C8.22446 5 8 4.77743 8 4.50077C8 4.22411 8.22446 4 8.5 4C8.77554 4 9 4.22257 9 4.50077Z"
                      fill="#555555"
                    />
                    <path
                      d="M9 7C7.89504 8.33333 6.10496 8.33333 5 7"
                      stroke="#555555"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p>중기</p>
                </div>
                <div className="flex items-center gap-1 mr-2">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                      stroke="#555555"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 3V6L8 7"
                      stroke="#555555"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
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
