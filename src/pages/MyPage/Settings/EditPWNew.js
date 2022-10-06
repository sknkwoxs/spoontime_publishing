import { Link } from "react-router-dom";

export default function EditPWNew() {
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
            <p className="Font16sb">비밀번호 변경</p>
          </div>
        </div>

        <article className="px-4 py-6">
          <p className="mb-2">새 비밀번호</p>
          <input
            className="w-full mb-2 border rounded border-GreyScale-grey01 Font14 placeholder:text-GreyScale-grey03"
            type="text"
            placeholder="새 비밀번호를 입력해 주세요."
          />
          <input
            className="w-full border rounded border-GreyScale-grey04 Font14 placeholder:text-GreyScale-grey03"
            type="text"
            placeholder="한 번 더 입력해 주세요."
          />
        </article>
      </section>
    </>
  );
}
