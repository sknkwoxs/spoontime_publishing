import { useState } from "react";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";

import RecipeItem from "../RecipeItem";
import Amount from "./Amount";
import DeleteMaterialPopUp from "./DeleteMaterialPopUp";
import StopTimer from "./StopTimer";
import Substitutes from "./Substitutes";
import TimerHook from "../../../components/TimerHook";

export default function RecipeDetails() {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openTimerModal, setOpenTimerModal] = useState(false);
  const [openStopTimerModal, setOpenStopTimerModal] = useState(false);

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <>
      <section>
        <div>
          <div className="absolute w-full">
            <div className="flex items-center justify-between px-4 pt-8 text-center">
              <Link to="/Recipe">
                <div>
                  <img src="/images/svgIcons/back.svg" alt="back" />
                </div>
              </Link>
              <div className="flex gap-3">
                <img
                  src="/images/svgIcons/recipeDetailsHeart.svg"
                  alt="recipeDetailsHeart"
                />
                <img
                  src="/images/svgIcons/calendarWhite.svg"
                  alt="calendarWhite"
                />
              </div>
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
                <p className="Font20sb">한우가지로메인죽</p>
                <button>
                  <img src="/images/svgIcons/upload.svg" alt="upload" />
                </button>
              </div>
              <div className="flex Font12 text-GreyScale-grey02">
                <div className="flex items-center gap-1 mr-2">
                  <img src="/images/svgIcons/baby.svg" alt="baby" />
                  <p>중기</p>
                </div>
                <div className="flex items-center gap-1 mr-2">
                  <img src="/images/svgIcons/clock.svg" alt="clock" />
                  <p>30분</p>
                </div>
              </div>
            </div>
          </article>
          <article className="px-4 py-6 border-b">
            <div className="flex justify-between pb-2 border-b border-GreyScale-grey01">
              <p className="flex items-center Font16sb">식재료</p>
              <p className="Font12 border border-GreyScale-grey01 rounded-[19px] px-4 py-1">
                냄비 / 120g 기준 / 3끼
              </p>
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
            <div className="p-4 mt-4 rounded Font12 bg-GreyScale-grey05 text-GreyScale-grey02">
              - 도구, 필요한 용량, 끼니를 입력하여 정확한 재료의 양을
              확인하세요.
              <br /> - 가지고 있는 재료를 선택해 주세요.
              <br /> - 재료가 없는 경우, 다른 재료로 대체할 수 있어요.
            </div>
          </article>
          <article className="px-4 py-6 border-b">
            <div className="flex items-center gap-2 mb-4 Font16sb">
              <img src="/images/svgIcons/miniLogo.svg" alt="miniLogo" />
              스푼타임 Advise
            </div>
            <p className="mb-4 Font14">
              말만 들어도 맛있는 한우가지로메인 죽 레시피를 알려드려요. 철분이
              풍부한 소고기와 가지의 풍미가 엄마도 배고프게 만들어준답니다.
              로메인의 아삭한 식감이 남도록 약간은 크게 썰어주세요. 식이섬유가
              풍부한 로메인이 아기의 배변 활동도 도와준답니다. 간단하고 맛있게
              먹을 수 있는 한우가지로메인 레시피 추천해요.
            </p>
            <div className="flex gap-2 Font14">
              <button className="border bg-BrandColor-green04 border-BrandColor-green03 rounded-[25px] px-2">
                #식이섬유풍부
              </button>
              <button className="border bg-BrandColor-green04 border-BrandColor-green03 rounded-[25px] px-2">
                #향이있는
              </button>
            </div>
          </article>
          <article className="py-6 border-b">
            <div>
              <div className="flex justify-between px-4 pb-4">
                <p className="Font16sb">Step 1</p>
                <button
                  className="Font12sb flex items-center bg-ContentsColor-heart text-GreyScale-White gap-1 px-4 py-1 rounded-[19px]"
                  onClick={() => setOpenTimerModal(!openTimerModal)}
                >
                  <img src="/images/svgIcons/timer.svg" alt="timer" />
                  30분
                </button>
              </div>
              <div>
                {/* <div className="h-0 pb-[100%] overflow-hidden relative z-0">
                  <img
                    className="absolute object-cover w-full h-full"
                    src="/images/RecipeDetails4.jpg"
                    alt="RecipeDetails4"
                  />
                </div>
                <div className="flex gap-4 p-4">
                  <div className="max-w-[64px] max-h-[64px] border-[2px]  rounded">
                    <img
                      className="object-cover w-full h-full rounded "
                      src="/images/RecipeDetails4.jpg"
                      alt="RecipeDetails4"
                    />
                  </div>
                  <div className="max-w-[64px] max-h-[64px]">
                    <img
                      className="object-cover w-full h-full rounded "
                      src="/images/RecipeDetails3.jpg"
                      alt="RecipeDetails3"
                    />
                  </div>
                  <div className="max-w-[64px] max-h-[64px]">
                    <img
                      className="object-cover w-full h-full rounded "
                      src="/images/RecipeDetails2.jpg"
                      alt="RecipeDetails2"
                    />
                  </div>
                </div> */}
                <ImageGallery
                  items={images}
                  showNav={false}
                  showPlayButton={false}
                  showFullscreenButton={false}
                />
                <p className="px-4 pt-2 mb-12 Font14">
                  소고기는 키친타월에 올려 핏물을 제거해 주세요. 볼에 불고기
                  양념 재료를 넣고 섞은 후 소고기를 넣고 버무려주세요.
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between px-4 pb-4">
                <p className="Font16sb">Step 2</p>
                <button className="Font12sb flex items-center bg-ContentsColor-heart text-GreyScale-White gap-1 px-4 py-1 rounded-[19px]">
                  <img src="/images/svgIcons/timer.svg" alt="timer" />
                  15분
                </button>
              </div>
              <div>
                <ImageGallery
                  items={images}
                  showNav={false}
                  showPlayButton={false}
                  showFullscreenButton={false}
                />
                <div className="px-4 mt-2 Font14">
                  <p className="mb-4">
                    가지는 비스듬히 도톰하게 썰어주세요. 팬에 올리브오일을 약간
                    두른 후 가지를 넣고 소금 후추로 간을 해 앞뒤로 노릇하게
                    구워주세요.
                  </p>
                  <button className="Font12 block px-4 py-1 border  rounded-[19px]">
                    가지 손질법
                  </button>
                </div>
              </div>
            </div>
          </article>
          <article className="px-4 py-6 border-b">
            <p className="pb-4 Font16sb">보관법</p>
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
              21, 2020 2) McGee, Harold. 1984. On food and cooking: the science
              and lore of the kitchen. New York, NY: Scribner.Tucker, A. (2018).
              3) Here’s the verdict on if rice is healthy, including brown
              versus white. Well + Good. Retrieved May 21, 2020Consumer Reports.
              (2012). 4) Arsenic in your food. Retrieved May 21, 2020.Consumer
              Reports. (2012). 5) Arsenic in your food. Retrieved May 21,
              2020.U.S. Food & Drug Administration. (2017). 6) Supporting
              Document for Draft Guidance for Industry on Inorganic Arsenic in
              Rice Cereals for Infants: Action Level. Retrieved May 21, 2020
            </div>
          </article>
          <article className="px-4 py-6 border-b">
            <p className="Font16sb">추천 레시피</p>
            <div className="max-h-[11.25rem] overflow-auto">
              <RecipeItem />
              <RecipeItem />
              <RecipeItem />
            </div>
          </article>
        </div>
      </section>
      {openDeleteModal && (
        <DeleteMaterialPopUp
          closeDeleteModal={() => setOpenDeleteModal(!openDeleteModal)}
        />
      )}
      {openTimerModal && (
        <TimerHook closeTimerModal={() => setOpenTimerModal(!openTimerModal)} />
      )}
      {openStopTimerModal && (
        <StopTimer
          closeStopTimerModal={() => setOpenStopTimerModal(!openStopTimerModal)}
        />
      )}
      {/* <Amount /> */}
      {/* <Substitutes /> */}
    </>
  );
}
