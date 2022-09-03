export default function DeleteMaterialPopUp() {
  return (
    <>
      {/* 뒷단에 overflow : hidden 처리 필요 */}
      <div className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"></div>
      <section className="h-[144px] fixed top-[30%] bottom-0 left-0 right-0 p-4 bg-GreyScale-White rounded-lg mx-10 z-[1000]">
        <p className="mb-2 Font16sb">식재료를 삭제하시겠습니까?</p>
        <p className="mb-4 Font14 text-GreyScale-grey02">
          필요없는 식재료는 삭제하실 수 있습니다.
        </p>
        <div className="flex gap-2 pb-4 Font14sb">
          <button className="w-full py-2 rounded bg-GreyScale-grey05">
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