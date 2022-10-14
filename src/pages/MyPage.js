import { Link } from "react-router-dom";
import TabBar from "../components/TabBar";
import AddaMeal from "./MyPage/AddaMeal";
import BabyList from "./MyPage/BabyList";

export default function MyPage() {
  return (
    <>
      <div className="w-full min-h-screen pb-[76px]">
        <div>
          <section className="p-4">
            <article className="flex justify-between">
              <button className="flex items-center">
                <p className="pr-1 Font16sb">꼬물이</p>
                <img src="/images/svgIcons/down2.svg" alt="down2" />
              </button>
              <Link to="/MyPage/Profile">
                <img src="/images/svgIcons/settings.svg" alt="settings" />
              </Link>
            </article>
          </section>
          <section className="px-4 mb-6">
            <article className="flex items-center mb-4">
              <div className="mr-2">
                <img src="/images/RecipeBabyImg.svg" alt="RecipeBabyImg" />
              </div>
              <div className="">
                <div className="flex">
                  <p className="mr-2 leading-6 Font18sb text-BrandColor-green02">
                    꼬물이
                  </p>
                </div>
                <div>
                  <p className="Font12">2021.8.19 (D+241)</p>
                </div>
              </div>
            </article>
          </section>
          <section className="px-4">
            <article className="flex gap-2">
              <div className="w-full py-2 text-center border rounded Font14sb border-BrandColor-green01">
                중기 이유식
              </div>
              <div className="w-full py-2 text-center border rounded Font14sb border-BrandColor-green01">
                가족 공유 1명
              </div>
            </article>
          </section>
          {/* data */}
          {/* <section className="mt-6">
            <article className="grid grid-cols-3 gap-0.5">
              <div className="h-0 pb-[100%] overflow-hidden relative">
                <img
                  className="absolute object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                  alt="MyPageRecipe"
                />
              </div>
              <div className="h-0 pb-[100%] overflow-hidden relative">
                <img
                  className="absolute object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                  alt="MyPageRecipe"
                />
              </div>
              <div className="h-0 pb-[100%] overflow-hidden relative">
                <img
                  className="absolute object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                  alt="MyPageRecipe"
                />
              </div>
              <div className="h-0 pb-[100%] overflow-hidden relative">
                <img
                  className="absolute object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                  alt="MyPageRecipe"
                />
              </div>
              <div className="h-0 pb-[100%] overflow-hidden relative">
                <img
                  className="absolute object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                  alt="MyPageRecipe"
                />
              </div>
              <div className="h-0 pb-[100%] overflow-hidden relative">
                <img
                  className="absolute object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                  alt="MyPageRecipe"
                />
              </div>
              <div className="h-0 pb-[100%] overflow-hidden relative">
                <img
                  className="absolute object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                  alt="MyPageRecipe"
                />
              </div>
              <div className="h-0 pb-[100%] overflow-hidden relative">
                <img
                  className="absolute object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                  alt="MyPageRecipe"
                />
              </div>
              <div className="h-0 pb-[100%] overflow-hidden relative">
                <img
                  className="absolute object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                  alt="MyPageRecipe"
                />
              </div>
              <div className="h-0 pb-[100%] overflow-hidden relative">
                <img
                  className="absolute object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                  alt="MyPageRecipe"
                />
              </div>
              <div className="h-0 pb-[100%] overflow-hidden relative">
                <img
                  className="absolute object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                  alt="MyPageRecipe"
                />
              </div>
              <div className="h-0 pb-[100%] overflow-hidden relative">
                <img
                  className="absolute object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                  alt="MyPageRecipe"
                />
              </div>
              <div className="h-0 pb-[100%] overflow-hidden relative">
                <img
                  className="absolute object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                  alt="MyPageRecipe"
                />
              </div>
              <div className="h-0 pb-[100%] overflow-hidden relative">
                <img
                  className="absolute object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                  alt="MyPageRecipe"
                />
              </div>
              <div className="h-0 pb-[100%] overflow-hidden relative">
                <img
                  className="absolute object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                  alt="MyPageRecipe"
                />
              </div>
              <div className="h-0 pb-[100%] overflow-hidden relative">
                <img
                  className="absolute object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                  alt="MyPageRecipe"
                />
              </div>
            </article>
          </section> */}
          {/* No data */}
          <section className="absolute text-center left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div className="w-full">
              <p className="mb-2 Font16sb whitespace-nowrap">
                냠냠이의 첫 식단 기록을 남겨보세요.
              </p>
              <p className="mb-4 Font14">
                식단 메뉴에서 식단을 추가하면,
                <br />
                식단 기록을 남길 수 있어요.
              </p>
              <button className="border rounded border-BrandColor-green01 py-2 px-[1.625rem] Font14sb">
                최근 식단 기록하기
              </button>
            </div>
          </section>
        </div>
      </div>
      <TabBar />
      {/* <BabyList /> */}
      {/* <AddaMeal /> */}
    </>
  );
}
