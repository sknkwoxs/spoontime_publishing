import { Link } from "react-router-dom";

export default function MealPlanEditItem() {
  return (
    <>
      <article className="flex py-4 border-b">
        <div className="flex w-full h-[4.25rem]">
          <button className="flex items-center mr-2">
            <img src="/images/svgIcons/deleteItem.svg" alt="deleteItem" />
          </button>
          {/* <Link to="/Recipe/RecipeDetails"> */}
          <div className="rounded-lg max-w-[64px] h-[64px] object-cover mr-4">
            <img
              className="rounded-lg max-w-[64px] h-[64px] object-cover"
              src="/images/RecipeDetails2.jpg"
              alt="RecipeDetails2"
            />
          </div>
          {/* </Link> */}
          <div className="flex flex-col w-full my-auto">
            {/* <Link to="/Recipe/RecipeDetails"> */}
            <p className="mb-2 Font16sb">한우가지로메인죽</p>
            {/* </Link> */}
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
        <div className="flex items-center whitespace-nowrap">
          <button className="flex items-center">
            <img src="/images/svgIcons/menu.svg" alt="menu" />
          </button>
        </div>
      </article>
    </>
  );
}
