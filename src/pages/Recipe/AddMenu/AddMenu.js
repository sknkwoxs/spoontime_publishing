import { Link } from "react-router-dom";

export default function AddMenu() {
  return (
    <>
      <section>
        <div>
          <Link to="/Recipe">
            <div className="absolute px-4 pt-8">
              <div className="py-4 my-auto h-14">
                <img src="/images/svgIcons/back.svg" alt="back" />
              </div>
            </div>
          </Link>
          <article className="border-b">
            <div className="h-[22.5rem]">
              <img
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                alt="RecipeAddMenuImg"
              />
            </div>
            <div className="flex flex-col w-full px-4 py-6 my-auto">
              <p className="mb-2 Font20sb">한우가지로메인죽</p>
              <div className="flex Font12 text-GreyScale-grey02">
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
            <div className="flex justify-between px-4 py-6">
              <div className="w-8 h-8 bg-[#FCD6DD] rounded-full"></div>
              <div className="w-8 h-8 bg-[#FEDAC9] rounded-full"></div>
              <div className="w-8 h-8 bg-[#F9EEAB] rounded-full"></div>
              <div className="w-8 h-8 bg-[#CCF3D4] rounded-full"></div>
              <div className="w-8 h-8 bg-[#CCE2FE] rounded-full"></div>
              <div className="w-8 h-8 bg-[#E3D0FB] rounded-full"></div>
              <div className="w-8 h-8 bg-[#D9DADC] rounded-full"></div>
            </div>
          </article>
          <article className="border-b">
            <div className="flex p-4">
              <img src="/images/svgIcons/diet.svg" alt="diet" />
              <p className="px-2 Font14sb">7월 13일 - 7월 14일</p>
              {/* <img src="/images/svgIcons/down2.svg" alt="down2" /> */}
            </div>
          </article>
          <article className="fixed bottom-0 w-full pb-8 text-center Font16sb bg-BrandColor-green01 text-GreyScale-White">
            <p className="py-6">식단 추가하기</p>
          </article>
        </div>
      </section>
    </>
  );
}
