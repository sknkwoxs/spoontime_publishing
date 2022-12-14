import { useEffect } from "react";

export default function BabyList() {
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
      <div className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"></div>
      <section className="z-[1000] drop-shadow-popup fixed bottom-0 left-0 right-0 px-4 bg-GreyScale-White rounded-t-2xl pt-4">
        <div className="flex flex-col Font14">
          <button className="flex items-center justify-between py-4 text-left border-b">
            <div className="flex gap-2">
              <img src="/images/babylist1.svg" alt="babylist1" />
              <p>꼬물이</p>
            </div>
            <div>
              <img src="/images/svgIcons/check.svg" alt="check" />
            </div>
          </button>
          <button className="flex items-center justify-between py-4 text-left border-b">
            <div className="flex gap-2">
              <img src="/images/babylist2.svg" alt="babylist2" />
              <p>퉁퉁이</p>
            </div>
            <div>
              {/* <img src="/images/svgIcons/check.svg" alt="check" /> */}
            </div>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <img src="/images/svgIcons/symbolPlus.svg" alt="symbolPlus" />
          <p className="py-4 Font14sb">새로운 아기 등록하기</p>
        </div>
      </section>
    </>
  );
}
