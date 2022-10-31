export default function IngredientGuideFilter() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"></div>
      <section className="z-[1000] fixed bottom-0 left-0 right-0 px-4 bg-GreyScale-White rounded-t-2xl">
        <p className="pt-8 pb-6 mb-4 Font16sb">필터 설정</p>
        <div>
          <div></div>
          <div className="fixed bottom-0 left-0 right-0 px-4 ">
            <div className="flex w-full py-4 border-t">
              <button className="flex items-center w-full gap-2 Font14sb">
                <img src="/images/svgIcons/rotation.svg" alt="rotation" />
                옵션 재설정
              </button>
              <button className="min-w-[200px] py-3 rounded-lg Font16sb text-GreyScale-White bg-BrandColor-green01">
                레시피 보기
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
