export default function Filter() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"></div>
      <section className="z-[1000] fixed bottom-0 left-0 right-0 px-4 bg-GreyScale-White rounded-t-2xl">
        <p className="pt-8 mb-2 Font16sb">
          <span className="text-BrandColor-green02">꼬물이</span> 맞춤정보
        </p>
        <div>
          <div className="flex gap-5 border-b Font14sb text-GreyScale-grey03">
            <button className="px-1 pb-2 ">알레르기</button>
            <button className="px-1 pb-2">상태</button>
            <button className="px-1 pb-2 border-b-2 border-GreyScale-grey01">
              단계
            </button>
          </div>

          {/* Allergy */}
          {/* <div className="grid grid-cols-4 mb-[52px] h-[64px] gap-6 my-5">
            <button className="flex flex-col items-center justify-center w-full h-full border rounded bg-BrandColor-green04 border-BrandColor-green03 gap-y-1">
              <img src="/images/ingredients/potato.svg" alt="potato" />
              <p className="Font12">감자</p>
            </button>
            <button className="flex flex-col items-center justify-center rounded gap-y-1">
              <img src="/images/ingredients/potato.svg" alt="potato" />
              <p className="Font12">고구마</p>
            </button>
          </div> */}

          {/* Status */}
          {/* <div className="grid grid-cols-4 mb-[52px] h-[64px] gap-6 my-5">
            <button className="flex flex-col items-center justify-center w-full h-full border rounded bg-BrandColor-green04 border-BrandColor-green03 gap-y-1">
              <img src="/images/ingredients/potato.svg" alt="potato" />
              <p className="Font12">감기/고열</p>
            </button>
            <button className="flex flex-col items-center justify-center rounded gap-y-1">
              <img src="/images/ingredients/potato.svg" alt="potato" />
              <p className="Font12">변비</p>
            </button>
          </div> */}

          {/* Step */}
          <div className="grid grid-cols-1 gap-2 py-5 overflow-auto max-h-[16.75rem]">
            <button className="grid items-center w-full grid-cols-[max(56px)_1fr] gap-4 p-2 text-left border rounded border-GreyScale-grey01">
              <div className="rounded h-0 pb-[100%] overflow-hidden relative">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src="/images/defaultImage.png"
                  alt="defaultImage"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <p className="Font14sb">초기 1</p>
                  <p className="text-GreyScale-grey02 font-normal text-[0.625rem] leading-[1rem px-2 bg-BrandColor-green04 rounded">
                    권장 150~190일
                  </p>
                </div>
                <p className="text-GreyScale-grey02 Font12">
                  10~ 20배죽의 주르륵 흘러내리는 묽은 수프 농도
                </p>
              </div>
            </button>
            <button className="grid items-center w-full grid-cols-[max(56px)_1fr] gap-4 p-2 text-left border rounded">
              <div className="rounded h-0 pb-[100%] overflow-hidden relative">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src="/images/defaultImage.png"
                  alt="defaultImage"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <p className="Font14sb">초기 2</p>
                  <p className="text-GreyScale-grey02 font-normal text-[0.625rem] leading-[1rem px-2 bg-BrandColor-green04 rounded">
                    권장 150~190일
                  </p>
                </div>
                <p className="text-GreyScale-grey02 Font12">
                  10~ 20배죽의 주르륵 흘러내리는 묽은 수프 농도
                </p>
              </div>
            </button>
            <button className="grid items-center w-full grid-cols-[max(56px)_1fr] gap-4 p-2 text-left border rounded">
              <div className="rounded h-0 pb-[100%] overflow-hidden relative">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src="/images/defaultImage.png"
                  alt="defaultImage"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <p className="Font14sb">중기</p>
                  <p className="text-GreyScale-grey02 font-normal text-[0.625rem] leading-[1rem px-2 bg-BrandColor-green04 rounded">
                    권장 150~190일
                  </p>
                </div>
                <p className="text-GreyScale-grey02 Font12">
                  10~ 20배죽의 주르륵 흘러내리는 묽은 수프 농도
                </p>
              </div>
            </button>{" "}
            <button className="grid items-center w-full grid-cols-[max(56px)_1fr] gap-4 p-2 text-left border rounded">
              <div className="rounded h-0 pb-[100%] overflow-hidden relative">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src="/images/defaultImage.png"
                  alt="defaultImage"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <p className="Font14sb">초기 3</p>
                  <p className="text-GreyScale-grey02 font-normal text-[0.625rem] leading-[1rem px-2 bg-BrandColor-green04 rounded">
                    권장 150~190일
                  </p>
                </div>
                <p className="text-GreyScale-grey02 Font12">
                  10~ 20배죽의 주르륵 흘러내리는 묽은 수프 농도
                </p>
              </div>
            </button>
          </div>
        </div>
        <div className="flex py-4">
          <div className="flex w-full">
            <button className="flex items-center gap-2 Font14sb">
              <img src="/images/svgIcons/rotation.svg" alt="rotation" />
              옵션 재설정
            </button>
          </div>
          <button className="w-full py-3 rounded-lg Font16sb text-GreyScale-White bg-BrandColor-green01">
            적용하기
          </button>
        </div>
      </section>
    </>
  );
}
