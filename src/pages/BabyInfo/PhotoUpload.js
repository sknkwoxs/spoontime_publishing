export default function PhotoUpload() {
  return (
    <>
      <div className="w-full h-screen">
        <div className="px-4">
          <div className="relative">
            <button className="absolute mt-4">
              <img
                src="images/svgIcons/BabyInfoArrowsLeft.svg"
                alt="BabyInfoArrowsLeft"
              />
            </button>
            <p className="pt-4 mb-3 text-center Font16sb">아기정보</p>
          </div>
          <div className="mb-8">
            <div className="relative h-1 mb-10 bg-GreyScale-grey04">
              <div className="absolute h-1 bg-BrandColor-green03 w-[75%]" />
            </div>
            <p className="mb-6 Font20sb">
              아기의 사진을 올려주시면,
              <br />
              프로필 사진으로 설정됩니다.
            </p>
          </div>
        </div>
        <div className="mb-6">
          <button className="absolute right-0 mt-4 mr-4">
            <img
              src="/images/svgIcons/BabyInfoCircleX.svg"
              alt="BabyInfoCircleX"
            />
          </button>
          <img
            className="object-cover w-full  min-h-[22.5rem]"
            src="/images/defaultImage.png"
            alt="defaultImage"
          />
        </div>
        <div className="px-4">
          <button className="flex justify-center w-full gap-1 py-2 border rounded border-GreyScale-grey04">
            <img
              src="/images/svgIcons/BabyInfoCamera.svg"
              alt="BabyInfoCamera"
            />
            <p>사진 올리기</p>
          </button>
        </div>
        <section className="fixed bottom-0 w-full">
          <div className="w-full">
            {/* <button className="w-full py-3 pb-11 text-GreyScale-White bg-BrandColor-green01">
              다음
            </button> */}
            <button className="w-full py-3 pb-11 text-GreyScale-White bg-GreyScale-grey04">
              다음
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
