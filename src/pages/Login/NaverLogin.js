export function NaverLogin() {
  return (
    <>
      <button className="flex justify-center items-center w-full h-12 mb-2 bg-[#00CD4C] rounded-xl border-0 box-border cursor-pointer overflow-hidden relative text-center">
        <div className="absolute flex left-0 ml-[1.125rem]">
          <img src="images/svgIcons/Naver.svg" alt="Naver" />
        </div>
        <span className="Font16sb text-GreyScale-White absolute flex justify-center items-center overflow-hidden whitespace-nowrap text-ellipsis">
          네이버로 시작하기
        </span>
      </button>
    </>
  );
}
