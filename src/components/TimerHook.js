import React from "react";
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

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "20px" }}>
        <span>{hours}</span>시<span>{minutes}</span>분<span>{seconds}초</span>
      </div>
      {/* <p>{isRunning ? "Running" : "Not running"}</p> */}
      <button onClick={start} style={{ border: "1px solid red" }}>
        <img src="/images/svgIcons/start.svg" alt="start" />
      </button>
      <button onClick={pause} style={{ border: "1px solid red" }}>
        <img src="/images/svgIcons/pause.svg" alt="pause" />
      </button>
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
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
      <TimerHook expiryTimestamp={time} />
    </div>
  );
}
