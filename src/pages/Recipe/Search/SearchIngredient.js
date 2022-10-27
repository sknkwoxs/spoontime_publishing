export default function SearchIngredient() {
  // 초기화 버튼
  const checkboxes = document.getElementsByName("list");
  let checkboxesCount = 0;

  const initCheckbox = () => {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  const limitCheckbox = (Object) => {
    for (let i = 0; i < checkboxesCount.length; i++) {
      if (checkboxes[i].checked) {
        checkboxesCount++;
      }
    }
    if (checkboxesCount > 6) {
      alert("can't");
      Object.checked = false;
      return false;
    }
  };

  const vegetablesList = [
    {
      for: "eggplantCheckbox",
      id: "eggplantCheckbox",
      src: "/images/ingredients/eggplant.svg",
      alt: "eggplant",
      vegetables: "가지",
    },
    {
      for: "potatoCheckbox",
      id: "potatoCheckbox",
      src: "/images/ingredients/potato.svg",
      alt: "potato",
      vegetables: "감자",
    },
    {
      for: "peaCheckbox",
      id: "peaCheckbox",
      src: "/images/ingredients/pea.svg",
      alt: "pea",
      vegetables: "완두콩",
    },
    {
      for: "carrotCheckbox",
      id: "carrotCheckbox",
      src: "/images/ingredients/carrot.svg",
      alt: "carrot",
      vegetables: "당근",
    },
    {
      for: "cabbageCheckbox",
      id: "cabbageCheckbox",
      src: "/images/ingredients/cabbage.svg",
      alt: "cabbage",
      vegetables: "양배추",
    },
    {
      for: "broccoliCheckbox",
      id: "broccoliCheckbox",
      src: "/images/ingredients/broccoli.svg",
      alt: "broccoli",
      vegetables: "브로콜리",
    },
    {
      for: "beetCheckbox",
      id: "beetCheckbox",
      src: "/images/ingredients/beet.svg",
      alt: "beet",
      vegetables: "비트",
    },
    {
      for: "onionCheckbox",
      id: "onionCheckbox",
      src: "/images/ingredients/onion.svg",
      alt: "onion",
      vegetables: "양파",
    },
    {
      for: "paprikaCheckbox",
      id: "paprikaCheckbox",
      src: "/images/ingredients/paprika.svg",
      alt: "paprika",
      vegetables: "파프리카",
    },
    {
      for: "cucumberCheckbox",
      id: "cucumberCheckbox",
      src: "/images/ingredients/cucumber.svg",
      alt: "cucumber",
      vegetables: "오이",
    },
    {
      for: "cornCheckbox",
      id: "cornCheckbox",
      src: "/images/ingredients/corn.svg",
      alt: "corn",
      vegetables: "옥수수",
    },
    {
      for: "tomatoCheckbox",
      id: "tomatoCheckbox",
      src: "/images/ingredients/tomato.svg",
      alt: "tomato",
      vegetables: "토마토",
    },
    {
      for: "pumpkinCheckbox",
      id: "pumpkinCheckbox",
      src: "/images/ingredients/pumpkin.svg",
      alt: "pumpkin",
      vegetables: "호박",
    },
  ];

  const proteinsList = [
    {
      for: "crabCheckbox",
      id: "crabCheckbox",
      src: "/images/ingredients/crab.svg",
      alt: "crab",
      proteins: "게",
    },
    {
      for: "fishCheckbox",
      id: "fishCheckbox",
      src: "/images/ingredients/fish.svg",
      alt: "fish",
      proteins: "생선",
    },
    {
      for: "oysterCheckbox",
      id: "oysterCheckbox",
      src: "/images/ingredients/oyster.svg",
      alt: "oyster",
      proteins: "굴",
    },
    {
      for: "eggCheckbox",
      id: "eggCheckbox",
      src: "/images/ingredients/egg.svg",
      alt: "egg",
      proteins: "달걀",
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
            <button
              className="Font12 text-BrandColor-green01"
              onClick={initCheckbox}
            >
              초기화
            </button>
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

              <ul>
                <form className="grid grid-cols-4 gap-4 mb-5 selectForm Font12 text-GreyScale-grey01">
                  {vegetablesList.map((vegetablesList, index) => {
                    return (
                      <li className="mx-auto text-center" key={index}>
                        <input
                          id={vegetablesList.id}
                          type="checkbox"
                          name="list"
                        />
                        <label
                          htmlFor={vegetablesList.for}
                          onClick={limitCheckbox}
                        >
                          <img
                            className="mx-auto mb-1"
                            src={vegetablesList.src}
                            alt={vegetablesList.alt}
                          />
                          {vegetablesList.vegetables}
                        </label>
                      </li>
                    );
                  })}
                </form>
              </ul>
            </div>
            <div>
              <p className="mb-5 Font14sb">
                단백질류&nbsp;
                <span className="text-BrandColor-green03">2</span>
              </p>
              <ul>
                <form className="grid grid-cols-4 gap-4 mb-5 selectForm Font12 text-GreyScale-grey01">
                  {proteinsList.map((proteinsList, index) => {
                    return (
                      <li className="mx-auto text-center" key={index}>
                        <input
                          id={proteinsList.id}
                          type="checkbox"
                          name="list"
                        />
                        <label htmlFor={proteinsList.for}>
                          <img
                            className="mx-auto mb-1"
                            src={proteinsList.src}
                            alt={proteinsList.alt}
                          />
                          {proteinsList.proteins}
                        </label>
                      </li>
                    );
                  })}
                </form>
              </ul>
            </div>
          </div>
        </div>
        <section className="fixed bottom-0 w-full">
          <div className="w-full">
            <button className="w-full py-3 text-GreyScale-White bg-BrandColor-green01">
              식재료 선택하기
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
