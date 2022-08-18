export function KaKaoLogin() {
  return (
    <>
      <button className="flex justify-center items-center w-full h-12 mb-2 bg-[#FEE500] rounded-xl border-0 box-border cursor-pointer overflow-hidden relative text-center">
        <div className="absolute flex left-0 ml-[1.125rem]">
          <img src="images/svgIcons/Kakao.svg" alt="Kakao" />
        </div>
        <span className="Font16sb absolute flex justify-center items-center overflow-hidden whitespace-nowrap text-ellipsis">
          카카오로 시작하기
        </span>
      </button>
    </>
  );
}
