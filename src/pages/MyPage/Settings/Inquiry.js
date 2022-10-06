import { Link } from "react-router-dom";

export default function Inquiry() {
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
            <p className="Font16sb">1:1 문의하기</p>
          </div>
        </div>

        <article className="px-4 py-6">
          <p className="mb-2 Font16sb">답변 받으실 이메일 주소</p>
          <div className="mb-4">
            <input
              className="w-full border rounded border-GreyScale-grey04"
              type="text"
            />
          </div>
          <div>
            <textarea
              className="w-full rounded Font14"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="궁금한 내용은 입력해 주세요.
최대한 빠르게 입력하신 이메일 주소로 답변드릴게요."
            ></textarea>
          </div>
        </article>
      </section>
      <div>
        <button className="fixed bottom-0 left-0 right-0 w-full py-3 bg-GreyScale-grey04 text-GreyScale-White Font16sb">
          문의하기
        </button>
      </div>
    </>
  );
}
