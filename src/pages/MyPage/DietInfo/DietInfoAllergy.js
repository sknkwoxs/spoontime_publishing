import { Link } from "react-router-dom";
import DietInfoAllergyRecommendationChange from "./DietInfoAllergyRecommendationChange";

export default function DietInfoAllergy() {
  const allergyList = [
    {
      for: "eggCheckbox",
      id: "eggCheckbox",
      src: "/images/ingredients/egg.svg",
      alt: "egg",
      allergyName: "달걀",
    },
    {
      for: "milkCheckbox",
      id: "milkCheckbox",
      src: "/images/ingredients/milk.svg",
      alt: "milk",
      allergyName: "우유",
    },
    {
      for: "wheatCheckbox",
      id: "wheatCheckbox",
      src: "/images/ingredients/default.svg",
      alt: "wheat",
      allergyName: "밀",
    },
    {
      for: "buckwheatCheckbox",
      id: "buckwheatCheckbox",
      src: "/images/ingredients/default.svg",
      alt: "buckwheat",
      allergyName: "메밀",
    },
    {
      for: "beansCheckbox",
      id: "beansCheckbox",
      src: "/images/ingredients/beans.svg",
      alt: "beans",
      allergyName: "대두",
    },
  ];

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
            <p className="Font16sb">알레르기</p>
          </div>
        </div>

        <article>
          <div className="px-4 mb-9">
            <ul>
              <form className="grid grid-cols-4 gap-4 selectForm Font12 text-GreyScale-grey01">
                {allergyList.map((allergyList, index) => {
                  return (
                    <li className="mx-auto text-center" key={index}>
                      <input id={allergyList.id} type="checkbox" />
                      <label htmlFor={allergyList.for}>
                        <img
                          className="mx-auto mb-1"
                          src={allergyList.src}
                          alt={allergyList.alt}
                        />
                        {allergyList.allergyName}
                      </label>
                    </li>
                  );
                })}
              </form>
            </ul>
          </div>
          <div className="px-4">
            <form className="Font12 text-GreyScale-grey01 reactionsForm">
              <input id="reactions" type="checkbox" />
              <label
                className="flex justify-center w-full py-3 text-center border rounded Font12 text-BrandColor-green01 border-GreyScale-grey04"
                htmlFor="reactions"
              >
                아직까지는 이상 반응이 없었어요
              </label>
            </form>
          </div>
        </article>
      </section>
      <section className="fixed bottom-0 w-full">
        <div className="w-full">
          <button className="w-full py-3 text-GreyScale-White bg-BrandColor-green01">
            알레르기 수정하기
          </button>
          {/* <button className="w-full py-3 pb-11 text-GreyScale-White bg-GreyScale-grey04">
            알레르기 수정하기
          </button> */}
        </div>
      </section>
      {/* <DietInfoAllergyRecommendationChange /> */}
    </>
  );
}
