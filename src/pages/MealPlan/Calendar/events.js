const events = [
  {
    title: "한우 가지 두부",
    start: getDate("YEAR-MONTH-01"),
    end: getDate("YEAR-MONTH-08"),
    color: "#E3D0FB",
  },
  {
    title: "감자퓌레",
    start: getDate("YEAR-MONTH-01"),
    end: getDate("YEAR-MONTH-07"),
    color: "#CCE2FE",
  },
  {
    title: "닭고기, 고구마, 양배추",
    start: getDate("YEAR-MONTH-01"),
    end: getDate("YEAR-MONTH-05"),
    color: "#FEDAC9",
  },
  {
    title: "호박죽",
    start: getDate("YEAR-MONTH-01"),
    end: getDate("YEAR-MONTH-05"),
    color: "#CCF3D4",
  },
  {
    title: "이벤트 4개까지만",
    start: getDate("YEAR-MONTH-01"),
    end: getDate("YEAR-MONTH-08"),
    color: "#E3D0FB",
  },
  {
    title: "이벤트 4개까지만",
    start: getDate("YEAR-MONTH-01"),
    end: getDate("YEAR-MONTH-08"),
    color: "#E3D0FB",
  },
  {
    title: "한우, 브로콜리, 당근",
    start: getDate("YEAR-MONTH-08"),
    end: getDate("YEAR-MONTH-12"),
    color: "#CCF3D4",
  },
  {
    title: "감자퓌레",
    start: getDate("YEAR-MONTH-07"),
    end: getDate("YEAR-MONTH-14"),
    color: "#F9EEAB",
  },
  {
    title: "닭고기, 고구마, 양배추",
    start: getDate("YEAR-MONTH-07"),
    end: getDate("YEAR-MONTH-10"),
    color: "#FEDAC9",
  },
  {
    title: "한우, 가지, 두부",
    start: getDate("YEAR-MONTH-10"),
    end: getDate("YEAR-MONTH-12"),
    color: "#CCF3D4",
  },
  {
    title: "한우, 버섯, 파프리카, 타이틀 길어요",
    start: getDate("YEAR-MONTH-05"),
    end: getDate("YEAR-MONTH-12"),
    color: "#CCE2FE",
  },
  {
    title: "닭고기, 고구마",
    start: getDate("YEAR-MONTH-17"),
    end: getDate("YEAR-MONTH-18"),
    color: "#CCE2FE",
  },
  {
    title: "한우, 브로콜리, 당근",
    start: getDate("YEAR-MONTH-15"),
    end: getDate("YEAR-MONTH-19"),
    color: "#D9DADC",
  },
  {
    title: "감자퓌레",
    start: getDate("YEAR-MONTH-19"),
    end: getDate("YEAR-MONTH-24"),
    color: "#F9EEAB",
  },
  {
    title: "호박죽",
    start: getDate("YEAR-MONTH-19"),
    end: getDate("YEAR-MONTH-25"),
    color: "#CCF3D4",
  },
  {
    title: "한우, 시금치, 두부",
    start: getDate("YEAR-MONTH-16"),
    end: getDate("YEAR-MONTH-19"),
    color: "#CCF3D4",
  },
  {
    title: "한우, 가지, 두부",
    start: getDate("YEAR-MONTH-19"),
    end: getDate("YEAR-MONTH-23"),
    color: "#E3D0FB",
  },
  {
    title: "감자퓌레",
    start: getDate("YEAR-MONTH-26"),
    end: getDate("YEAR-MONTH-28"),
    color: "#F9EEAB",
  },
  {
    title: "닭고기, 고구마, 양배추",
    start: getDate("YEAR-MONTH-19"),
    end: getDate("YEAR-MONTH-25"),
    color: "#FEDAC9",
  },
  {
    title: "감자퓌레",
    start: getDate("YEAR-MONTH-17"),
    color: "#F9EEAB",
  },

  // {
  //   groupId: "999",
  //   title: "Repeating Event",
  //   start: getDate("YEAR-MONTH-09T16:00:00+00:00"),
  // },
  // {
  //   groupId: "999",
  //   title: "Repeating Event",
  //   start: getDate("YEAR-MONTH-16T16:00:00+00:00"),
  // },

  // { title: "Lunch", start: getDate("YEAR-MONTH-18T12:00:00+00:00") },
  // { title: "Birthday Party", start: getDate("YEAR-MONTH-19T07:00:00+00:00") },
  // { title: "Meeting", start: getDate("YEAR-MONTH-18T14:30:00+00:00") },
  // { title: "Happy Hour", start: getDate("YEAR-MONTH-18T17:30:00+00:00") },
  // { title: "Dinner", start: getDate("YEAR-MONTH-18T20:00:00+00:00") },
];

function getDate(dayString) {
  const today = new Date();
  const year = today.getFullYear().toString();
  let month = (today.getMonth() + 1).toString();

  if (month.length === 1) {
    month = "0" + month;
  }

  return dayString.replace("YEAR", year).replace("MONTH", month);
}

export default events;
