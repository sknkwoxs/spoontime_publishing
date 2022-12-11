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
    1: "01월",
    2: "02월",
    3: "03월",
    4: "04월",
    5: "05월",
    6: "06월",
    7: "07월",
    8: "08월",
    9: "09월",
    10: "10월",
    11: "11월",
    12: "12월",
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
            format: "D일",
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
