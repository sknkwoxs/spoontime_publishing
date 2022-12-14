import { useState, useEffect } from "react";

import FullCalendar from "@fullcalendar/react";
import { DateFormatter } from "@fullcalendar/react";
import koLocale from "@fullcalendar/core/locales/ko";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import events from "./events";
import DatePickerWrap from "./DatePickerWrap";

export default function Calendar({ displayWeeklyCalendar }) {
  // 외부 화면 스크롤 방지
  useEffect(() => {
    document.body.style.cssText = `
            position: fixed;
            top: -${window.scrollY}px;
            overflow-y: scroll;
            width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  const [openDatePicker, setOpenDatePicker] = useState(false);

  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };

  let Day_Names = ["일", "월", "화", "수", "목", "금", "토"];
  let day = new Date();

  // const handleMonthlyCalendar = () => {
  //   document.getElementById("monthlyFullCalendarWrap").classList.add("hidden");
  // };

  console.log(day.toLocaleString("ko", { day: "numeric" }) + "!!!");
  console.log(day.toLocaleString("en", { day: "numeric" }));

  return (
    <>
      <div
        id="monthlyFullCalendarWrap"
        className="absolute top-0 left-0 right-0 z-10 bg-GreyScale-White"
      >
        <FullCalendar
          timeZone="local"
          weekNumberCalculation="ISO"
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick} // 클릭 이벤트
          eventContent={renderEventContent} // 클릭 이벤트 발생 시 렌더링되는 내용
          headerToolbar={{
            start: "title myCustomDatePickerButton",
            center: "",
            end: "myCustomStepButton myCustomSettingsButton",
          }}
          titleFormat={function (date) {
            return date.date.year + "년 " + (date.date.month + 1) + "월"; // ex_) 2022년 12월..
          }}
          customButtons={{
            myCustomDatePickerButton: {
              click: () => setOpenDatePicker(!openDatePicker),
            }, // open datePicker modal
            myCustomStepButton: {
              text: "중기 (~4/16)",
            },
            myCustomSettingsButton: {
              click: function () {
                window.location.href = "/MealPlan/MealPlanSettings";
                // ""
              },
            },
          }}
          dayHeaderContent={function (arg) {
            return Day_Names[arg.date.getDay()];
          }} // 요일을 한국어로 표기
          weekends={true} // 한 주 씩 보기
          showNonCurrentDates={false} // 이전 달, 다음 달 미리보기 설정
          firstDay={false} // true 시, 월요일 시작
          formatDate={(day) => day.toLocaleString("en", { day: "numeric" })}
          events={events}
          dayMaxEvents={4} // 이벤트 수 제한
          moreLinkText="" // 이벤트 초과시 노출되는 텍스트
          eventClick={displayWeeklyCalendar}
          droppable={true}
        />
      </div>

      {openDatePicker && (
        <DatePickerWrap
          closeDatePicker={() => setOpenDatePicker(!openDatePicker)}
        />
      )}
    </>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>
        <span>{eventInfo.event.title}</span>
      </i>
    </>
  );
}
