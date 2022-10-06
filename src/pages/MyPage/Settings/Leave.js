import { Link } from "react-router-dom";

export default function Leave() {
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
            <p className="Font16sb">탈퇴하기</p>
          </div>
        </div>

        <article className="px-4 py-6">
          <p className="pb-4 Font16sb">탈퇴하는 이유가 무엇인가요?</p>
          <div>
            <a className="flex justify-between py-2" href="#!">
              <p className="Font14sb">원하는 기능이 없어요</p>
              <img
                src="/images/svgIcons/directionsRight.svg"
                alt="directionsRight"
              />
            </a>
            <a className="flex justify-between py-2" href="#!">
              <p className="Font14sb">쓰지 않는 앱이예요</p>
              <img
                src="/images/svgIcons/directionsRight.svg"
                alt="directionsRight"
              />
            </a>
            <a className="flex justify-between py-2" href="#!">
              <p className="Font14sb">앱 사용법이 어려워요</p>
              <img
                src="/images/svgIcons/directionsRight.svg"
                alt="directionsRight"
              />
            </a>
            <a className="flex justify-between py-2" href="#!">
              <p className="Font14sb">오류가 생겨서 사용하기 힘들어요</p>
              <img
                src="/images/svgIcons/directionsRight.svg"
                alt="directionsRight"
              />
            </a>
            <a className="flex justify-between py-2" href="#!">
              <p className="Font14sb">기타</p>
              <img
                src="/images/svgIcons/directionsRight.svg"
                alt="directionsRight"
              />
            </a>
          </div>
        </article>
      </section>
    </>
  );
}
