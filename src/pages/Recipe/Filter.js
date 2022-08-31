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
        <div className="flex items-center gap-1 px-2 py-1 border border-[#B7B7B7] rounded-[1.563rem]">
          <p>추천순</p>
        </div>
        <select className="flex items-center gap-1 pl-2 pr-6 py-1 border border-[#B7B7B7] rounded-[1.563rem] appearance-none bg-down bg-no-repeat bg-[center_right_0.5rem]">
          <option value="알레르기">알레르기</option>
          <option value="달걀">달걀</option>
          <option value="우유">우유</option>
          <option value="밀">밀</option>
          <option value="메밀">메밀</option>
          <option value="대두">대두</option>
          <option value="새우">새우</option>
          <option value="게">게</option>
          <option value="조개류">조개류</option>
          <option value="생류">생류</option>
          <option value="땅콩">땅콩</option>
          <option value="견과류">견과류</option>
        </select>

        <div className="flex items-center gap-1 px-2 py-1 border border-[#B7B7B7] rounded-[1.563rem]">
          <p>상태</p>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 bg-BrandColor-green04 border border-BrandColor-green03 rounded-[1.563rem]">
          <p>중기</p>
        </div>
      </article>
    </>
  );
}
