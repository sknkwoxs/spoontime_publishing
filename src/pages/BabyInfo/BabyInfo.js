export default function FamilyShareCode() {
  return (
    <>
      <div className="w-full h-screen">
        <div className="px-4 mt-8">
          <p className="py-4 mb-3 text-center Font16sb">아기정보</p>
          <div className="mb-8">
            <div className="h-1 mb-10 bg-GreyScale-grey04" />
            <p className="mb-6 Font20sb">
              아기의 이름(닉네임)을
              <br />
              입력해 주세요.
            </p>
            <p className="mb-16 Font12 text-GreyScale-grey02">
              맞춤형 식단과 레시피를 추천해 드리기 위해
              <br />몇 가지 정보가 필요해요.
            </p>
            <div>
              <p className="mb-3 Font12 text-GreyScale-grey03">
                이름 또는 닉네임
              </p>
              <div className="relative pb-1 mb-3 border-b Font20">
                <input className="w-full focus:outline-hidden" type="text" />
                <button className="absolute right-0">
                  <img
                    src="/images/svgIcons/FamilyShareCodeX.svg"
                    alt="FamilyShareCodeX"
                  />
                </button>
              </div>
            </div>
            <p className="Font12 text-GreyScale-grey02">
              입력한 정보는 언제든 수정할 수 있어요.
            </p>
          </div>
          <div className="p-4 rounded bg-GreyScale-grey05">
            <div className="flex items-center gap-0.5 mb-1">
              <img src="/images/svgIcons/BabyInfoInfo.svg" alt="BabyInfoInfo" />
              <span className="Font12sb">혹시 다태아인가요?</span>
            </div>
            <p className=" text-GreyScale-grey02 Font12">
              걱정 마세요. 마이페이지에서 아기를 추가할 수 있어요.
            </p>
          </div>
        </div>
        <section className="fixed bottom-0 w-full">
          <div className="w-full">
            <button className="w-full py-3 pb-11 text-GreyScale-White bg-BrandColor-green01">
              다음
            </button>
            {/* <button className="w-full py-3 pb-11 text-GreyScale-White bg-GreyScale-grey04">
              다음
            </button> */}
          </div>
        </section>
      </div>
    </>
  );
}
