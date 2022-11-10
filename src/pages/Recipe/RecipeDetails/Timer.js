import TimerHook from "../../../components/TimerHook";

export default function Timer({ closeTimerModal }) {
  return (
    <>
      <section className="z-[1000] fixed bottom-0 left-0 right-0 bg-GreyScale-White">
        <div className="z-[1001] flex items-center justify-between px-4 py-2">
          <div>
            <button className="flex items-center" onClick={closeTimerModal}>
              <img
                src="/images/svgIcons/suggestedSymbolX.svg"
                alt="suggestedSymbolX"
              />
            </button>
          </div>
          <TimerHook />
          {/* <div>
            <button className="flex items-center">
              <img src="/images/svgIcons/pause.svg" alt="pause" />
            </button>
          </div> */}
        </div>
        {/* <div
          className="absolute bottom-0 h-10 bg-BrandColor-green03 "
          style={{ width: "5%" }}
        ></div> */}
      </section>
    </>
  );
}
