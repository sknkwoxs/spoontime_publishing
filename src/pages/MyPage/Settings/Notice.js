import { Link } from "react-router-dom";

export default function Notice() {
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
            <p className="Font16sb">공지사항</p>
          </div>
        </div>

        <article className="p-4 border-b">
          <a href="#!">
            <p className="Font14sb">
              [스푼타임 단독] 이유식 스타터 키드 공동구매 이벤트
            </p>
            <p className="Font12 text-GreyScale-grey02">2022.10.17</p>
          </a>
        </article>
        <article className="p-4 border-b">
          <a href="#!">
            <p className="Font14sb">스푼타임에 오신 것을 환영해요! :-)</p>
            <p className="Font12 text-GreyScale-grey02">2022.10.17</p>
          </a>
        </article>
      </section>
    </>
  );
}
