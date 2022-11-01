import { Link } from "react-router-dom";
import RecipeItem from "../RecipeItem";

export default function IngredientDetails() {
  return (
    <>
      <section>
        <div>
          <div className="absolute w-full">
            <div className="flex items-center justify-between px-4 pt-8 text-center">
              <Link to="/Recipe/IngredientGuide">
                <div>
                  <img src="/images/svgIcons/back.svg" alt="back" />
                </div>
              </Link>
              <button className="flex gap-3">
                <img src="/images/svgIcons/heart24.svg" alt="heart24" />
              </button>
            </div>
          </div>
          <article className="border-b">
            <div className="h-[22.5rem]">
              <img
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                alt="RecipeAddMenuImg"
              />
            </div>
            <div className="flex flex-col w-full px-4 py-6 my-auto">
              <div className="flex items-center justify-between mb-2">
                <p className="Font20sb">쌀</p>
                <button>
                  <img src="/images/svgIcons/upload.svg" alt="upload" />
                </button>
              </div>
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
              </div>
            </div>
          </article>
          <article className="px-4 py-6 border-b">
            <div className="flex justify-between pb-2 border-b border-GreyScale-grey01">
              <p className="flex items-center Font16sb">기본정보</p>
            </div>
            <div className="py-2 border-b">
              <div className="flex justify-between Font14">
                <div className="flex gap-2">
                  <div></div>
                  <p>물</p>
                </div>
                <div className="w-[7.25rem] flex justify-between">
                  <p className="inline-block text-left">660ml</p>
                  <button className="Font12 border border-GreyScale-grey01 rounded-[52px] px-4 py-1">
                    대체
                  </button>
                </div>
              </div>
            </div>
            <div className="py-2 border-b">
              <div className="flex justify-between Font14">
                <div className="flex gap-2">
                  <div></div>
                  <p>쌀</p>
                </div>
                <div className="w-[7.25rem] flex justify-between">
                  <p className="inline-block text-left">48g</p>
                  <button className="Font12 border border-GreyScale-grey01 rounded-[52px] px-4 py-1">
                    대체
                  </button>
                </div>
              </div>
            </div>
            <div className="py-2 border-b">
              <div className="flex justify-between Font14">
                <div className="flex gap-2">
                  <div></div>
                  <p>소고기 안심</p>
                </div>
                <div className="w-[7.25rem] flex justify-between">
                  <p className="inline-block text-left">15g</p>
                  <button className="Font12 border border-GreyScale-grey01 rounded-[52px] px-4 py-1">
                    대체
                  </button>
                </div>
              </div>
            </div>
            <div className="py-2 border-b">
              <div className="flex justify-between Font14">
                <div className="flex gap-2">
                  <div></div>
                  <p>가지</p>
                </div>
                <div className="w-[7.25rem] flex justify-between">
                  <p className="inline-block text-left">15g</p>
                  <button className="Font12 border border-GreyScale-grey01 rounded-[52px] px-4 py-1">
                    대체
                  </button>
                </div>
              </div>
            </div>
            <div className="py-2 border-b">
              <div className="flex justify-between Font14">
                <div className="flex gap-2">
                  <div></div>
                  <p>달걀</p>
                </div>
                <div className="w-[7.25rem] flex justify-between">
                  <p className="inline-block text-left">15g</p>
                  <button className="Font12 border border-GreyScale-grey01 rounded-[52px] px-4 py-1">
                    대체
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 mt-4 rounded Font12 bg-GreyScale-grey05">
              - 도구, 필요한 용량, 끼니를 입력하여 정확한 재료의 양을
              확인하세요. - 가지고 있는 재료를 선택해 주세요. - 재료가 없는
              경우, 다른 재료로 대체할 수 있어요.
            </div>
          </article>
          <article className="px-4 py-6 border-b">
            <div className="flex items-center gap-2 mb-4 Font16sb">
              알아두세요
            </div>
            <p className="mb-2 Font14sb">1. 쌀은 아기에게 영양가가 많나요?</p>
            <p className="mb-4 Font14">
              쌀에 들어 있는 단백질은 6~7%로 밀보다 함유량이 적으나 질적인
              면에서 훨씬 우수하다. 대부분이 전분질로 되어 있으며 단위 중량당
              열량은 다른 곡물보다 훨씬 높아 인구부양 능력이 곡물 중에서
              으뜸이다.
              <br />
              <br /> 지방질은 올레익산, 리놀레익산, 팔미틱산 등 불포화지방산으로
              주로 쌀겨층이나 배아에 분포되어 있다. 현미의 경우 2~3%, 백미의
              경우 0.5% 정도 함유하고 있다. 탄수화물은 그 비중이 78%로 가장
              높은데, 대부분이 전분으로 되어 있다. 또한 비타민 B와 E, 인,
              마그네슘 등을 함유하고 있으며 무기질은 인이 많고 칼슘이 적다.
              <br />
              <br /> 쌀을 주식으로 하는 경우 성인병 등 각종 질병 예방 및 퇴치에
              탁월한 효과를 볼 수 있다. 쌀 음식을 주기적으로 섭취하면 대장에서의
              발효과정에서 낙산이 생겨나 대장암의 발생을 억제시키며 혈중
              콜레스테롤을 낮춰준다. 쌀에 함유된 섬유질 성분은 구리, 아연, 철
              성분 등과 결합해 해로운 중금속이 인체에 흡수되는 것을 막아준다.
              또한 수분 유지력이 커서 변비를 막고 인슐린 분비는 적어 비만,
              고혈압, 동맥경화증 등 성인병의 예방을 돕는다.
            </p>
            <p className="mb-2 Font14sb">2. 변비 해결에 도움을 주나요?</p>
            <p className="mb-4 Font14">
              쌀에 들어 있는 단백질은 6~7%로 밀보다 함유량이 적으나 질적인
              면에서 훨씬 우수하다. 대부분이 전분질로 되어 있으며 단위 중량당
              열량은 다른 곡물보다 훨씬 높아 인구부양 능력이 곡물 중에서
              으뜸이다.
            </p>
            <div className="inline-block Font14">
              <button className="mr-2 mb-2 border bg-BrandColor-green04 border-BrandColor-green03 rounded-[25px] px-2">
                #쌀영양소
              </button>
              <button className="mr-2 mb-2 border bg-BrandColor-green04 border-BrandColor-green03 rounded-[25px] px-2">
                #쌀보관
              </button>
              <button className="mr-2 mb-2 border bg-BrandColor-green04 border-BrandColor-green03 rounded-[25px] px-2">
                #유기농쌀
              </button>
              <button className="mr-2 mb-2 border bg-BrandColor-green04 border-BrandColor-green03 rounded-[25px] px-2">
                #쌀손질방법
              </button>
              <button className="mr-2 mb-2 border bg-BrandColor-green04 border-BrandColor-green03 rounded-[25px] px-2">
                #쌀이유식
              </button>
              <button className="mr-2 mb-2 border bg-BrandColor-green04 border-BrandColor-green03 rounded-[25px] px-2">
                #친환경쌀
              </button>
            </div>
          </article>
          <article className="py-6 border-b">
            <div>
              <p className="px-4 mb-4 Font16sb">제공 방법</p>
              <div>
                <div className="h-0 pb-[100%] overflow-hidden relative z-0">
                  <img
                    className="absolute object-cover w-full h-full"
                    src="/images/RecipeDetails4.jpg"
                    alt="RecipeDetails4"
                  />
                </div>
                <div className="px-4 pt-6 Font14">
                  <p className="Font14sb">초기</p>
                  <p>
                    쌀은 아기가 태어나는 대로 도입될 수 있다. 고체를 시작할
                    준비가 된 일반적으로 생후 6개월 정도입니다. 다만 쌀과 쌀아
                    제품(아기들을 위해 만든 유기농 쌀 시리얼 포함)에는 미량의
                    비소(유독 금속)이 함유돼 있다는 점을 지적할 필요가 있다.
                    그런 만큼 아기에게 쌀 시리얼을 대접하는 것은 피해야 한다는
                    것이 우리의 의견입니다.
                  </p>
                  <p className="Font14sb">중기</p>
                  <p>
                    쌀은 아기가 태어나는 대로 도입될 수 있다. 고체를 시작할
                    준비가 된 일반적으로 생후 6개월 정도입니다. 다만 쌀과 쌀아
                    제품(아기들을 위해 만든 유기농 쌀 시리얼 포함)에는 미량의
                    비소(유독 금속)이 함유돼 있다는 점을 지적할 필요가 있다.
                    그런 만큼 아기에게 쌀 시리얼을 대접하는 것은 피해야 한다는
                    것이 우리의 의견입니다.
                  </p>
                  <p className="Font14sb">후기</p>
                  <p>
                    쌀은 아기가 태어나는 대로 도입될 수 있다. 고체를 시작할
                    준비가 된 일반적으로 생후 6개월 정도입니다. 다만 쌀과 쌀아
                    제품(아기들을 위해 만든 유기농 쌀 시리얼 포함)에는 미량의
                    비소(유독 금속)이 함유돼 있다는 점을 지적할 필요가 있다.
                    그런 만큼 아기에게 쌀 시리얼을 대접하는 것은 피해야 한다는
                    것이 우리의 의견입니다.
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="px-4 py-6 border-b">
            <p className="pb-4 Font16sb">손질법</p>
            <div>(동영상)</div>
          </article>
          <article className="px-4 py-6 border-b">
            <p className="pb-4 Font16sb">보관법</p>
            <div>(동영상)</div>
            <p className="Font14">
              1인분씩 밀폐 용기에 담아 냉장 보관하세요.
              <br /> 3일 이상은 권장하지 않습니다.
            </p>
          </article>
          <article className="px-4 py-6 border-b">
            <p className="Font16sb">검증단 및 출처</p>
            <div className="flex flex-col py-4 mb-4 border-b gap-y-4">
              <div className="flex gap-2">
                <img
                  src="/images/svgIcons/verificationTeam1.svg"
                  alt="verificationTeam1"
                />
                <div>
                  <p className="Font14sb">데이비드 오</p>
                  <p className="Font12 text-GreyScale-grey02">
                    분당차병원 소아과 전문의
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <img
                  src="/images/svgIcons/verificationTeam2.svg"
                  alt="verificationTeam1"
                />
                <div>
                  <p className="Font14sb">정지윤</p>
                  <p className="Font12 text-GreyScale-grey02">
                    분당차병원 소아과 전문의
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <img
                  src="/images/svgIcons/verificationTeam3.svg"
                  alt="verificationTeam1"
                />
                <div>
                  <p className="Font14sb">엘렌 킴</p>
                  <p className="Font12 text-GreyScale-grey02">영양사</p>
                </div>
              </div>
            </div>
            <div className="Font11">
              1) Consumer Reports. (2012). Arsenic in your food. Retrieved May
              21, 2020
              <br /> 2) McGee, Harold. 1984. On food and cooking: the science
              and lore of the kitchen. New York, NY: Scribner.Tucker, A. (2018).
              <br /> 3) Here’s the verdict on if rice is healthy, including
              brown versus white. Well + Good. Retrieved May 21, 2020Consumer
              Reports. (2012). <br /> 4) Arsenic in your food. Retrieved May 21,
              2020.Consumer Reports. (2012). <br /> 5) Arsenic in your food.
              Retrieved May 21, 2020.U.S. Food & Drug Administration. (2017).{" "}
              <br /> 6) Supporting Document for Draft Guidance for Industry on
              Inorganic Arsenic in Rice Cereals for Infants: Action Level.
              Retrieved May 21, 2020
            </div>
          </article>
          <article className="px-4 py-6 border-b">
            <p className="Font16sb">추천 레시피</p>
            <RecipeItem />
            <RecipeItem />
            <RecipeItem />
          </article>
        </div>
      </section>
      {/* <DeleteMaterialPopUp /> */}
      {/* <StopTimer /> */}
      {/* <Amount /> */}
      {/* <Substitutes /> */}
    </>
  );
}
