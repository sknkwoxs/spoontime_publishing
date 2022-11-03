import Slider from "react-slick";

export default function Splash() {
  let settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,

    appendDots: (dots) => (
      <div
        style={{
          position: "static",
          marginTop: "52px",
          marginBottom: "40px",
        }}
      >
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: "dots_custom",
  };

  const contents = [
    {
      title1: "300개 이상의",
      title2: "내 아기 맞춤형",
      bold: " 레시피 추천",
      src: "/images/defaultImage.png",
      alt: "SplashDefault",
    },
    {
      title1: "맞춤형 식단까지 알아서 척척",
      title2: "걱정 없는",
      bold: " 식단 관리",
      src: "/images/defaultImage.png",
      alt: "SplashDefault",
    },
    {
      title1: "예쁘게 기록하고",
      title2: "쉽게 공유하는",
      bold: " 식단 후기",
      src: "/images/defaultImage.png",
      alt: "SplashDefault",
    },
    {
      title1: "우리 아기 밥상 고민",
      title2: "",
      bold: "스푼타임",
      title3: "으로 쉽고 편리하게",
      src: "/images/defaultImage.png",
      alt: "SplashDefault",
    },
  ];

  return (
    <>
      <div className="">
        <Slider
          {...settings}
          style={{
            display: "flex",
            height: "100%",
            flexDirection: "column-reverse",
          }}
        >
          {contents.map((contents, index) => {
            return (
              <li className="" key={index}>
                <div className="">
                  <div className="text-center Font24">{contents.title1}</div>
                  <div className="text-center Font24 mb-14">
                    {contents.title2}
                    <span className="Font24sb">{contents.bold}</span>
                    <span className="text-center Font24">
                      {contents.title3}
                    </span>
                  </div>
                </div>

                <div className="justify-center mx-auto max-w-[80%] h-[calc(100vh_-_15rem)]  drop-shadow-splash flex items-end">
                  <img className="" src={contents.src} alt={contents.alt} />
                </div>
              </li>
            );
          })}
        </Slider>
      </div>

      <section className="fixed bottom-0 w-full">
        <div className="w-full">
          <button className="w-full py-3 text-GreyScale-White bg-BrandColor-green01">
            스푼타임 시작하기
          </button>
        </div>
      </section>
    </>
  );
}
