import Item from "./Item.js";

export function List() {
  return (
    <>
      <div>
        <article className="Font14sb h-10 flex justify-evenly border-b text-GreyScale-grey03">
          <div className="w-full text-center">
            <p className="leading-10">메인요리</p>
          </div>
          <div className="w-full text-center">
            <p className="leading-10">간식</p>
          </div>
          <div className="w-full text-center">
            <p className="leading-10">전체</p>
          </div>
        </article>
        <article className="Font12 flex py-3 gap-2">
          <div className="flex items-center gap-1 px-2 py-1 border border-[#B7B7B7] rounded-[1.563rem]">
            <p>추천순</p>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="#2A2A2A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 border border-[#B7B7B7] rounded-[1.563rem]">
            <p>알레르기</p>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="#2A2A2A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 border border-[#B7B7B7] rounded-[1.563rem]">
            <p>상태</p>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="#2A2A2A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 bg-BrandColor-green04 border border-BrandColor-green03 rounded-[1.563rem]">
            <p>중기</p>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="#2A2A2A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </article>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </>
  );
}
