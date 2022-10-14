import { Link } from "react-router-dom";

export default function IngredientsItem() {
  return (
    <>
      <article className="flex py-4 border-b">
        <div className="flex w-full ">
          <Link to="/Recipe/IngredientDetails">
            <div className="rounded-lg max-w-[64px] h-[64px] object-cover mr-4">
              <img
                className="rounded-lg max-w-[64px] h-[64px] object-cover"
                src="/images/Rectangle_869.png"
                alt="Rectangle_869"
              />
            </div>
          </Link>
          <div className="flex flex-col w-full my-auto">
            <span className="mb-2 Font16sb">
              <Link to="/Recipe/IngredientDetails">쌀 </Link>
            </span>

            <div className="flex Font12 text-GreyScale-grey02">
              <div className="flex items-center gap-1 mr-2">
                <img src="/images/svgicons/ingredients.svg" alt="ingredients" />
                <p>곡류</p>
              </div>
              <div className="flex items-center gap-1 mr-2">
                <img src="/images/svgIcons/baby.svg" alt="baby" />
                <p>4개월+</p>
              </div>
              <div className="flex items-center gap-1 mr-2">
                <img src="/images/svgicons/triangle.svg" alt="triangle" />
                <p>주의</p>
              </div>
            </div>
          </div>
        </div>
        <button className="flex flex-col my-auto gap-y-2">
          <img src="/images/svgicons/heart.svg" alt="heart" />
        </button>
      </article>
    </>
  );
}
