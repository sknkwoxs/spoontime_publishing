import { useEffect, useState } from "react";

import IngredientGuideFilterContents from "./IngredientGuideFilterContents";
import IngredientGuideFilterNavItem from "./IngredientGuideFilterNavItem";

export default function IngredientGuideFilter({
  closeIngredientGuideFilterModal,
}) {
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

  // 탭
  const [activeTab, setActiveTab] = useState("filterIngestibleTab");

  // 데이터
  const ingestibleList = [
    {
      for: "4to6",
      id: "4to6",
      allergyName: "4~6개월",
    },
    {
      for: "7to8",
      id: "7to8",
      allergyName: "7~8개월",
    },
    {
      for: "9to11",
      id: "9to11",
      allergyName: "9~11개월",
    },
    {
      for: "12more",
      id: "12more",
      allergyName: "12개월 이상",
    },
  ];

  const riskList = [
    {
      for: "risk",
      id: "risk",
      risk: "알레르기 위험 있음",
    },
    {
      for: "noneRisk",
      id: "noneRisk",
      risk: "알레르기 위험 없음",
    },
  ];

  // 초기화 버튼
  const checkboxes = document.getElementsByName("list");

  const initCheckbox = () => {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"
        onClick={closeIngredientGuideFilterModal}
      ></div>
      <section className="z-[1000] drop-shadow-popup fixed bottom-0 left-0 right-0 px-4 bg-GreyScale-White rounded-t-2xl h-[300px]">
        <p className="pt-8 mb-2 Font16sb">
          <span className="text-BrandColor-green02">꼬물이</span> 맞춤정보
        </p>
        <div>
          <ul className="flex border-b Font14sb text-GreyScale-grey03 ingredientGuideFilterTab">
            <IngredientGuideFilterNavItem
              className="cursor-pointer"
              id="filterIngestibleTab"
              title="섭취 가능 시기"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <IngredientGuideFilterNavItem
              className="cursor-pointer"
              id="filterAllergyTab"
              title="알레르기 위험도"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </ul>

          {/* 섭취 가능 시기 */}
          <IngredientGuideFilterContents
            id="filterIngestibleTab"
            activeTab={activeTab}
          >
            <ul className="mt-4">
              <form className="flex gap-2 mb-3 ingredientGuideForm Font12 text-GreyScale-grey01">
                {ingestibleList.map((ingestibleList, index) => {
                  return (
                    <li key={index}>
                      <input
                        id={ingestibleList.id}
                        type="checkbox"
                        name="list"
                      />
                      <label
                        className="cursor-pointer"
                        htmlFor={ingestibleList.for}
                      >
                        {ingestibleList.allergyName}
                      </label>
                    </li>
                  );
                })}
              </form>
            </ul>
          </IngredientGuideFilterContents>

          {/* 알레르기 위험도 */}
          <IngredientGuideFilterContents
            id="filterAllergyTab"
            activeTab={activeTab}
          >
            <ul className="mt-4">
              <form className="flex gap-2 mb-3 ingredientGuideForm Font12 text-GreyScale-grey01">
                {riskList.map((riskList, index) => {
                  return (
                    <li key={index}>
                      <input id={riskList.id} type="checkbox" name="list" />
                      <label
                        className="cursor-pointer whitespace-nowrap"
                        htmlFor={riskList.for}
                      >
                        {riskList.risk}
                      </label>
                    </li>
                  );
                })}
              </form>
            </ul>
          </IngredientGuideFilterContents>
        </div>
        <div className="fixed bottom-0 left-0 right-0 px-4 ">
          <div className="flex w-full py-4 border-t">
            <button
              className="flex items-center w-full gap-2 Font14sb"
              onClick={initCheckbox}
            >
              <img src="/images/svgIcons/rotation.svg" alt="rotation" />
              옵션 재설정
            </button>
            <button className="min-w-[200px] py-3 rounded-lg Font16sb text-GreyScale-White bg-BrandColor-green01">
              레시피 보기
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
