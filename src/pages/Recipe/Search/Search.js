export default function Search() {
  return (
    <>
      <article>
        <div className="border-b">
          <div className="flex items-center gap-4 px-4 py-3">
            <div>
              <img
                src="/images/svgIcons/directionsLeft.svg"
                alt="directionsLeft"
              />
            </div>
            <div className="relative w-full">
              <input
                className="flex w-full py-1 rounded px-9 bg-GreyScale-grey05 Font14"
                type="text"
                placeholder="식단검색"
              />
              <button className="absolute top-0 h-full left-2">
                <img src="/images/svgIcons/mainSearch.svg" alt="mainSearch" />
              </button>
              <button className="absolute top-0 h-full right-2">
                <img src="/images/svgIcons/outlinedX.svg" alt="outlinedX" />
              </button>
            </div>
          </div>
          <div className="flex justify-between px-4 py-3 mb-6 bg-BrandColor-green04 Font12sb">
            <p>식재료를 선택해서 레시피를 검색해보세요.</p>
            <img
              src="/images/svgIcons/directionsRight.svg"
              alt="directionsRight"
            />
          </div>
          <div className="px-4 mb-6">
            <p className="mb-4">추천 검색어</p>
            <div className="gap-x-2">
              <button className="inline-block mr-2 mb-2 px-4 py-1 border border-GreyScale-grey01 rounded-[19px] Font12">
                알레르기
              </button>
              <button className="inline-block mr-2 mb-2 px-4 py-1 border border-GreyScale-grey01 rounded-[19px] Font12">
                감기
              </button>
              <button className="inline-block mr-2 mb-2 px-4 py-1 border border-GreyScale-grey01 rounded-[19px] Font12">
                이앓이
              </button>
              <button className="inline-block mr-2 mb-2 px-4 py-1 border border-GreyScale-grey01 rounded-[19px] Font12">
                여름
              </button>
              <button className="inline-block mr-2 mb-2 px-4 py-1 border border-GreyScale-grey01 rounded-[19px] Font12">
                한우
              </button>
              <button className="inline-block mr-2 mb-2 px-4 py-1 border border-GreyScale-grey01 rounded-[19px] Font12">
                아기 주도
              </button>
              <button className="inline-block mr-2 mb-2 px-4 py-1 border border-GreyScale-grey01 rounded-[19px] Font12">
                냉이
              </button>
              <button className="inline-block mr-2 mb-2 px-4 py-1 border border-GreyScale-grey01 rounded-[19px] Font12">
                알레르기
              </button>
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="flex justify-between pt-6 pb-4">
            <p className="Font14sb">최근 검색</p>
            <button className="Font12 text-BrandColor-green01">전체삭제</button>
          </div>
          <div>
            <div className="flex items-center justify-between pb-3">
              <p className="Font14">한우가지로메인죽</p>
              <img src="/images/svgIcons/x.svg" alt="x" />
            </div>
            <div className="flex items-center justify-between pb-3">
              <p className="Font14">김가네 떡볶이</p>
              <img src="/images/svgIcons/x.svg" alt="x" />
            </div>
            <div className="flex items-center justify-between pb-3">
              <p className="Font14">한우강낭콩죽</p>
              <img src="/images/svgIcons/x.svg" alt="x" />
            </div>
            <div className="flex items-center justify-between pb-3">
              <p className="Font14">닭고기시금치죽</p>
              <img src="/images/svgIcons/x.svg" alt="x" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
