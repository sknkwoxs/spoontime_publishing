import React, { useState } from "react";
import { useTimer } from "react-timer-hook";

function TimerHook({ expiryTimestamp }) {
  const { seconds, minutes, hours, start, pause } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  // start, pause 버튼
  const [play, setPlay] = useState(false);
  const handleClick = () => {
    setPlay(!play);
  };

  // progress bar
  const progress_bars = document.querySelectorAll(".progress");

  progress_bars.forEach((bar) => {
    setTimeout(() => {
      const { size } = bar.dataset;
      bar.style.width = `${size}%`;
    }, 1000);
  });

  return (
    <>
      <div
        className="absolute top-0 bottom-0 left-0 right-0 z-10 w-full h-full transition-all progress bg-BrandColor-green03"
        // data-size="20"
        datasize={hours + minutes + seconds}
      ></div>
      <div className="absolute left-[50%] -translate-x-[50%] z-30">
        <div className="flex Font14sb text-GreyScale-grey01 whitespace-nowrap">
          <span>{hours}</span>시&nbsp;<span>{minutes}</span>분&nbsp;
          <span>{seconds}초</span>
        </div>
      </div>
      <div className="z-30" onClick={handleClick}>
        {play ? (
          <button className="flex items-center" onClick={start}>
            <img
              src="/images/svgIcons/start.svg"
              width="20"
              height="20"
              alt="start"
            />
          </button>
        ) : (
          <button className="flex items-center justify-center" onClick={pause}>
            <img src="/images/svgIcons/pause.svg" alt="pause" />
          </button>
        )}
      </div>
    </>
  );
}

export default function expiryTimestamp() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 100); // 10 minutes timer
  return (
    <div className="flex items-center ">
      <TimerHook expiryTimestamp={time} />
    </div>
  );
}
