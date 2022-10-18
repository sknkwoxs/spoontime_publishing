import { useState } from "react";
import koLocale from "@fullcalendar/core/locales/ko";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
// import { formatDayString } from "@fullcalendar/common";

import events from "./events";

export default function Calendar() {
  // const [date, setDate] = useState(new Date());
  // const locale = "fr-CA";

  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };

  // console.log(str);

  let Day_Names = ["일", "월", "화", "수", "목", "금", "토"];

  let d = new Date();

  console.log(d.toLocaleString("ko", { day: "numeric" }));

  console.log(d.toLocaleString("en", { day: "numeric" }));

  console.log();

  // const events = [
  //   { title: "event 1", date: new Date() },
  //   { title: "event 2", date: new Date() },
  //   { title: "event 3", date: new Date() },
  // ];

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        locale={koLocale}
        initialView="dayGridMonth"
        dateClick={handleDateClick} // 클릭 이벤트
        eventContent={renderEventContent} // 클릭 이벤트 발생 시 렌더링되는 내용
        headerToolbar={{
          start: "title myCustomButton",
          center: "",
          end: "myCustomButton myCustomButton",
        }}
        dayHeaderContent={function (arg) {
          return Day_Names[arg.date.getDay()];
        }}
        weekends={true} // 한 주 씩 보기
        showNonCurrentDates={false} // 이전 달, 다음 달 미리보기 설정
        firstDay={false} // true 시, 월요일 시작
        formatDate={(locale, date) =>
          date.toLocaleString("en", { date: "numeric" })
        }
        views={{
          month: {
            columnFormat: "dddd",
            eventLimit: "4", // 한 날짜에 최대 이벤트 4개, 나머지는 +처리
          },
          agendaWeek: {
            columnFormat: "M/D ddd",
            titleFormat: "YYYY년 M월 D일",
            eventLimit: false,
          },
          agendaDay: {
            columnFormat: "dddd",
            eventLimit: false,
          },
          listWeek: {
            columnFormat: "",
          },
        }}
        events={events}
        droppable={true}
      />
      <div>
        <input type="date" />
      </div>
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
