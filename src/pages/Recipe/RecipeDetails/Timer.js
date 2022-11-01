export default function Timer() {
  return (
    <>
      <section className="z-[1000] drop-shadow-popup fixed bottom-0 left-0 right-0 bg-GreyScale-White">
        <div className="z-[1001] flex items-center justify-between px-4 py-2">
          <div>
            <button className="flex items-center">
              <img
                src="/images/svgIcons/suggestedSymbolX.svg"
                alt="suggestedSymbolX"
              />
            </button>
          </div>
          <div>
            <p className="Font14sb">22분 18초</p>
          </div>
          <div>
            <button className="flex items-center">
              <img src="/images/svgIcons/pause.svg" alt="pause" />
            </button>
          </div>
        </div>
        <div
          className="absolute bottom-0 h-10 bg-BrandColor-green03 "
          style={{ width: "5%" }}
        ></div>
      </section>
    </>
  );
}
