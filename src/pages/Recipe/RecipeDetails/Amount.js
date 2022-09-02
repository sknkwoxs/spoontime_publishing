export default function Amount() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"></div>
      <section className="z-[1000] fixed bottom-0 left-0 right-0 px-4 bg-GreyScale-White rounded-t-2xl">
        <div>
          <div className="pt-8 pb-6">
            <p className="mb-4 Font16sb">도구 및 식이 기준 설정</p>
            <div className="flex text-center Font14sb text-GreyScale-grey03">
              <div className="w-full py-1 border ">냄비</div>
              <div className="w-full py-1 border ">밥솥</div>
              <div className="w-full py-1 border ">마스터기</div>
            </div>
          </div>
          <div className="Font14">
            <div>
              <div className="flex justify-between">
                <div className="mb-4">
                  한 끼에
                  <input
                    className="px-4 py-2 mx-1 border rounded w-14"
                    type="text"
                  />
                  g 씩
                </div>
                <img
                  src="/images/svgIcons/suggestedCircle.svg"
                  alt="suggestedCircle"
                />
              </div>
              <div className="mb-4">/ range bar / </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div className="mb-4">
                  <input
                    className="w-12 px-4 py-2 mx-1 border rounded"
                    type="text"
                  />
                  끼
                </div>
              </div>
              <div className="mb-6">/ range bar / </div>
            </div>
          </div>
          <div className="flex gap-10 py-4 border-t">
            <button className="flex items-center gap-2 Font14sb whitespace-nowrap">
              <img src="/images/svgIcons/rotation.svg" alt="rotation" />
              옵션 재설정
            </button>
            <button className="w-full py-3 rounded-lg Font16sb text-GreyScale-White bg-BrandColor-green01">
              적용하기
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
