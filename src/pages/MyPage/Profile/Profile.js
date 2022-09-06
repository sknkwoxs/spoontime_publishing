import { Link } from "react-router-dom";

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
              <div></div>
              <div className="absolute left-[50%] right-[50%] -translate-x-[50%] -translate-y-[50%] w-[6.5rem] h-[6.5rem] bg-GreyScale-grey03 rounded-full">
                <div className=" w-[6.4rem] min-h-[6.4rem] flex items-center justify-center">
                  <img
                    className=" items-center justify-center object-cover rounded-full w-[6.4rem] min-h-[6.4rem]"
                    src="https://images.unsplash.com/photo-1491013516836-7db643ee125a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80"
                    alt="baby"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 pb-6 mt-[4.75rem]">
            <div className="flex flex-col gap-2 mb-6">
              <label className="Font16sb" htmlFor="baby_name">
                이름 혹은 닉네임
              </label>
              <input
                className="p-2 border Font14 "
                id="baby_name"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="Font16sb" htmlFor="baby_birth">
                출생(예정)일
              </label>
              <input
                className="p-2 border Font14 "
                id="baby_birth"
                type="text"
              />
            </div>
          </div>
        </article>
        <article className="px-4 py-6">
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
    </>
  );
}
