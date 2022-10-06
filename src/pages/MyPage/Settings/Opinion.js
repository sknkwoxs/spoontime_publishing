import { Link } from "react-router-dom";

export default function Opinion() {
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
          <p className="mb-4 Font16sb">
            더 나은 스푼타임이 될 수 있도록
            <br />
            의견을 들려주세요
          </p>
          <textarea
            className="w-full p-2 border rounded border-GreyScale-grey04 placeholder:text-GreyScale-grey03 Font14"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="부담 없이 입력해 주세요.
꼭 입력하시지 않아도 괜찮습니다."
          ></textarea>
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
