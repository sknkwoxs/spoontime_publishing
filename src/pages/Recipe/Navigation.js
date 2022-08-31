export function Navigation() {
  return (
    <>
      <section className="flex items-center justify-end gap-4 mb-2 h-14">
        <div>
          <img src="/images/svgIcons/search.svg" alt="search" />
          {/* to 검색 */}
        </div>
        <div>
          <img src="/images/svgIcons/mainHeart.svg" alt="mainHeart" />
          {/* to 즐겨 찾기 */}
        </div>
        <div>
          <img src="/images/svgIcons/book.svg" alt="book" />
          {/* to 식재료 가이드 */}
        </div>
      </section>
    </>
  );
}
