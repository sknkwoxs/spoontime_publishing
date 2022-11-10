import React, { useState } from "react";
import { useTimer } from "react-timer-hook";

function TimerHook({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  // start, pause 버튼
  const [play, setPlay] = useState(false);
  const handleClick = () => {
    setPlay(!play);
  };

  return (
    <>
      <div className="flex">
        <div className="Font14sb text-GreyScale-grey01">
          <span>{hours}</span>시&nbsp;<span>{minutes}</span>분&nbsp;
          <span>{seconds}초</span>
        </div>
      </div>
      <div className="flex items-center" onClick={handleClick}>
        {play ? (
          <button className="flex items-center justify-center" onClick={start}>
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
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
      <TimerHook expiryTimestamp={time} />
    </div>
  );
}
