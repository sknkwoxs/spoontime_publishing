// splash img + login page
// import Image from "next/Image";
// import logoImg from "../public/images/splash_img03.svg";
import { GoogleLogin } from "./Login/GoogleLogin";
import { KaKaoLogin } from "./Login/KaKaoLogin";
import { NaverLogin } from "./Login/NaverLogin";
import { PrivacyPolicy } from "./Login/PrivacyPolicy";

export default function Login() {
  return (
    <>
      <div className="w-full h-screen bg-BrandColor-green04">
        <div className="flex items-center justify-center h-full -translate-x-[7.6%] -translate-y-[12.6%]">
          <img src="/images/splash_img03.svg" alt="splash_img03" />
          {/* <Image src={logoImg} width="500" height="500" /> */}
        </div>
        <section className="absolute bottom-0 w-full px-4">
          <div className="h-full pb-[3.5rem] flex flex-col justify-end">
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
