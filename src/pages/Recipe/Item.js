import { Link } from "react-router-dom";

export default function BabyInfo() {
  return (
    <>
      <Link to="/Recipe/AddMenu">
        <article className="flex border-b py-4">
          <div className="mr-4">
            <img src="images/Rectangle_869.png" alt="Rectangle_869" />
          </div>
          <div className="w-full flex flex-col my-auto">
            <p className="Font16sb mb-2">한우가지로메인죽</p>
            <div className="Font12 flex text-GreyScale-grey02">
              <div className="flex items-center gap-1 mr-2">
                <img src="/images/svgIcons/baby.svg" alt="baby" />
                <p>중기</p>
              </div>
              <div className="flex items-center gap-1 mr-2">
                <img src="/images/svgicons/clock.svg" alt="clock" />
                <p>30분</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-auto gap-y-2">
            <img src="/images/svgicons/heart.svg" alt="heart" />
            <img src="/images/svgicons/calendar.svg" alt="calendar" />
          </div>
        </article>
      </Link>
    </>
  );
}
