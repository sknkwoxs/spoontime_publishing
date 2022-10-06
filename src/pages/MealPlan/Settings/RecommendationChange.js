export default function RecommendationChange() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"></div>
      <section className="h-[216px] fixed top-[30%] bottom-0 left-0 right-0 p-4 bg-GreyScale-White rounded-lg mx-10 z-[1000]">
        <p className="mb-2 Font16sb">새로운 식단을 추천해 드릴까요?</p>
        <div className="mb-4 Font14 text-GreyScale-grey02">
          <span className="">
            새로운 식단을 추천받을 경우, 다음의 기간에 입력된 식단은&nbsp;
          </span>
          <span className="text-ContentsColor-heart">모두 삭제</span>
          <span>됩니다.</span>
        </div>
        <p className="mb-6 Font14sb">7월 14일 (금) ~ 8월 1일 (월)</p>
        <div className="flex gap-2 pb-4 Font14sb">
          <button className="w-full py-2 rounded bg-GreyScale-grey05">
            취소
          </button>
          <button className="w-full py-2 rounded text-GreyScale-White bg-BrandColor-green01">
            새로운 식단 추천
          </button>
        </div>
      </section>
    </>
  );
}
