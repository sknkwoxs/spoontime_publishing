import React, { useState } from "react";
import { useTimer } from "react-timer-hook";

export default function TimerHook({ expiryTimestamp, closeTimerModal }) {
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

  console.log();

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

          <div className="flex">
            <div className="Font14sb text-GreyScale-grey01">
              <span>{hours}</span>시&nbsp;<span>{minutes}</span>분&nbsp;
              <span>{seconds}초</span>
            </div>
            {/* <p>{isRunning ? "Running" : "Not running"}</p> */}

            {/* <button onClick={resume} style={{ border: "1px solid red" }}>
        Resume
      </button>
      <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time);
        }}
        style={{ border: "1px solid red" }}
      >
        Restart
      </button> */}
          </div>
          <div className="flex items-center" onClick={handleClick}>
            {play ? (
              <button
                className="flex items-center justify-center"
                onClick={start}
              >
                <img
                  src="/images/svgIcons/start.svg"
                  width="20"
                  height="20"
                  alt="start"
                />
              </button>
            ) : (
              <button
                className="flex items-center justify-center"
                onClick={pause}
              >
                <img src="/images/svgIcons/pause.svg" alt="pause" />
              </button>
            )}
            {/* <button onClick={start}>
          <img src="/images/svgIcons/start.svg" alt="start" />
        </button>
        <button onClick={pause}>
          <img src="/images/svgIcons/pause.svg" alt="pause" />
        </button> */}
          </div>
        </div>
      </section>
    </>
  );
}

function expiryTimestamp() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
      hello
      <TimerHook expiryTimestamp={time} />
    </div>
  );
}
