export default function Allergy() {
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
              <div className="absolute h-1 bg-BrandColor-green03 w-[100%]" />
            </div>
            <p className="mb-6 Font20sb">
              아기가 못 먹는
              <br />
              식재료가 있나요?
            </p>
          </div>
        </div>
        <div className="px-4 mb-9">
          <p className="mb-10 Font12 text-GreyScale-grey02">
            이상 반응이 있었던 식재료들을 모두 선택해 주세요.
            <br /> 선택한 식재료는 언제든 수정할 수 있어요.
          </p>
          <div>
            <ul className="grid grid-cols-4 Font12 text-GreyScale-grey01">
              <li className="px-5 py-3 mx-auto text-center">
                <img
                  className="mb-1"
                  src="/images/ingredients/egg.svg"
                  alt="egg"
                />
                달걀
              </li>
              <li className="px-5 py-3 mx-auto text-center">
                <img
                  className="mb-1"
                  src="/images/ingredients/egg.svg"
                  alt="egg"
                />
                우유
              </li>
              <li className="px-5 py-3 mx-auto text-center">
                <img
                  className="mb-1"
                  src="/images/ingredients/egg.svg"
                  alt="egg"
                />
                밀
              </li>
              <li className="px-5 py-3 mx-auto text-center">
                <img
                  className="mb-1"
                  src="/images/ingredients/egg.svg"
                  alt="egg"
                />
                메밀
              </li>
              <li className="px-5 py-3 mx-auto text-center">
                <img
                  className="mb-1"
                  src="/images/ingredients/egg.svg"
                  alt="egg"
                />
                대두
              </li>
              <li className="px-5 py-3 mx-auto text-center">
                <img
                  className="mb-1"
                  src="/images/ingredients/egg.svg"
                  alt="egg"
                />
                새우
              </li>
              <li className="px-5 py-3 mx-auto text-center">
                <img
                  className="mb-1"
                  src="/images/ingredients/egg.svg"
                  alt="egg"
                />
                게
              </li>
              <li className="px-5 py-3 mx-auto text-center">
                <img
                  className="mb-1"
                  src="/images/ingredients/egg.svg"
                  alt="egg"
                />
                조개류
              </li>
              <li className="px-5 py-3 mx-auto text-center">
                <img
                  className="mb-1"
                  src="/images/ingredients/egg.svg"
                  alt="egg"
                />
                생선류
              </li>
              <li className="px-5 py-3 mx-auto text-center">
                <img
                  className="mb-1"
                  src="/images/ingredients/egg.svg"
                  alt="egg"
                />
                땅콩
              </li>
              <li className="px-5 py-3 mx-auto text-center">
                <img
                  className="mb-1"
                  src="/images/ingredients/egg.svg"
                  alt="egg"
                />
                견과류
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4">
          <button className="flex justify-center w-full gap-1 py-2 border rounded Font12 text-BrandColor-green01 border-GreyScale-grey04">
            <p>아직까지는 이상 반응이 없었어요</p>
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
