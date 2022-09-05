export default function IngredientGuideSort() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"></div>
      <section className="z-[1000] fixed bottom-0 left-0 right-0 px-4 bg-GreyScale-White rounded-t-2xl">
        <p className="mt-8 mb-2 Font16sb">검색 정렬</p>
        <div className="flex flex-col">
          <button className="flex justify-between py-4 text-left border-b">
            추천순
            <img src="/images/svgIcons/check.svg" alt="check" />
          </button>
          <button className="flex justify-between py-4 text-left border-b">
            이름순
          </button>
          <button className="flex justify-between py-4 text-left border-b">
            섭취 개월 수 순
          </button>
        </div>
      </section>
    </>
  );
}