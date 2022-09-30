import { GoogleLogin } from "./Login/GoogleLogin";
import { KaKaoLogin } from "./Login/KaKaoLogin";
import { NaverLogin } from "./Login/NaverLogin";
import { PrivacyPolicy } from "./Login/PrivacyPolicy";

export default function Login() {
  return (
    <>
      <div className="w-full h-screen bg-BrandColor-green04">
        <div className="flex items-center justify-center h-full -translate-x-[7.6%] -translate-y-[12.6%]">
          <img src="/images/Splash/SplashLogo.svg" alt="SplashLogo" />
        </div>
        <section className="absolute bottom-0 w-full px-4">
          <div className="h-full pb-[3.5rem] flex flex-col justify-end">
            <div className="flex items-center justify-center mx-auto mb-3 text-center loginBallon Font12">
              마지막으로 로그인한 계정이에요
            </div>
            <KaKaoLogin />
            <NaverLogin />
            <GoogleLogin />
            <PrivacyPolicy />
          </div>
        </section>
      </div>
    </>
  );
}
