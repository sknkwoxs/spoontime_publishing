export default function PopUp() {
  return (
    <>
      <div className="fixed bottom-[5.75rem] left-0 right-0 z-[998] mb-4 bg-BrandColor-green01 text-GreyScale-White p-4 mx-4 rounded flex justify-between">
        <div className="pr-3">
          <p className="Font12sb text-BrandColor-green02">D+200 냠냠이 </p>
          <p className="Font12">
            저희와 함께 쉽고 편하게 이유식을 준비해 보시겠어요?
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img src="/images/svgIcons/close.svg" alt="close" />
        </div>
      </div>
    </>
  );
}
