export function BabyInfo() {
  return (
    <>
      <section className="mb-6">
        <article className="flex gap-2 mb-4">
          <div className="recipeProfileImgae">
            <img
              className="w-full h-full border-2 rounded-full border-GreyScale-White"
              src="/images/defaultImage.png"
              alt="defaultImg"
            />
          </div>
          <div>
            <div className="flex">
              <p className="mr-2 leading-6 Font18sb text-BrandColor-green02">
                꼬물이
              </p>
              <div className="h-4 my-auto rounded bg-BrandColor-green04">
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
        <article className="rounded bg-GreyScale-grey05">
          <div className="Font12 flex px-2.5 leading-8">
            <span className="mr-1.5">💡</span>
            <p>중기는 6배죽을 기준으로 합니다.</p>
          </div>
        </article>
      </section>
    </>
  );
}
