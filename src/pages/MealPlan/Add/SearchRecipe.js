import { Link } from "react-router-dom";

export default function SearchRecipe() {
  return (
    <>
      <section>
        <div className="flex py-4">
          <div className="absolute left-4">
            <Link to="/MealPlan">
              <img
                src="/images/svgIcons/directionsLeft.svg"
                alt="directionsLeft"
              />
            </Link>
          </div>
          <div className="flex justify-center w-full">
            <input type="text" />
          </div>
        </div>
        <div></div>
        <article className="px-4">
          <div className="py-3">
            <p className="Font14sb">즐겨찾는 레시피</p>
            <option value=""></option>
          </div>
          <div></div>
        </article>
      </section>
    </>
  );
}
