export default function Configuring() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-[calc(100vh_-_32px)]">
        <div className="flex flex-col items-center justify-center px-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 flex justify-center items-center mb-6 bg-[#F3CAC2] rounded-full">
              <img src="/images/ingredients/eggplant.svg" alt="eggplant" />
            </div>
            {/* <div className="w-16 h-16 flex justify-center items-center mb-6 bg-[#D3E3DF] rounded-full">
              <img src="/images/ingredients/eggplant.svg" alt="eggplant" />
            </div> */}
          </div>
          <p className="mb-4 text-center Font20sb">
            <span className="text-BrandColor-green02">꼬물이</span>를 위한
            <br /> 맞춤형 레시피를
            <br /> 구성 중 입니다.
          </p>
          {/* <p className="mb-4 text-center Font20sb">
            <span className="text-BrandColor-green02">꼬물이</span>가 무럭무럭
            <br />
            자랄 시기네요.
          </p> */}
          <p className="Font12 text-GreyScale-grey02">잠시만 기다려 주세요.</p>
          {/* <p className="text-center Font12 text-GreyScale-grey02">
            이유식 준비가 필요할 때쯤 스푼타임이 알려드릴게요!
            <br /> 잠시만 기다려 주세요.
          </p> */}
        </div>
      </div>
    </>
  );
}
