export default function Amount() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"></div>
      <section className="z-[1000] fixed bottom-0 left-0 right-0 px-4 bg-GreyScale-White rounded-t-2xl">
        <div>
          <div className="pt-8 pb-6">
            <p className="mb-4 Font16sb">도구 및 식이 기준 설정</p>
            <div className="flex text-center Font14sb text-GreyScale-grey03">
              <button className="w-full py-1 border border-r-0 rounded-l-lg">
                냄비
              </button>
              <button className="w-full py-1 border border-r-0">밥솥</button>
              <button className="w-full py-1 border rounded-r-lg">
                마스터기
              </button>
            </div>
          </div>
          <div className="Font14">
            <div>
              <div className="flex justify-between mb-4">
                <div className="flex items-center Font14">
                  한 끼에
                  <input
                    className="px-4 py-2 mx-1 border rounded border-GreyScale-grey04 w-14"
                    type="text"
                  />
                  g 씩
                </div>
                <img
                  className="flex items-center"
                  src="/images/svgIcons/suggestedCircle.svg"
                  alt="suggestedCircle"
                />
              </div>
              <div className="mb-4">
                <input
                  className="rangeSlider"
                  type="range"
                  min="50"
                  max="150"
                  defaultValue="140"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-4">
                <div className="Font14">
                  <input
                    className="w-12 px-4 py-2 mx-1 border rounded border-GreyScale-grey04"
                    type="text"
                  />
                  끼
                </div>
              </div>
              <div className="mb-6">
                <input
                  className="rangeSlider"
                  type="range"
                  min="1"
                  max="12"
                  defaultValue="4"
                />
              </div>
            </div>
          </div>
        </div>
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
      </section>
    </>
  );
}
