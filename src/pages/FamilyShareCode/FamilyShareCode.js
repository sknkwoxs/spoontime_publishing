export default function FamilyShareCode() {
  return (
    <>
      <div className="w-full h-screen">
        <div className="px-4 mt-8">
          <p className="py-4 mb-10 text-center Font16sb">가족 공유 코드</p>
          <p className="mb-6 Font20sb">
            가족 공유 코드가 있다면
            <br /> 입력해 주세요.
          </p>
          <p className="mb-16 Font12 text-GreyScale-grey02">
            가족 공유 코드를 입력하면 이미 등록된 아기의 정보를
            <br /> 바로 공유 받을 수 있어요.
          </p>
          <div>
            <p className="mb-3 Font12 text-GreyScale-grey03">가족 공유 코드</p>
            <div className="relative pb-1 mb-3 border-b Font20">
              <input className="w-full focus:outline-hidden" type="text" />
              <button className="absolute right-0">
                <img
                  src="/images/svgIcons/FamilyShareCodeX.svg"
                  alt="FamilyShareCodeX"
                />
              </button>
            </div>
            <p className="Font12 text-GreyScale-grey02">
              가족 공유 코드가 없어요.
              <span className="underline text-BrandColor-green01">
                새로운 아기를 등록할게요.
              </span>
            </p>
          </div>
        </div>
        <section className="fixed bottom-0 w-full">
          <div className="w-full">
            <button className="w-full py-3 pb-11 text-GreyScale-White bg-BrandColor-green01">
              다음
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
