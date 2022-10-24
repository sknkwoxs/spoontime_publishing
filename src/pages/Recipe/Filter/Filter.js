import { useEffect } from "react";

export default function Filter() {
  // 외부 화면 스크롤 방지
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

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

  const statusList = [
    {
      for: "eggCheckbox",
      id: "eggCheckbox",
      src: "/images/ingredients/default.svg",
      alt: "default",
      status: "감기/고열",
    },
    {
      for: "milkCheckbox",
      id: "milkCheckbox",
      src: "/images/ingredients/default.svg",
      alt: "default",
      status: "변비",
    },
    {
      for: "wheatCheckbox",
      id: "wheatCheckbox",
      src: "/images/ingredients/default.svg",
      alt: "default",
      status: "설사",
    },
    {
      for: "buckwheatCheckbox",
      id: "buckwheatCheckbox",
      src: "/images/ingredients/default.svg",
      alt: "default",
      status: "이앓이",
    },
  ];

  const stepList = [
    {
      for: "step1",
      id: "step1",
      src: "/images/defaultImage.png",
      alt: "default",
      step: "초기 1",
      recommend: "권장 150~190일",
      description: "10~ 20배죽의 주르륵 흘러내리는 묽은 수프 농도",
    },
    {
      for: "step2",
      id: "step2",
      src: "/images/defaultImage.png",
      alt: "default",
      step: "초기 2",
      recommend: "권장 150~190일",
      description: "10~ 20배죽의 주르륵 흘러내리는 묽은 수프 농도",
    },
    {
      for: "step3",
      id: "step3",
      src: "/images/defaultImage.png",
      alt: "default",
      step: "중기",
      recommend: "권장 150~190일",
      description: "10~ 20배죽의 주르륵 흘러내리는 묽은 수프 농도",
    },
    {
      for: "step4",
      id: "step4",
      src: "/images/defaultImage.png",
      alt: "default",
      step: "후기",
      recommend: "권장 150~190일",
      description: "10~ 20배죽의 주르륵 흘러내리는 묽은 수프 농도",
    },
    {
      for: "step5",
      id: "step5",
      src: "/images/defaultImage.png",
      alt: "default",
      step: "초기 1",
      recommend: "권장 150~190일",
      description: "10~ 20배죽의 주르륵 흘러내리는 묽은 수프 농도",
    },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"></div>
      <section className="z-[1000] fixed bottom-0 left-0 right-0 px-4 bg-GreyScale-White rounded-t-2xl">
        <p className="pt-8 mb-2 Font16sb">
          <span className="text-BrandColor-green02">꼬물이</span> 맞춤정보
        </p>
        <div>
          <div className="flex gap-5 border-b Font14sb text-GreyScale-grey03">
            <button className="px-1 pb-2 border-b-2 border-GreyScale-grey01">
              알레르기
            </button>
            <button className="px-1 pb-2">상태</button>
            <button className="px-1 pb-2">단계</button>
          </div>

          {/* Allergy */}
          {/* <ul className="mt-5 border-b">
            <form className="grid grid-cols-4 gap-4 mb-3 selectForm Font12 text-GreyScale-grey01">
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
          </ul> */}

          {/* Status */}
          {/* <ul className="mt-5 border-b">
            <form className="grid grid-cols-4 gap-4 mb-3 selectForm Font12 text-GreyScale-grey01">
              {statusList.map((statusList, index) => {
                return (
                  <li className="mx-auto text-center" key={index}>
                    <input id={statusList.id} type="checkbox" />
                    <label
                      className="max-w-[64px] whitespace-nowrap"
                      htmlFor={statusList.for}
                    >
                      <img
                        className="mx-auto mb-1"
                        src={statusList.src}
                        alt={statusList.alt}
                      />
                      {statusList.status}
                    </label>
                  </li>
                );
              })}
            </form>
          </ul> */}

          {/* Step */}
          <ul className="border-b">
            <form className="grid grid-cols-1 pb-3 gap-y-2 stepFilterForm Font12 text-GreyScale-grey01 max-h-[16.75rem] overflow-auto pt-5">
              {stepList.map((stepList, index) => {
                return (
                  <li className="mx-auto text-center" key={index}>
                    <input id={stepList.id} type="radio" name="stepFilter" />
                    <label htmlFor={stepList.for}>
                      <div className="grid items-center w-full grid-cols-[max(56px)_1fr] p-2 gap-4 text-left rounded">
                        <div className="rounded h-0 pb-[100%] overflow-hidden relative">
                          <img
                            className="absolute object-cover w-full h-full rounded"
                            src={stepList.src}
                            alt={stepList.alt}
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <p className="Font14sb">{stepList.step}</p>
                            <p className="text-GreyScale-grey02 font-normal text-[0.625rem] leading-[1rem px-2 bg-BrandColor-green04 rounded">
                              {stepList.recommend}
                            </p>
                          </div>
                          <p className="text-GreyScale-grey02 Font12">
                            {stepList.description}
                          </p>
                        </div>
                      </div>
                    </label>
                  </li>
                );
              })}
            </form>
          </ul>
          {/*  */}
        </div>
        <div className="flex py-4">
          <div className="flex w-full">
            <button className="flex items-center gap-2 Font14sb">
              <img src="/images/svgIcons/rotation.svg" alt="rotation" />
              옵션 재설정
            </button>
          </div>
          <button className="w-full py-3 rounded-lg Font16sb text-GreyScale-White bg-BrandColor-green01">
            적용하기
          </button>
        </div>
      </section>
    </>
  );
}
