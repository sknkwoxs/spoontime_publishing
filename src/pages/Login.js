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
        <section className="fixed">
          <img src="/images/splash_img03.svg" alt="splash_img03" />
          {/* <Image src={logoImg} width="500" height="500" /> */}
        </section>
        <div className="h-full px-4">
          <section className="h-full pb-[3.5rem] flex flex-col justify-end">
            <KaKaoLogin />
            <NaverLogin />
            <GoogleLogin />
            <PrivacyPolicy />
          </section>
        </div>
      </div>
    </>
  );
}
