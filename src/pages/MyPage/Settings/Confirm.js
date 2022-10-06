import { Link } from "react-router-dom";

export default function Settings() {
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
            <p className="Font16sb">설정</p>
          </div>
        </div>

        <article className="px-4 py-6 border-b"></article>
      </section>
    </>
  );
}
