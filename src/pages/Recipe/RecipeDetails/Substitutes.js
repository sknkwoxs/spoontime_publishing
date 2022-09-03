export default function Substitutes() {
  return (
    <>
      {/* 뒷단에 overflow : hidden 처리 필요 */}
      <div className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"></div>
      <section className="z-[1000] fixed bottom-0 left-0 right-0 px-4 bg-GreyScale-White rounded-t-2xl">
        <div className="flex pt-8 pb-5 Font16sb">
          <p className="mr-1 text-BrandColor-green03">단호박</p>
          <span>대체 식재료 설정</span>
        </div>
        <div className="grid grid-cols-4 mb-[52px] h-[64px] gap-6">
          <div className="flex flex-col items-center justify-center w-full h-full border rounded bg-BrandColor-green04 border-BrandColor-green03 gap-y-1">
            <img src="/images/ingredients/potato.svg" alt="potato" />
            <p>감자</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded gap-y-1">
            <img src="/images/ingredients/potato.svg" alt="potato" />
            <p>고구마</p>
          </div>
        </div>
        <div className="py-4 border-t">
          <button className="w-full py-3 rounded-lg Font16sb text-GreyScale-White bg-BrandColor-green01">
            적용하기
          </button>
        </div>
      </section>
    </>
  );
}