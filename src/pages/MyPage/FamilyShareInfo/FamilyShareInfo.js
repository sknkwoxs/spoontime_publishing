import { Link } from "react-router-dom";

export default function FamilyShareInfo() {
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
            <p className="Font16sb">가족 공유 정보</p>
          </div>
        </div>
        <article className="px-4 py-6 border-b">
          <button className="flex items-center">
            <p className="Font16sb">아기 프로필 및 정보 삭제</p>
            <img
              className="absolute right-4"
              src="/images/svgIcons/directionsRight.svg"
              alt="directionsRight"
            />
          </button>
        </article>
      </section>
      <div>
        <button className="fixed bottom-0 left-0 right-0 w-full py-3 bg-GreyScale-grey04 text-GreyScale-White Font16sb">
          아기 프로필 수정하기
        </button>
      </div>
    </>
  );
}
