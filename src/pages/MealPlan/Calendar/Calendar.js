import { useState, useEffect } from "react";

import FullCalendar from "@fullcalendar/react";
import { DateFormatter } from "@fullcalendar/react";
import koLocale from "@fullcalendar/core/locales/ko";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import events from "./events";
import DatePickerWrap from "./DatePickerWrap";

export default function Calendar() {
  const [openDatePicker, setOpenDatePicker] = useState(false);

  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };

  let Month_Names = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  let Day_Names = ["일", "월", "화", "수", "목", "금", "토"];
  let day = new Date();

  console.log(day.toLocaleString("ko", { day: "numeric" }) + "!!!");

  console.log(day.toLocaleString("en", { day: "numeric" }));

  return (
    <>
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
        // views={{
        //   month: {
        //     columnFormat: "dddd",
        //     eventLimit: 4, // 한 날짜에 최대 이벤트 4개, 나머지는 +처리
        //   },
        //   agendaWeek: {
        //     columnFormat: "M/D ddd",
        //     titleFormat: "YYYY년 M월 D일",
        //     eventLimit: false,
        //   },
        //   agendaDay: {
        //     columnFormat: "dddd",
        //     eventLimit: false,
        //   },
        //   listWeek: {
        //     columnFormat: "",
        //   },
        // }}
        titleFormat={function (date) {
          return date.date.year + "년 " + (date.date.month + 1) + "월";
        }}
        customButtons={{
          myCustomDatePickerButton: {
            click: () => setOpenDatePicker(!openDatePicker),
          },
          myCustomStepButton: {
            text: "중기 (~4/16)",
            click: function () {
              alert("clicked the custom button!");
            },
          },
          myCustomSettingsButton: {
            click: function () {
              alert("clicked the custom button!");
            },
          },
        }}
        dayHeaderContent={function (arg) {
          return Day_Names[arg.date.getDay()];
        }} // 요일을 한국어로 표기
        monthNames={[
          "1월",
          "2월",
          "3월",
          "4월",
          "5월",
          "6월",
          "7월",
          "8월",
          "9월",
          "10월",
          "11월",
          "12월",
        ]}
        monthNamesShort={[
          "1월",
          "2월",
          "3월",
          "4월",
          "5월",
          "6월",
          "7월",
          "8월",
          "9월",
          "10월",
          "11월",
          "12월",
        ]}
        dayNames={[
          "일요일",
          "월요일",
          "화요일",
          "수요일",
          "목요일",
          "금요일",
          "토요일",
        ]}
        dayNamesShort={["일", "월", "화", "수", "목", "금", "토"]}
        weekends={true} // 한 주 씩 보기
        showNonCurrentDates={false} // 이전 달, 다음 달 미리보기 설정
        firstDay={false} // true 시, 월요일 시작
        formatDate={(day) => day.toLocaleString("en", { day: "numeric" })}
        events={events}
        droppable={true}
      />

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
      <i>{eventInfo.event.title}</i>
    </>
  );
}
