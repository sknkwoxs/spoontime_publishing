export default function HeaderFilter() {
  return (
    <>
      <article className="flex h-10 border-b Font14sb justify-evenly text-GreyScale-grey03">
        <button className="w-full text-center border-b-2 border-GreyScale-grey01">
          <p className="leading-10">메인요리</p>
        </button>
        <button className="w-full text-center">
          <p className="leading-10">간식</p>
        </button>
        <button className="w-full text-center">
          <p className="leading-10">전체</p>
        </button>
      </article>
      <article className="flex gap-2 py-3 Font12">
        <button className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1">
          추천순 <img src="/images/svgIcons/down.svg" alt="down" />
        </button>
        <button className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1">
          알레르기 <img src="/images/svgIcons/down.svg" alt="down" />
        </button>
        <button className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1">
          상태 <img src="/images/svgIcons/down.svg" alt="down" />
        </button>
        <button className="flex items-center border border-[#B7B7B7] rounded-[1.563rem] px-2 py-1 gap-1">
          단계 <img src="/images/svgIcons/down.svg" alt="down" />
        </button>
      </article>
    </>
  );
}
