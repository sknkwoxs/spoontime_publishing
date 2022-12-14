import { useState } from "react";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";

import RecipeItem from "../RecipeItem";
import Amount from "./Amount";
import DeleteMaterialPopUp from "./DeleteMaterialPopUp";
import StopTimer from "./StopTimer";
import Substitutes from "./Substitutes";
import Timer from "./Timer";

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
                <p className="Font20sb">????????????????????????</p>
                <button>
                  <img src="/images/svgIcons/upload.svg" alt="upload" />
                </button>
              </div>
              <div className="flex Font12 text-GreyScale-grey02">
                <div className="flex items-center gap-1 mr-2">
                  <img src="/images/svgIcons/baby.svg" alt="baby" />
                  <p>??????</p>
                </div>
                <div className="flex items-center gap-1 mr-2">
                  <img src="/images/svgIcons/clock.svg" alt="clock" />
                  <p>30???</p>
                </div>
              </div>
            </div>
          </article>
          <article className="px-4 py-6 border-b">
            <div className="flex justify-between pb-2 border-b border-GreyScale-grey01">
              <p className="flex items-center Font16sb">?????????</p>
              <p className="Font12 border border-GreyScale-grey01 rounded-[19px] px-4 py-1">
                ?????? / 120g ?????? / 3???
              </p>
            </div>
            <div className="py-2 border-b">
              <div className="flex justify-between Font14">
                <div className="flex gap-2">
                  <div></div>
                  <p>???</p>
                </div>
                <div className="w-[7.25rem] flex justify-between">
                  <p className="inline-block text-left">660ml</p>
                  <button className="Font12 border border-GreyScale-grey01 rounded-[52px] px-4 py-1">
                    ??????
                  </button>
                </div>
              </div>
            </div>
            <div className="py-2 border-b">
              <div className="flex justify-between Font14">
                <div className="flex gap-2">
                  <div></div>
                  <p>???</p>
                </div>
                <div className="w-[7.25rem] flex justify-between">
                  <p className="inline-block text-left">48g</p>
                  <button className="Font12 border border-GreyScale-grey01 rounded-[52px] px-4 py-1">
                    ??????
                  </button>
                </div>
              </div>
            </div>
            <div className="py-2 border-b">
              <div className="flex justify-between Font14">
                <div className="flex gap-2">
                  <div></div>
                  <p>????????? ??????</p>
                </div>
                <div className="w-[7.25rem] flex justify-between">
                  <p className="inline-block text-left">15g</p>
                  <button className="Font12 border border-GreyScale-grey01 rounded-[52px] px-4 py-1">
                    ??????
                  </button>
                </div>
              </div>
            </div>
            <div className="py-2 border-b">
              <div className="flex justify-between Font14">
                <div className="flex gap-2">
                  <div></div>
                  <p>??????</p>
                </div>
                <div className="w-[7.25rem] flex justify-between">
                  <p className="inline-block text-left">15g</p>
                  <button className="Font12 border border-GreyScale-grey01 rounded-[52px] px-4 py-1">
                    ??????
                  </button>
                </div>
              </div>
            </div>
            <div className="py-2 border-b">
              <div className="flex justify-between Font14">
                <div className="flex gap-2">
                  <div></div>
                  <p>??????</p>
                </div>
                <div className="w-[7.25rem] flex justify-between">
                  <p className="inline-block text-left">15g</p>
                  <button className="Font12 border border-GreyScale-grey01 rounded-[52px] px-4 py-1">
                    ??????
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 mt-4 rounded Font12 bg-GreyScale-grey05 text-GreyScale-grey02">
              - ??????, ????????? ??????, ????????? ???????????? ????????? ????????? ??????
              ???????????????.
              <br /> - ????????? ?????? ????????? ????????? ?????????.
              <br /> - ????????? ?????? ??????, ?????? ????????? ????????? ??? ?????????.
            </div>
          </article>
          <article className="px-4 py-6 border-b">
            <div className="flex items-center gap-2 mb-4 Font16sb">
              <img src="/images/svgIcons/miniLogo.svg" alt="miniLogo" />
              ???????????? Advise
            </div>
            <p className="mb-4 Font14">
              ?????? ????????? ????????? ????????????????????? ??? ???????????? ???????????????. ?????????
              ????????? ???????????? ????????? ????????? ????????? ???????????? ?????????????????????.
              ???????????? ????????? ????????? ????????? ????????? ?????? ???????????????. ???????????????
              ????????? ???????????? ????????? ?????? ????????? ??????????????????. ???????????? ?????????
              ?????? ??? ?????? ????????????????????? ????????? ????????????.
            </p>
            <div className="flex gap-2 Font14">
              <button className="border bg-BrandColor-green04 border-BrandColor-green03 rounded-[25px] px-2">
                #??????????????????
              </button>
              <button className="border bg-BrandColor-green04 border-BrandColor-green03 rounded-[25px] px-2">
                #????????????
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
                  30???
                </button>
              </div>
              <div>
                <ImageGallery
                  items={images}
                  showNav={false}
                  showPlayButton={false}
                  showFullscreenButton={false}
                />
                <p className="px-4 pt-2 mb-12 Font14">
                  ???????????? ??????????????? ?????? ????????? ????????? ?????????. ?????? ?????????
                  ?????? ????????? ?????? ?????? ??? ???????????? ?????? ??????????????????.
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between px-4 pb-4">
                <p className="Font16sb">Step 2</p>
                <button className="Font12sb flex items-center bg-ContentsColor-heart text-GreyScale-White gap-1 px-4 py-1 rounded-[19px]">
                  <img src="/images/svgIcons/timer.svg" alt="timer" />
                  15???
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
                    ????????? ???????????? ???????????? ???????????????. ?????? ?????????????????? ??????
                    ?????? ??? ????????? ?????? ?????? ????????? ?????? ??? ????????? ????????????
                    ???????????????.
                  </p>
                  <button className="Font12 block px-4 py-1 border  rounded-[19px]">
                    ?????? ?????????
                  </button>
                </div>
              </div>
            </div>
          </article>
          <article className="px-4 py-6 border-b">
            <p className="pb-4 Font16sb">?????????</p>
            <p className="Font14">
              1????????? ?????? ????????? ?????? ?????? ???????????????.
              <br /> 3??? ????????? ???????????? ????????????.
            </p>
          </article>
          <article className="px-4 py-6 border-b">
            <p className="Font16sb">????????? ??? ??????</p>
            <div className="flex flex-col py-4 mb-4 border-b gap-y-4">
              <div className="flex gap-2">
                <div className="object-cover w-12 h-12 rounded-[100px]">
                  <img
                    className="w-full h-full rounded-[100px]"
                    src="/images/defaultImage.png"
                    alt="verificationTeam1"
                  />
                </div>
                <div>
                  <p className="Font14sb">???????????? ???</p>
                  <p className="Font12 text-GreyScale-grey02">
                    ??????????????? ????????? ?????????
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="object-cover w-12 h-12 rounded-[100px]">
                  <img
                    className="w-full h-full rounded-[100px]"
                    src="/images/defaultImage.png"
                    alt="verificationTeam1"
                  />
                </div>
                <div>
                  <p className="Font14sb">?????????</p>
                  <p className="Font12 text-GreyScale-grey02">
                    ??????????????? ????????? ?????????
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="object-cover w-12 h-12 rounded-[100px]">
                  <img
                    className="w-full h-full rounded-[100px]"
                    src="/images/defaultImage.png"
                    alt="verificationTeam1"
                  />
                </div>
                <div>
                  <p className="Font14sb">?????? ???</p>
                  <p className="Font12 text-GreyScale-grey02">?????????</p>
                </div>
              </div>
            </div>
            <div className="Font11">
              1) Consumer Reports. (2012). Arsenic in your food. Retrieved May
              21, 2020 2) McGee, Harold. 1984. On food and cooking: the science
              and lore of the kitchen. New York, NY: Scribner.Tucker, A. (2018).
              3) Here???s the verdict on if rice is healthy, including brown
              versus white. Well + Good. Retrieved May 21, 2020Consumer Reports.
              (2012). 4) Arsenic in your food. Retrieved May 21, 2020.Consumer
              Reports. (2012). 5) Arsenic in your food. Retrieved May 21,
              2020.U.S. Food & Drug Administration. (2017). 6) Supporting
              Document for Draft Guidance for Industry on Inorganic Arsenic in
              Rice Cereals for Infants: Action Level. Retrieved May 21, 2020
            </div>
          </article>
          <article className="px-4 py-6 border-b">
            <p className="Font16sb">?????? ?????????</p>
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
        <Timer closeTimerModal={() => setOpenTimerModal(!openTimerModal)} />
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
