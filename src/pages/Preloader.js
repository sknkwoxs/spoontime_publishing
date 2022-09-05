export default function Preloader() {
  return (
    <>
      <div className="w-full h-screen px-4">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-BrandColor-green04">
            <img
              className="z-10"
              src="/images/ingredients/pumpkin.svg"
              alt="pumpkin"
            />
          </div>
          <div className="flex mb-4 Font20sb w-[200px] text-center">
            꼬물이의 식이 정보를 가져오고 있어요
          </div>
          <p className="Font12 text-GreyScale-grey02">잠시만 기다려 주세요.</p>
        </div>
      </div>
    </>
  );
}
