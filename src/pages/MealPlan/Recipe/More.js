export default function More() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full h-full bg-[#00000099] z-[999]"></div>
      <section className="z-[1000] fixed bottom-0 left-0 right-0 p-4 bg-GreyScale-White rounded-t-2xl">
        <div>
          <div className="flex gap-2 mb-4">
            <button className="flex items-center justify-center w-full gap-1 py-3 border rounded-lg Font14sb border-GreyScale-grey04 bg-GreyScale-grey05">
              <img src="/images/svgIcons/moreDownload.svg" alt="moreDownload" />
              이미지 저장
            </button>
            <button className="flex items-center justify-center w-full gap-1 py-3 border rounded-lg Font14sb border-GreyScale-grey04 bg-GreyScale-grey05">
              <img src="/images/svgIcons/moreUpload.svg" alt="moreUpload" />
              이미지 공유
            </button>
          </div>
          <button className="w-full py-3 mb-2 border rounded-lg Font14sb border-GreyScale-grey04 bg-GreyScale-grey05">
            기록 수정
          </button>
          <button className="w-full py-3 border rounded-lg Font14sb border-GreyScale-grey04 bg-GreyScale-grey05">
            기록 삭제
          </button>
        </div>
      </section>
    </>
  );
}
