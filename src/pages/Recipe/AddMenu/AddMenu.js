import { Link } from "react-router-dom";

export default function AddMenu() {
  const colorPickerPalette = [
    {
      id: "FCD6DD",
      className: "bg-[#FCD6DD]",
      for: "FCD6DD",
    },
    {
      id: "FEDAC9",
      className: "bg-[#FEDAC9]",
      for: "FEDAC9",
    },
    {
      id: "F9EEAB",
      className: "bg-[#F9EEAB]",
      for: "F9EEAB",
    },
    {
      id: "CCF3D4",
      className: "bg-[#CCF3D4]",
      for: "CCF3D4",
    },
    {
      id: "CCE2FE",
      className: "bg-[#CCE2FE]",
      for: "CCE2FE",
    },
    {
      id: "E3D0FB",
      className: "bg-[#E3D0FB]",
      for: "E3D0FB",
    },
    {
      id: "D9DADC",
      className: "bg-[#D9DADC]",
      for: "D9DADC",
    },
  ];
  return (
    <>
      <section>
        <div>
          <Link to="/Recipe">
            <div className="absolute px-4 pt-8">
              <div className="py-4 my-auto h-14">
                <img src="/images/svgIcons/back.svg" alt="back" />
              </div>
            </div>
          </Link>
          <article className="border-b">
            <div className="h-[22.5rem]">
              <img
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                alt="RecipeAddMenuImg"
              />
            </div>
            <div className="flex flex-col w-full px-4 py-6 my-auto">
              <p className="mb-2 Font20sb">한우가지로메인죽</p>
              <div className="flex Font12 text-GreyScale-grey02">
                <div className="flex items-center gap-1 mr-2">
                  <img src="/images/svgIcons/baby.svg" alt="baby" />
                  <p>중기</p>
                </div>
                <div className="flex items-center gap-1 mr-2">
                  <img src="/images/svgIcons/clock.svg" alt="clock" />
                  <p>30분</p>
                </div>
              </div>
            </div>
          </article>
          <article className="border-b">
            <form className="flex justify-between px-4 py-6 addMenuColorPicker">
              {colorPickerPalette.map((colorPickerPalette, index) => {
                return (
                  <div key={index}>
                    <input
                      id={colorPickerPalette.id}
                      type="radio"
                      name="recipeSort"
                      defaultChecked={index === 0}
                    />
                    <label
                      className={colorPickerPalette.className}
                      htmlFor={colorPickerPalette.for}
                    ></label>
                  </div>
                );
              })}
            </form>
          </article>
          <article className="border-b">
            <button className="flex items-center p-4">
              <img src="/images/svgIcons/diet.svg" alt="diet" />
              <p className="px-2 Font14sb">7월 13일 - 7월 14일</p>
              <img src="/images/svgIcons/down20x20.svg" alt="down20x20" />
            </button>
          </article>
          <button className="fixed bottom-0 w-full text-center Font16sb bg-BrandColor-green01 text-GreyScale-White">
            <p className="py-3">식단 추가하기</p>
          </button>
        </div>
      </section>
    </>
  );
}
