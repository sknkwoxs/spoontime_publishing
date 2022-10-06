export default function AddaMeal() {
  return (
    <>
      {/* 뒷단에 overflow : hidden 처리 필요 */}
      <div className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"></div>
      <section className="h-[136px] fixed top-[30%] bottom-0 left-0 right-0 p-4 bg-GreyScale-White rounded-lg mx-10 z-[1000]">
        <p className="mb-4 Font16sb">
          앗! 아직 추가된 식단이 없네요.
          <br />
          새로운 식단을 추가해 보시겠어요?
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
