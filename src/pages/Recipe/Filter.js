export default function Filter() {
  return (
    <>
      <article className="flex h-10 border-b Font14sb justify-evenly text-GreyScale-grey03">
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
      <article className="flex gap-2 py-3 Font12">
        <select className="flex items-center pl-2 py-1 border border-[#B7B7B7] rounded-[1.563rem] appearance-none bg-down bg-no-repeat bg-[center_right_0.5rem]">
          <option value="알레르기">추천순</option>
          <option value="인기순">인기순</option>
          <option value="조리 시간순">조리 시간순</option>
        </select>
        <button className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 gap-1">
          알레르기 <img src="/images/svgIcons/down.svg" alt="down" />
        </button>
        <button className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 gap-1">
          상태 <img src="/images/svgIcons/down.svg" alt="down" />
        </button>
        <button className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 gap-1">
          단계 <img src="/images/svgIcons/down.svg" alt="down" />
        </button>
      </article>
    </>
  );
}
