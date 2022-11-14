import TimerHook from "../../../components/TimerHook";

export default function Timer({ closeTimerModal }) {
  const progress_bars = document.querySelectorAll(".progress");

  progress_bars.forEach((bar) => {
    setTimeout(() => {
      const { size } = bar.dataset;
      bar.style.width = `${size}%`;
    }, 1000);
  });

  return (
    <>
      <section className="z-[1000] fixed bottom-0 left-0 right-0 bg-GreyScale-White">
        <div className="z-[1001] flex items-center justify-between px-4 py-2">
          <div className="z-30">
            <button className="flex items-center" onClick={closeTimerModal}>
              <img
                src="/images/svgIcons/suggestedSymbolX.svg"
                alt="suggestedSymbolX"
              />
            </button>
          </div>
          <TimerHook />
        </div>
      </section>
    </>
  );
}
