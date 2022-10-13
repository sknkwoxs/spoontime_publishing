export default function DeleteChanges() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"></div>
      <section className="h-[144px] fixed top-[30%] bottom-0 left-0 right-0 p-4 bg-GreyScale-White rounded-lg mx-10 z-[1000]">
        <p className="mb-2 Font16sb">변경된 내용을 삭제하시겠어요?</p>
        <p className="mb-4 Font14 text-GreyScale-grey02">
          지금 돌아가면 변경 내용이 삭제됩니다.
        </p>
        <div className="flex gap-2 pb-4 Font14sb">
          <button className="w-full py-2 rounded bg-GreyScale-grey05 border-GreyScale-grey04">
            계속 수정
          </button>
          <button className="w-full py-2 rounded text-GreyScale-White bg-BrandColor-green01">
            변경 내용 삭제
          </button>
        </div>
      </section>
    </>
  );
}
