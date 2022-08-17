import { KaKaoLogin } from "./KaKaoLogin";

export default function Login() {
  return (
    <>
      <div className="w-full h-screen bg-BrandColor-green04">
        <div className="h-full px-4">
          <section className="absolute left-[3.313rem] top-[13.25rem]">
            <div>
              <img src="images/splash_img03.svg" alt="splash_img03.svg" />
            </div>
          </section>
          <section className="h-full pb-[3.5rem] flex flex-col justify-end">
            <KaKaoLogin />
            <KaKaoLogin />
            <KaKaoLogin />
            <div>
              <p className="Font12 text-center mt-2">
                로그인하시면 스푼타임의 이용약관 및 개인정보처리방침에
                <br /> 동의하는 것으로 간주합니다.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
