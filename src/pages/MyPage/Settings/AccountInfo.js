import { Link } from "react-router-dom";
import Logout from "./Logout";
import DeleteChanges from "./DeleteChanges";

export default function AccountInfo() {
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
            <p className="Font16sb">계정 정보</p>
          </div>
        </div>

        <article className="px-4 py-6 border-b">
          {/* <p className="mb-2 Font16sb">이름</p>
          <input
            className="w-full border rounded border-GreyScale-grey04 Font14"
            type="text"
          /> */}
          {/* Edit Name */}
          <p className="mb-2 Font16sb text-Message-error">이름</p>
          <input
            className="w-full border rounded border-Message-error Font14"
            type="text"
          />
          <p className="mt-2 text-Message-error Font12">
            최대 8글자까지 입력할 수 있어요.
          </p>
        </article>
        <article className="px-4 py-6 border-b">
          <div className="flex items-center justify-between mb-6">
            <p className="Font16sb">로그인 방식</p>
            <div className="flex items-center gap-1">
              <img src="/images/settingsKakao.svg" alt="settingsKakao" />
              <p className="Font12 text-GreyScale-grey02">카카오톡 계정 연동</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="Font14sb">아이디</p>
            <p className="Font12 text-GreyScale-grey02">eunhye_kim@gmail.com</p>
          </div>
        </article>
        <article className="px-4 py-6 border-b">
          <button className="flex items-center justify-between w-full">
            <p className="Font16sb">로그아웃</p>
            <img
              src="/images/svgIcons/directionsRight.svg"
              alt="directionsRight"
            />
          </button>
        </article>
        <article className="px-4 py-6 border-b">
          <a className="flex justify-between" href="#!">
            <p className="Font16sb">탈퇴하기</p>
            <img
              src="/images/svgIcons/directionsRight.svg"
              alt="directionsRight"
            />
          </a>
        </article>
      </section>

      <div>
        <button className="fixed bottom-0 left-0 right-0 w-full py-3 bg-GreyScale-grey04 text-GreyScale-White Font16sb">
          계정 정보 수정하기
        </button>
        {/* <button className="fixed bottom-0 left-0 right-0 w-full py-3 bg-BrandColor-green01 text-GreyScale-White Font16sb">
          확인
        </button> */}
      </div>
      {/* <Logout /> */}
      {/* <DeleteChanges /> */}
    </>
  );
}
