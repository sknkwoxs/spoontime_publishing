export default function Alert() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"></div>
      <section className="z-[1000] fixed bottom-0 left-0 right-0 px-4 bg-[#FAF7ED] rounded-t-2xl">
        <div>
          <div className="pt-10 pb-8 Font24sb">
            <div className="flex">
              <p className="text-BrandColor-green02">꼬물이</p>
              <p>를 위한</p>
            </div>
            <p>추천 식단이 도착했어요</p>
          </div>
          <div className="pb-6">
            <p className="Font14">중기 · 후기</p>
            <p className="Font16sb">8월 1일 (월) ~ 8월 14일 (일)</p>
          </div>
          <div className="pb-4 Font16sb">
            <button className="w-full py-3 rounded-lg text-GreyScale-White bg-BrandColor-green01">
              추천 식단 확인
            </button>
          </div>
        </div>
        <div className="flex justify-between h-10 Font12 bg-GreyScale-White">
          <button>다시보지 않기</button>
          <button>닫기</button>
        </div>
      </section>
    </>
  );
}
