import { Link } from "react-router-dom";

export default function DeleteProfile() {
  return (
    <>
      <section>
        <div className="flex p-4 mb-6">
          <div className="absolute">
            <Link to="/MyPage">
              <img
                src="/images/svgIcons/directionsLeft.svg"
                alt="directionsLeft"
              />
            </Link>
          </div>
          <div className="flex justify-center w-full">
            <p className="Font16sb">아기 프로필 및 정보 삭제</p>
          </div>
        </div>
        <article className="px-4">
          <p className="mb-6 Font16sb">삭제하기 전에 꼭 확인해 주세요</p>
          <p className="mb-4 Font12">
            스푼타임에서 관리 중인 냠냠이의 모든 정보가 삭제되며, 더 이상 복구할
            수 없습니다.
          </p>
          <div className="flex flex-col gap-4 p-4 border rounded border-GreyScale-grey03 bg-GreyScale-grey05">
            <div className="flex gap-2">
              <img src="/images/svgIcons/profileBaby.svg" alt="profileBaby" />
              <p className="Font14sb">꼬물이 (알레르기, 먹어본 식재료)</p>
            </div>
            <div className="flex gap-2">
              <img src="/images/svgIcons/fileText.svg" alt="fileText" />
              <p className="Font14sb">
                식단 기록 <span className="text-BrandColor-green02">15</span> 개
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
        </article>
      </section>
      <div>
        <button className="fixed bottom-0 left-0 right-0 w-full py-3 bg-BrandColor-green01 text-GreyScale-White Font16sb">
          삭제하기
        </button>
      </div>
    </>
  );
}
