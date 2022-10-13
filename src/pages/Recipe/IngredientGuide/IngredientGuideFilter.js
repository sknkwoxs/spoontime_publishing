export default function IngredientGuideFilter() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"></div>
      <section className="z-[1000] fixed bottom-0 left-0 right-0 px-4 bg-GreyScale-White rounded-t-2xl">
        <p className="mt-8 mb-2 Font16sb">필터 설정</p>
        <div className="border-b">
          <div className="flex w-full py-2 border-b Font14sb text-GreyScale-grey03">
            {/* tab */}
            <div className="flex justify-center w-full text-center">
              섭취 가능 시기
            </div>
            <div className="flex justify-center w-full text-center">
              알레르기 위험도
            </div>
          </div>
          <div className="inline-block py-4 Font12">
            {/* 섭취 가능 시기 */}
            <button className="border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 mr-2">
              4~6개월
            </button>
            <button className="border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 mr-2">
              7~8개월
            </button>
            <button className="border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 mr-2">
              9~11개월
            </button>
            <button className="border rounded-[1.563rem] px-2 py-1 mr-2 bg-BrandColor-green04 border-BrandColor-green03">
              12개월 이상
            </button>
            {/* 알레르기 위험도 */}
            {/* <button className=" items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1 mr-2">
              알레르기 위험 있음
            </button>
            <button className=" items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1 mr-2 bg-BrandColor-green04 border-BrandColor-green03">
              알레르기 위험 없음
            </button> */}
          </div>
        </div>
        <div className="flex justify-between py-4">
          <button className="flex items-center justify-center gap-2">
            <img src="/images/svgIcons/16rotation.svg" alt="16rotation" />
            옵션재설정
          </button>
          <div>
            <button className="py-3 rounded-lg Font16sb text-GreyScale-White bg-BrandColor-green01 px-[4.5rem]">
              적용하기
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
