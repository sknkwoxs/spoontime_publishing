export default function SearchResultRecipeFilter() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"></div>
      <section className="z-[1000] fixed bottom-0 left-0 right-0 px-4 bg-GreyScale-White rounded-t-2xl">
        <p className="mt-8 mb-2 Font16sb">검색 정렬</p>
        <div className="flex flex-col Font14">
          <button className="flex items-center justify-between py-4 text-left border-b">
            추천순
            <img src="/images/svgIcons/check.svg" alt="check" />
          </button>
          <button className="flex items-center justify-between py-4 text-left border-b">
            적용 개월 수 순
          </button>
          <button className="flex items-center justify-between py-4 text-left border-b">
            조리 시간순
          </button>
        </div>
      </section>
    </>
  );
}
