import { useEffect } from "react";

export default function StopTimer(closeStopTimerModal) {
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
        onClick={closeStopTimerModal}
      ></div>
      <section className="h-[144px] fixed top-[30%] bottom-0 left-0 right-0 p-4 bg-GreyScale-White rounded-lg mx-10 z-[1000] drop-shadow-popup">
        <p className="mb-2 Font16sb">타이머를 종료할까요?</p>
        <p className="mb-4 Font14 text-GreyScale-grey02">
          종료하면 최초 시간으로 리셋됩니다.
        </p>
        <div className="flex gap-2 pb-4 Font14sb">
          <button className="w-full py-2 rounded bg-GreyScale-grey05 border-GreyScale-grey04">
            취소
          </button>
          <button className="w-full py-2 rounded text-GreyScale-White bg-BrandColor-green01">
            종료
          </button>
        </div>
      </section>
    </>
  );
}
