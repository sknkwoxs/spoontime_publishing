import { Link } from "react-router-dom";

export default function Settings() {
  return (
    <>
      <section>
        <div className="flex p-4">
          <div className="absolute">
            <Link to="/MyPage">
              <img
                src="/images/svgIcons/directionsLeft.svg"
                alt="directionsLeft"
              />
            </Link>
          </div>
          <div className="flex justify-center w-full">
            <p className="Font16sb">설정</p>
          </div>
        </div>

        <article className="px-4 py-6 border-b">
          <p className="mb-6 Font16sb">계정정보</p>
          <div className="flex justify-between">
            <p className="Font14sb">아이디</p>
            <button className="flex items-center">
              <img
                className="mr-1"
                src="/images/settingsKakao.svg"
                alt="settingsKakao"
              />
              <span className="Font12 text-GreyScale-grey02">
                eunhye_kim@gmail.com
              </span>
              <img
                className="ml-2"
                src="/images/svgIcons/directionsRight.svg"
                alt="directionsRight"
              />
            </button>
          </div>
        </article>

        <article className="px-4 py-6 border-b">
          <p className="mb-6 Font16sb">앱 설정</p>
          <div className="flex justify-between mb-4">
            <p className="Font14sb">푸쉬 알림</p>
            <input type="checkbox" />
          </div>
          <div className="flex justify-between">
            <p className="Font14sb">레시피 화면 꺼짐 방지</p>
            <input type="checkbox" />
          </div>
        </article>

        <article className="px-4 py-6 border-b">
          <p className="mb-6 Font16sb">스푼타임 정보</p>
          <div className="flex justify-between mb-4">
            <p className="Font14sb">Instagram 구경하기</p>
            <button className="flex">
              <img
                src="/images/svgIcons/directionsRight.svg"
                alt="directionsRight"
              />
            </button>
          </div>
          <div className="flex justify-between">
            <p className="Font14sb">Youtube 구경하기</p>
            <button className="flex">
              <img
                src="/images/svgIcons/directionsRight.svg"
                alt="directionsRight"
              />
            </button>
          </div>
        </article>

        <article className="px-4 py-6 border-b">
          <p className="mb-6 Font16sb">고객 지원</p>
          <div className="flex justify-between mb-4">
            <p className="Font14sb">공지사항</p>
            <button className="flex">
              <img
                src="/images/svgIcons/directionsRight.svg"
                alt="directionsRight"
              />
            </button>
          </div>
          <div className="flex justify-between mb-4">
            <p className="Font14sb">도움말</p>
            <button className="flex">
              <img
                src="/images/svgIcons/directionsRight.svg"
                alt="directionsRight"
              />
            </button>
          </div>
          <div className="flex justify-between">
            <p className="Font14sb">1:1 문의하기</p>
            <button className="flex">
              <img
                src="/images/svgIcons/directionsRight.svg"
                alt="directionsRight"
              />
            </button>
          </div>
        </article>
        <article className="px-4 py-6 border-b">
          <p className="mb-6 Font16sb">기타</p>
          <div className="flex items-center justify-between mb-4">
            <p className="Font14sb">
              앱 버전
              <span className="ml-1 Font12 text-GreyScale-grey03 font-Pretendard">
                v 1.0.0
              </span>
            </p>
            <p className="flex px-1 bg-GreyScale-grey05 text-GreyScale-grey02 rounded-[4rem] text-[0.5rem] leading-4 font-Pretendard h-4">
              최신버전
            </p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="Font14sb">이용약관</p>
            <button className="flex">
              <img
                src="/images/svgIcons/directionsRight.svg"
                alt="directionsRight"
              />
            </button>
          </div>
          <div className="flex justify-between">
            <p className="Font14sb">개인정보 보호 정책</p>
            <button className="flex">
              <img
                src="/images/svgIcons/directionsRight.svg"
                alt="directionsRight"
              />
            </button>
          </div>
        </article>
      </section>
    </>
  );
}
