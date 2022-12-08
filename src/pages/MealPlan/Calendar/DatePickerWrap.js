import { useEffect } from "react";

import DatePicker from "react-mobile-datepicker";

export default function DatePickerWrap({ closeDatePicker }) {
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

  const monthMap = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"
        onClick={closeDatePicker}
      ></div>
      <DatePicker
        isPopup={false}
        // onSlect={}
        // onCancel={handleClick}
        showCaption={true}
        dateConfig={{
          year: {
            format: "YYYY",
            caption: "년",
            step: 1,
          },
          month: {
            format: (value) => monthMap[value.getMonth() + 1],
            caption: "월",
            step: 1,
          },
          date: {
            format: "D",
            caption: "일",
            step: 1,
          },
        }}
        showHeader={true}
        headerFormat="날짜 이동"
        confirmText="적용하기"
        cancelText={false}
        tileContent={({ date, view }) => null}
      />
    </>
  );
}
