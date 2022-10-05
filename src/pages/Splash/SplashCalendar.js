export default function SplashCalendar() {
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
          맞춤형 식단까지 알아서 척척
          <br />
          걱정 없는
          <span className="Font24sb">식단 관리</span>
        </div>
        <p>이미지 교체 필요</p>
        <div className="mx-5">
          <img src="/images/splash/Splash_Calendar.jpg" alt="Splash_Calendar" />
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
