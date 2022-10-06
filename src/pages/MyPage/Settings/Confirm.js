import { Link } from "react-router-dom";

export default function Confirm() {
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
          <p className="mb-6 Font16sb">탈퇴하기 전에 꼭 확인해 주세요</p>
          <p className="mb-6 Font12 text-GreyScale-grey02">
            스푼타임에서 관리했던 김은혜 님의 모든 정보 및 연결된 아기 정보가
            삭제됩니다. (단, 공유 중인 가족이 있는 아기 정보는 삭제 되지
            않습니다.)
            <br /> 추후 같은 회원 정보로 재가입 하시더라도 삭제된 정보나 연결된
            아기 정보를 복구할 수 없습니다.
          </p>

          <div className="mb-6">
            <p className="mb-4 Font14sb">
              삭제될 아기 정보{" "}
              <span className="text-BrandColor-green03">2</span>명
            </p>
            <div className="flex flex-col gap-4 p-4 mb-4 border rounded border-GreyScale-grey03 bg-GreyScale-grey05">
              <div className="flex gap-2">
                <img src="/images/svgIcons/profileBaby.svg" alt="profileBaby" />
                <p className="Font14sb">꼬물이 (알레르기, 먹어본 식재료)</p>
              </div>
              <div className="flex gap-2">
                <img src="/images/svgIcons/fileText.svg" alt="fileText" />
                <p className="Font14sb">
                  식단 기록 <span className="text-BrandColor-green02">15</span>{" "}
                  개
                </p>
              </div>
              <div className="flex gap-2">
                <img
                  src="/images/svgIcons/profileCalendar.svg"
                  alt="profileCalendar"
                />
                <p className="Font14sb">
                  월별 식단표 <span className="text-BrandColor-green02">3</span>{" "}
                  개월
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-4 mb-4 border rounded border-GreyScale-grey03 bg-GreyScale-grey05">
              <div className="flex gap-2">
                <img src="/images/svgIcons/profileBaby.svg" alt="profileBaby" />
                <p className="Font14sb">둥둥이 (알레르기, 먹어본 식재료)</p>
              </div>
              <div className="flex gap-2">
                <img src="/images/svgIcons/fileText.svg" alt="fileText" />
                <p className="Font14sb">
                  식단 기록 <span className="text-BrandColor-green02">15</span>{" "}
                  개
                </p>
              </div>
              <div className="flex gap-2">
                <img
                  src="/images/svgIcons/profileCalendar.svg"
                  alt="profileCalendar"
                />
                <p className="Font14sb">
                  월별 식단표 <span className="text-BrandColor-green02">3</span>{" "}
                  개월
                </p>
              </div>
            </div>
          </div>
          <p className="Font12 text-GreyScale-grey02">
            작성해 주신 사유를 바탕으로 부족한 부분을 개선하여
            <br /> 더욱 좋은 서비스를 제공할 수 있도록 노력하겠습니다.
            <br /> 지금까지 스푼타임을 이용해 주셔서 감사합니다.
          </p>
        </article>
      </section>
      <div>
        <button className="fixed bottom-0 left-0 right-0 w-full py-3 bg-BrandColor-green01 text-GreyScale-White Font16sb">
          탈퇴하기
        </button>
      </div>
    </>
  );
}
