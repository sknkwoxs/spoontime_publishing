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
        <article className="px-4 py-6">
          <div className="absolute mb-1 leading-5 familyShareBallon Font12 top-5 left-[6.25rem]">
            1명의 다른 가족을 초대하여
            <br /> 아기의 정보를 공유할 수 있어요.
          </div>
          <div className="flex items-center gap-1">
            <p className="Font16sb">가족 공유 목록</p>
            <img
              src="/images/svgIcons/exclamationMark.svg"
              alt="exclamationMark"
            />
          </div>
          <div className="mb-4">
            <div className="flex justify-between py-4 border-b h-14">
              <div className="flex items-center gap-2">
                <div>
                  <img src="/images/svgIcons/check.svg" alt="check" />
                </div>
                <p className="absolute Font14 left-11">김은혜</p>
              </div>
              {/* <button className="px-4 py-1 border rounded Font12 border-GreyScale-grey01">
                연결끊기
              </button> */}
            </div>
            <div className="flex justify-between py-4 border-b h-14">
              <div className="flex items-center gap-2">
                <p className="absolute Font14 left-11">박찬우</p>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2">
            <img src="/images/svgIcons/symbolPlus.svg" alt="symbolPlus" />
            <p className="Font14sb">가족 초대하기</p>
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
