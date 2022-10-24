export default function RecipeSort() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"></div>
      <section className="z-[1000] fixed bottom-0 left-0 right-0 px-4 bg-GreyScale-White rounded-t-2xl">
        <p className="pt-8 Font16sb">레시피 정렬</p>
        <div>
          <form className="flex flex-col overflow-auto recipeSortForm text-GreyScale-grey01">
            <li className="w-full mx-auto list-none">
              <input
                id="recipeSortOfRecommended"
                type="radio"
                name="recipeSort"
              />
              <label
                className="w-full cursor-pointer"
                htmlFor="recipeSortOfRecommended"
              >
                <p className="py-4 Font14">추천순</p>
              </label>
            </li>
            <li className="w-full mx-auto list-none">
              <input
                id="recipeSortOfPopularity"
                type="radio"
                name="recipeSort"
              />
              <label
                className="w-full cursor-pointer"
                htmlFor="recipeSortOfPopularity"
              >
                <p className="py-4 Font14">인기순</p>
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
