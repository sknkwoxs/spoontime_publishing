import Item from "./Item.js";

export function List() {
  return (
    <>
      <section>
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
            <img src="/images/svgIcons/down.svg" alt="down" />
          </div>
          <div className="flex items-center gap-1 px-2 py-1 border border-[#B7B7B7] rounded-[1.563rem]">
            <p>알레르기</p>
            <img src="/images/svgIcons/down.svg" alt="down" />
          </div>
          <div className="flex items-center gap-1 px-2 py-1 border border-[#B7B7B7] rounded-[1.563rem]">
            <p>상태</p>
            <img src="/images/svgIcons/down.svg" alt="down" />
          </div>
          <div className="flex items-center gap-1 px-2 py-1 bg-BrandColor-green04 border border-BrandColor-green03 rounded-[1.563rem]">
            <p>중기</p>
            <img src="/images/svgIcons/down.svg" alt="down" />
          </div>
        </article>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </section>
    </>
  );
}
