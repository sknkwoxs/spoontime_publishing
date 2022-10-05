import { Link } from "react-router-dom";
import More from "./More";
import DeleteFeedback from "./DeleteFeedback";

export default function Read() {
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
            <p className="Font16sb">꼬물이</p>
          </div>
        </div>
        <article>
          <div className="flex items-center justify-between p-4">
            <div className="mr-2">
              <img
                className="w-full h-full"
                src="/images/RecipeBabyImg.svg"
                alt="RecipeBabyImg"
              />
            </div>
            <div className="w-full">
              <p className="Font14sb">꼬물이</p>
              <p className="Font12">2022년 4월 5일 </p>
            </div>
            <div>
              <img src="/images/svgIcons/moreVertical.svg" alt="moreVertical" />
            </div>
          </div>
          <div className="object-cover w-full mb-6">
            <img
              className="object-cover w-full max-h-[22.5rem]"
              src="/images/RecipeDetails1.jpg"
              alt="RecipeDetails1"
            />
          </div>
          <div className="px-4">
            {/* 워터마크 및 사진내부 글 작성 필요 */}
            <p className="Font14">우리 아기 오늘도 잘 먹어줘서 고마워!</p>
          </div>
        </article>
      </section>
      {/* <More /> */}
      {/* <DeleteFeedback /> */}
    </>
  );
}
