export function BabyInfo() {
  return (
    <>
      <div className="mb-6">
        <article className="flex mb-4">
          <div className="mr-2">
            <img src="/images/RecipeBabyImg.svg" alt="RecipeBabyImg" />
          </div>
          <div>
            <div className="flex">
              <p className="Font18sb text-BrandColor-green02 mr-2 leading-6">
                꼬물이
              </p>
              <div className="bg-BrandColor-green04 rounded-[4px] h-4 my-auto">
                <p className="text-GreyScale-grey02 font-normal text-[0.625rem] leading-[1rem] px-2">
                  D+241
                </p>
              </div>
            </div>
            <div>
              <p className="Font16sb">맞춤형 레시피를 준비했어요!</p>
            </div>
          </div>
        </article>
        <article className="h-8 bg-GreyScale-grey05 rounded-[4px]">
          <p className="Font12 px-2.5 leading-8">
            <span className="mr-1.5">💡</span>
            <span>중기는 6배죽을 기준으로 합니다.</span>
          </p>
        </article>
      </div>
    </>
  );
}
