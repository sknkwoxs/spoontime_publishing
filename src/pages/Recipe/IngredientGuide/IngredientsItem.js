import { useState } from "react";
import { Link } from "react-router-dom";

export default function IngredientsItem() {
  const [liked, setLiked] = useState(false);
  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <>
      <article className="flex justify-between w-full py-4 border-b">
        <Link to="/Recipe/IngredientDetails">
          <div className="grid w-full grid-cols-[max(64px)_auto] gap-4">
            <div className="rounded-lg h-0 pb-[100%] overflow-hidden relative z-0">
              <img
                className="absolute object-cover w-full h-full"
                src="/images/RecipeDetails1.jpg"
                alt="RecipeDetails1"
              />
            </div>
            <div className="flex flex-col w-full my-auto">
              <span className="mb-2 Font16sb">쌀</span>
              <div className="flex Font12 text-GreyScale-grey02">
                <div className="flex items-center gap-1 mr-2">
                  <img
                    src="/images/svgIcons/ingredients.svg"
                    alt="ingredients"
                  />
                  <p>곡류</p>
                </div>
                <div className="flex items-center gap-1 mr-2">
                  <img src="/images/svgIcons/baby.svg" alt="baby" />
                  <p>4개월+</p>
                </div>
                <div className="flex items-center gap-1 mr-2">
                  <img src="/images/svgIcons/triangle.svg" alt="triangle" />
                  <p>주의</p>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <button className="flex flex-col my-auto gap-y-2" onClick={handleClick}>
          <img
            src={
              liked
                ? "/images/svgIcons/heart.svg"
                : "/images/svgIcons/heartFill.svg"
            }
            alt="heart"
          />
        </button>
      </article>
    </>
  );
}
