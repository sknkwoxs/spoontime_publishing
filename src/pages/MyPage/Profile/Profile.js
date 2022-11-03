import { Link } from "react-router-dom";
import DeleteChanges from "./DeleteChanges";
import EditProfile from "./EditProfile";

export default function Profile() {
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
            <p className="Font16sb">아기 프로필</p>
          </div>
        </div>
        <article className="border-b">
          <div>
            <div className=" w-full bg-BrandColor-green04 min-h-[7.5rem]" />
            <div>
              <div className="absolute left-[50%] right-[50%] -translate-x-[50%] -translate-y-[50%] w-[6.5rem] h-[6.5rem] bg-GreyScale-White rounded-full">
                <div className="myPageProfileImgae">
                  <img
                    className="w-full h-full rounded-[100px] object-cover"
                    src="/images/defaultImage.png"
                    alt="defaultImage"
                  />
                </div>
                <button className="absolute bottom-0 right-0 -translate-x-[20%]">
                  <img src="/images/profileEdit.svg" alt="profileEdit" />
                </button>
              </div>
            </div>
          </div>
          <div className="px-4 pb-6 mt-[4.75rem]">
            <div className="flex flex-col gap-2 mb-6">
              <label className="Font16sb" htmlFor="baby_name">
                이름 혹은 닉네임
              </label>
              <input
                className="p-2 border rounded border-GreyScale-grey04 Font14"
                id="baby_name"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="Font16sb" htmlFor="baby_birth">
                출생(예정)일
              </label>
              <input
                className="p-2 border rounded border-GreyScale-grey04 Font14"
                id="baby_birth"
                type="text"
              />
            </div>
          </div>
        </article>
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
      {/* <DeleteChanges /> */}
      {/* <EditProfile /> */}
    </>
  );
}
