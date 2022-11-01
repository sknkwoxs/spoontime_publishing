export default function DietInfoStepRecommendationChange() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"></div>
      <section className="h-[216px] fixed top-[30%] bottom-0 left-0 right-0 p-4 bg-GreyScale-White rounded-lg mx-10 z-[1000] drop-shadow-popup">
        <p className="mb-2 Font16sb">이유식 단계를 변경할까요?</p>
        <p className="mb-4 Font14 text-GreyScale-grey02">
          새로운 단계로 변경할 경우, 다음의 기간에 입력된 식단은&nbsp;
          <span className="text-ContentsColor-heart">모두 삭제</span>됩니다.
        </p>
        <p className="mb-6 Font14sb">7월 14일 (금) ~ 8월 1일 (월)</p>
        <div className="flex gap-2 pb-4 Font14sb">
          <button className="w-full py-2 border rounded bg-GreyScale-grey05 border-GreyScale-grey04">
            취소
          </button>
          <button className="w-full py-2 rounded text-GreyScale-White bg-BrandColor-green01">
            단계 변경
          </button>
        </div>
      </section>
    </>
  );
}
