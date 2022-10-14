export default function Filter() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"></div>
      <section className="z-[1000] fixed bottom-0 left-0 right-0 px-4 bg-GreyScale-White rounded-t-2xl">
        <p className="pt-8 mb-2 Font16sb">
          <span className="text-BrandColor-green02">꼬물이</span> 맞춤정보
        </p>
        <div>
          <div className="flex gap-5 border-b Font14sb text-GreyScale-grey03">
            <button className="px-1 pb-2 ">알레르기</button>
            <button className="px-1 pb-2">상태</button>
            <button className="px-1 pb-2 border-b-2 border-GreyScale-grey01">
              단계
            </button>
          </div>

          <div></div>
        </div>
        <div className="flex py-4">
          <div className="flex w-full">
            <button className="flex items-center gap-2 Font14sb">
              <img src="/images/svgIcons/rotation.svg" alt="rotation" />
              옵션 재설정
            </button>
          </div>
          <button className="w-full py-3 rounded-lg Font16sb text-GreyScale-White bg-BrandColor-green01">
            적용하기
          </button>
        </div>
      </section>
    </>
  );
}
