import koLocale from "@fullcalendar/core/locales/ko";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function Calendar() {
  return (
    <>
      <FullCalendar
        locale={koLocale}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
      />
    </>
  );
}
