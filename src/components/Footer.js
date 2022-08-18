export default function Footer() {
  return (
    <>
      <div className="fixed w-full bottom-0 bg-GreyScale-White pb-8">
        <div className="flex pt-2 justify-between font-semibold text-[0.625rem] leading-3">
          <div className="flex flex-col mx-auto gap-1 text-center">
            <div className="mx-auto">
              <img src="/images/svgIcons/recipe.svg" alt="recipe" />
            </div>
            <p className="text-BrandColor-green02">레시피</p>
          </div>
          <div className="flex flex-col mx-auto gap-1 text-center">
            <div className="mx-auto">
              <img src="/images/svgIcons/diet.svg" alt="diet" />
            </div>
            <p>식단</p>
          </div>
          <div className="flex flex-col mx-auto gap-1 text-center">
            <div className="mx-auto">
              <img src="/images/svgIcons/diet.svg" alt="diet" />
            </div>
            <p>꼬물이</p>
          </div>
        </div>
      </div>
    </>
  );
}
