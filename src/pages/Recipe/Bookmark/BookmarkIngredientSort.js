import { useEffect } from "react";

export default function BookmarkIngredientSort({ closeIngredientSortModal }) {
  // 외부 화면 스크롤 방지
  useEffect(() => {
    document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"
        onClick={closeIngredientSortModal}
      ></div>
      <section className="z-[1000] fixed bottom-0 left-0 right-0 px-4 bg-GreyScale-White rounded-t-2xl">
        <p className="pt-8 Font16sb">검색 정렬</p>
        <div>
          <form className="flex flex-col overflow-auto recipeSortForm text-GreyScale-grey01">
            <li className="w-full mx-auto list-none">
              <input
                id="recipeSortOfLatest"
                type="radio"
                name="recipeSort"
                defaultChecked
              />
              <label
                className="w-full cursor-pointer"
                htmlFor="recipeSortOfLatest"
              >
                <p className="py-4 Font14">최근 추가한 순</p>
              </label>
            </li>
            <li className="w-full mx-auto list-none">
              <input
                id="recipeSortOfName"
                type="radio"
                name="recipeSort"
                defaultChecked
              />
              <label
                className="w-full cursor-pointer"
                htmlFor="recipeSortOfName"
              >
                <p className="py-4 Font14">이름순</p>
              </label>
            </li>
            <li className="w-full mx-auto list-none">
              <input
                id="recipeSortOfMonth"
                type="radio"
                name="recipeSort"
                defaultChecked
              />
              <label
                className="w-full cursor-pointer"
                htmlFor="recipeSortOfMonth"
              >
                <p className="py-4 Font14">섭취 개월 수 순</p>
              </label>
            </li>
            <li className="w-full mx-auto list-none">
              <input id="recipeSortOfTime" type="radio" name="recipeSort" />
              <label
                className="w-full cursor-pointer"
                htmlFor="recipeSortOfTime"
              >
                <p className="py-4 Font14">조리 시간순</p>
              </label>
            </li>
          </form>
        </div>
      </section>
    </>
  );
}
