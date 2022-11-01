export default function Substitutes() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"></div>
      <section className="z-[1000] drop-shadow-popup fixed bottom-0 left-0 right-0 px-4 bg-GreyScale-White rounded-t-2xl">
        <div className="flex pt-8 pb-5 Font16sb">
          <p className="mr-1 text-BrandColor-green03">단호박</p>
          <span>대체 식재료 설정</span>
        </div>
        <div className="grid grid-cols-4 mb-[52px] h-[64px] gap-6">
          <button className="flex flex-col items-center justify-center w-full h-full border rounded bg-BrandColor-green04 border-BrandColor-green03 gap-y-1">
            <img src="/images/ingredients/potato.svg" alt="potato" />
            <p className="Font12">감자</p>
          </button>
          <button className="flex flex-col items-center justify-center rounded gap-y-1">
            <img src="/images/ingredients/potato.svg" alt="potato" />
            <p className="Font12">고구마</p>
          </button>
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
