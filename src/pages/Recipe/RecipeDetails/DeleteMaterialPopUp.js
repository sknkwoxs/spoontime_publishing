import { useEffect } from "react";

export default function DeleteMaterialPopUp(closeDeleteModal) {
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
        onClick={closeDeleteModal}
      ></div>
      <section className="h-[144px] fixed top-[29%] bottom-0 left-0 right-0 p-4 bg-GreyScale-White rounded-lg mx-10 z-[1000] drop-shadow-1">
        <p className="mb-2 Font16sb">식재료를 삭제하시겠습니까?</p>
        <p className="mb-4 Font14 text-GreyScale-grey02">
          필요없는 식재료는 삭제하실 수 있습니다.
        </p>
        <div className="flex gap-2 pb-4 Font14sb">
          <button className="w-full py-2 rounded bg-GreyScale-grey05 border-GreyScale-grey04">
            취소
          </button>
          <button className="w-full py-2 rounded text-GreyScale-White bg-BrandColor-green01">
            삭제
          </button>
        </div>
      </section>
    </>
  );
}
