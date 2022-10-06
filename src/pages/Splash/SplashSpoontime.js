export default function SplashSpoontime() {
  return (
    <>
      <section className="mt-[5.25rem] overflow-hidden">
        <div className="mb-10">
          <ul className="flex justify-center gap-3">
            <li>
              <button className="w-1 h-1 rounded-full bg-GreyScale-grey03"></button>
            </li>
            <li>
              <button className="w-1 h-1 rounded-full bg-GreyScale-grey03"></button>
            </li>
            <li>
              <button className="w-1 h-1 rounded-full bg-GreyScale-grey03"></button>
            </li>
            <li>
              <button className="w-1 h-1 rounded-full bg-GreyScale-grey03"></button>
            </li>
          </ul>
        </div>
        <div className="text-center Font24">
          우리 아기 밥상 고민
          <br />
          <span className="Font24sb">스푼타임</span>으로 쉽고 편리하게
        </div>
      </section>
      <section className="fixed bottom-0 w-full">
        <div className="w-full">
          <button className="w-full py-3 pb-11 text-GreyScale-White bg-BrandColor-green01">
            스푼타임 시작하기
          </button>
        </div>
      </section>
    </>
  );
}
