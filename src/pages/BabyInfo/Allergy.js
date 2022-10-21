export default function Allergy() {
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
      <div className="w-full h-screen">
        <div className="px-4">
          <div className="relative">
            <button className="absolute mt-4">
              <img
                src="images/svgIcons/BabyInfoArrowsLeft.svg"
                alt="BabyInfoArrowsLeft"
              />
            </button>
            <p className="pt-4 mb-3 text-center Font16sb">아기정보</p>
          </div>
          <div className="mb-8">
            <div className="relative h-1 mb-10 bg-GreyScale-grey04">
              <div className="absolute h-1 bg-BrandColor-green03 w-[100%]" />
            </div>
            <p className="mb-6 Font20sb">
              아기가 못 먹는
              <br />
              식재료가 있나요?
            </p>
          </div>
        </div>
        <div className="px-4 mb-9">
          <p className="mb-10 Font12 text-GreyScale-grey02">
            이상 반응이 있었던 식재료들을 모두 선택해 주세요.
            <br /> 선택한 식재료는 언제든 수정할 수 있어요.
          </p>
          <ul>
            <form className="grid grid-cols-4 allergyForm Font12 text-GreyScale-grey01 gap-y-4">
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
        <section className="fixed bottom-0 w-full">
          <div className="w-full">
            <button
              className="w-full py-3 text-GreyScale-White bg-GreyScale-grey04"
              //  className="w-full py-3 text-GreyScale-White bg-BrandColor-green01"
            >
              다음
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
