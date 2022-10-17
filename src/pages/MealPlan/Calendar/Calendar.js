import { useState } from "react";
import koLocale from "@fullcalendar/core/locales/ko";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { formatDate } from "@fullcalendar/common";

export default function Calendar() {
  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };

  // let str = formatDate(new Date(), {
  //   month: "long",
  //   year: "numeric",
  //   day: "numeric",
  // });

  // console.log(str);

  console.log();

  return (
    <>
      <FullCalendar
        locale={koLocale}
        // dateFormatter={(locale, date) =>
        //   date.toLocaleString("en", { day: "numeric" })
        // }
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        // weekends={false}
        // dateClick={handleDateClick}
        // eventContent={renderEventContent}
        showNonCurrentDates={false}
      />
    </>
  );
}

// function renderEventContent(eventInfo) {
//   return (
//     <>
//       <b>{eventInfo.timeText}</b>
//       <i>{eventInfo.event.title}</i>
//     </>
//   );
// }
