export default function RecommendationOff() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"></div>
      <section className="h-[176px] fixed top-[30%] bottom-0 left-0 right-0 p-4 bg-GreyScale-White rounded-lg mx-10 z-[1000]">
        <p className="mb-2 Font16sb">식단 추천 기능을 끌까요?</p>
        <p className="mb-6 Font14 text-GreyScale-grey02">
          기능을 끄더라도 지금까지 추천받은 식단은 모두 유지됩니다.
        </p>
        <div className="flex gap-2 pb-4 Font14sb">
          <button className="w-full py-2 rounded bg-GreyScale-grey05 border-GreyScale-grey04">
            취소
          </button>
          <button className="w-full py-2 rounded text-GreyScale-White bg-BrandColor-green01">
            추천 끄기
          </button>
        </div>
      </section>
    </>
  );
}
