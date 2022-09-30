export default function SearchIngredient() {
  const vegetablesList = [
    {
      src: "/images/ingredients/eggplant.svg",
      alt: "eggplant",
      name: "가지",
    },
    {
      src: "/images/ingredients/potato.svg",
      alt: "potato",
      name: "감자",
    },
    {
      src: "/images/ingredients/pea.svg",
      alt: "pea",
      name: "완두콩",
    },
    {
      src: "/images/ingredients/carrot.svg",
      alt: "carrot",
      name: "당근",
    },
    {
      src: "/images/ingredients/cabbage.svg",
      alt: "cabbage",
      name: "양배추",
    },
    {
      src: "/images/ingredients/broccoli.svg",
      alt: "broccoli",
      name: "브로콜리",
    },
    {
      src: "/images/ingredients/beet.svg",
      alt: "beet",
      name: "비트",
    },
    {
      src: "/images/ingredients/onion.svg",
      alt: "onion",
      name: "양파",
    },
    {
      src: "/images/ingredients/paprika.svg",
      alt: "paprika",
      name: "파프리카",
    },
    {
      src: "/images/ingredients/cucumber.svg",
      alt: "cucumber",
      name: "오이",
    },
    {
      src: "/images/ingredients/corn.svg",
      alt: "corn",
      name: "옥수수",
    },
    {
      src: "/images/ingredients/tomato.svg",
      alt: "tomato",
      name: "토마토",
    },
    {
      src: "/images/ingredients/pumpkin.svg",
      alt: "pumpkin",
      name: "호박",
    },
  ];

  const proteinsList = [
    {
      src: "/images/ingredients/crab.svg",
      alt: "crab",
      name: "가지",
    },
    {
      src: "/images/ingredients/fish.svg",
      alt: "fish",
      name: "생선",
    },
    {
      src: "/images/ingredients/oyster.svg",
      alt: "oyster",
      name: "굴",
    },
    {
      src: "/images/ingredients/egg.svg",
      alt: "egg",
      name: "달걀",
    },
  ];

  return (
    <>
      <div>
        <div className="px-4">
          <div className="flex justify-between py-4 mb-6">
            <button>
              <img
                src="/images/svgIcons/SearchIngredientX.svg"
                alt="SearchIngredientX"
              />
            </button>
            <p className="Font16sb">식재료 선택</p>
            <button className="Font12 text-BrandColor-green01">초기화</button>
          </div>
          <div className="mb-10">
            <p className="mb-2 Font16sb">식재료 선택 (최대 5개)</p>
            <p className="Font12 text-GreyScale-grey02">
              식재료를 선택하여 해당 식재료들로 만들어진 다양한 레시피를
              <br /> 검색해 보세요.
            </p>
          </div>
          <div>
            <div>
              <p className="mb-5 Font14sb">
                야채류&nbsp;<span className="text-BrandColor-green03">3</span>
              </p>
              <ul className="grid grid-cols-4 mb-6 gap-y-4 gap-x-6">
                {vegetablesList.map((vegetablesList, index) => {
                  return (
                    <li
                      className="max-h-[4rem] px-5 py-3 mx-auto text-center Font12 whitespace-nowrap flex flex-col items-center justify-center"
                      key={index}
                    >
                      <img
                        className="mb-1"
                        src={vegetablesList.src}
                        alt={vegetablesList.alt}
                      />
                      {vegetablesList.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <p className="mb-5 Font14sb">
                단백질류&nbsp;
                <span className="text-BrandColor-green03">2</span>
              </p>
              <ul className="grid grid-cols-4">
                {proteinsList.map((proteinsList, index) => {
                  return (
                    <li
                      className="max-h-[4rem] px-5 py-3 mx-auto text-center border rounded Font12 whitespace-nowrap flex flex-col items-center justify-center border-BrandColor-green03 bg-BrandColor-green04"
                      key={index}
                    >
                      <img
                        className="mb-1"
                        src={proteinsList.src}
                        alt={proteinsList.alt}
                      />
                      {proteinsList.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <section className="fixed bottom-0 w-full">
          <div className="w-full">
            {/* <button className="w-full py-3 pb-11 text-GreyScale-White bg-BrandColor-green01">
              다음
            </button> */}
            <button className="w-full py-3 pb-11 text-GreyScale-White bg-BrandColor-green01">
              식재료 선택하기
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
