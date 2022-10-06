import { Link } from "react-router-dom";

export default function Details() {
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

        <article>
          <div className="p-4 border-b">
            <p className="Font14sb">
              [스푼타임 단독] 이유식 스타터 키드 공동구매 이벤트
            </p>
            <p className="Font12 text-GreyScale-grey02">2022.10.17</p>
          </div>
          <div className="p-4 Font14">
            <p>
              안녕하세요. 스푼타임 팀입니다 :-)
              <br />
              <br />
              오랜 준비 끝에 드디어 스푼타임이 앱 서비스를 시작합니다.
              <br />
              <br />
              항상 여러분의 곁에서 우리 아기들의 행복한 식사 시간을 위해
              노력하는 스푼타임 팀이 되도록 열심히 노력하겠습니다.
              <br />
              <br />
              감사합니다:-)
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
