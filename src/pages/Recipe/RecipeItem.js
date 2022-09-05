import { Link } from "react-router-dom";

export default function RecipeItem() {
  return (
    <>
      <article className="flex py-4 border-b">
        <div className="flex w-full ">
          <Link to="/Recipe/RecipeDetails">
            <div className="rounded-lg max-w-[64px] h-[64px] object-cover mr-4">
              <img
                className="rounded-lg max-w-[64px] h-[64px] object-cover"
                src="/images/Rectangle_869.png"
                alt="Rectangle_869"
              />
            </div>
          </Link>
          <div className="flex flex-col w-full my-auto">
            <Link to="/Recipe/RecipeDetails">
              <span className="mb-2 Font16sb">한우가지로메인죽</span>
            </Link>
            <div className="flex Font12 text-GreyScale-grey02">
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
        </div>
        <div className="flex flex-col my-auto gap-y-2">
          <img src="/images/svgicons/heart.svg" alt="heart" />
          <Link to="/Recipe/AddMenu">
            <img src="/images/svgicons/calendar.svg" alt="calendar" />
          </Link>
        </div>
      </article>
    </>
  );
}
