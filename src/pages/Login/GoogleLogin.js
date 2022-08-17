export function GoogleLogin() {
  return (
    <>
      <button className="flex justify-center items-center w-full h-12 mb-2 bg-[#FFFFFF] rounded-xl border-GreyScale-grey03 border box-border cursor-pointer overflow-hidden relative text-center">
        <div className="absolute flex left-0 ml-[1.125rem]">
          <img src="images/Google.svg" alt="Google" />
        </div>
        <span className="Font16sb absolute flex justify-center items-center overflow-hidden whitespace-nowrap text-ellipsis">
          구글로 시작하기
        </span>
      </button>
    </>
  );
}
