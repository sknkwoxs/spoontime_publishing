import { useEffect } from "react";

export default function EditProfile() {
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
        <div className="flex flex-col gap-2 mb-4 Font14sb">
          <button className="flex items-center justify-center py-3 border bg-GreyScale-grey05 border-GreyScale-grey04">
            앨범에서 사진 선택
          </button>
          <button className="flex items-center justify-center py-3 border bg-GreyScale-grey05 border-GreyScale-grey04">
            기본 이미지로 변경
          </button>
        </div>
      </section>
    </>
  );
}
