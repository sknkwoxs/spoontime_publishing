import { Link } from "react-router-dom";

export default function Sharing() {
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
          <p className="mb-6 Font16sb">아기 정보를 공유 중인 가족이 있습니다</p>
          <p className="mb-6 Font12 text-GreyScale-grey02">
            공유 중인 가족이 직접 냠냠이와의 연결을 끊어야 아기 프로필 및 정보를
            삭제할 수 있습니다.
            <br />
            <br />
            연결 끊기는 [마이페이지 &gt; 가족 공유 정보] 화면에서 하실 수
            있습니다.
          </p>
          <div className="flex justify-center">
            <button className="px-6 py-2 border rounded Font14sb border-BrandColor-green01">
              가족 공유 정보 화면으로 이동
            </button>
          </div>
        </article>
      </section>
    </>
  );
}
