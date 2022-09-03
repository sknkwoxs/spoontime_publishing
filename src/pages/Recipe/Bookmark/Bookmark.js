import { Link } from "react-router-dom";

export default function Bookmark() {
  return (
    <>
      <article className="px-4">
        <div className="flex py-4">
          <div className="absolute">
            <Link to="/Recipe">
              <img
                src="/images/svgIcons/directionsLeft.svg"
                alt="directionsLeft"
              />
            </Link>
          </div>
          <p className="mx-auto Font16sb">즐겨 찾기</p>
        </div>
        <div>
          <div className="flex w-full py-2 border-b Font14sb">
            {/* tab */}
            <div className="flex justify-center w-full text-center">레시피</div>
            <div className="flex justify-center w-full text-center">식재료</div>
          </div>
          <div>
            <div>사진</div>
            <div>
              <p className="mb-4 text-center">
                즐겨 찾는 레시피가 없습니다.
                <br /> 마음에 드는 레시피에 (하트)를 눌러보세요.
              </p>
              <button className="flex justify-center px-8 py-2 mx-auto mt-5 border rounded Font14sb border-BrandColor-green01">
                레시피 보러 가기
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
