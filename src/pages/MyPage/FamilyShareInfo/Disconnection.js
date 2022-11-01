export default function Disconnection() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"></div>
      <section className="h-[208px] fixed top-[30%] bottom-0 left-0 right-0 p-4 bg-GreyScale-White rounded-lg mx-10 z-[1000] drop-shadow-popup">
        <p className="mb-2 Font16sb">연결을 끊으실 건가요?</p>
        <p className="mb-2 Font14 text-GreyScale-grey02">
          연결을 끊을 경우, 꼬물이의 모든 정보를 더 이상 확인할 수 없습니다.
        </p>
        <div className="flex items-center gap-2 mb-4">
          <img src="/images/disconnectionBaby.svg" alt="disconnectionBaby" />
          <p className="Font14sb">꼬물이</p>
        </div>
        <div className="flex gap-2 pb-4 Font14sb">
          <button className="w-full py-2 rounded bg-GreyScale-grey05">
            취소
          </button>
          <button className="w-full py-2 rounded text-GreyScale-White bg-BrandColor-green01">
            연결 끊기
          </button>
        </div>
      </section>
    </>
  );
}
