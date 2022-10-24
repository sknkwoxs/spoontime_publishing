import { useState } from "react";
import { useForm } from "react-hook-form";

export default function FamilyShareCode() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(watch("nickName"));

  // input창 clear버튼
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    setMessage("");
  };

  return (
    <>
      <div className="w-full h-screen">
        <div className="px-4">
          <p className="pt-4 mb-3 text-center Font16sb">아기정보</p>
          <div className="mb-8">
            <div className="relative h-1 mb-10 bg-GreyScale-grey04">
              <div className="absolute h-1 bg-BrandColor-green03 w-[25%]" />
            </div>
            <p className="mb-3 Font20sb">
              아기의 이름(닉네임)을
              <br />
              입력해 주세요.
            </p>
            <p className="mb-16 Font12 text-GreyScale-grey02">
              맞춤형 식단과 레시피를 추천해 드리기 위해
              <br />몇 가지 정보가 필요해요.
            </p>
          </div>
          <form
            id="myform"
            className="mb-8"
            method="get"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label
              className="block mb-3 Font12 text-GreyScale-grey03"
              htmlFor="email"
            >
              이름 또는 닉네임
            </label>

            <div className="flex pb-1 mb-3 border-b">
              <input
                className="w-full p-0 border-none focus:outline-hidden Font20"
                {...register("nickName", {
                  required: true,
                  max: 255,
                  min: 1,
                  maxLength: 8,
                  validate: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/,
                })}
                onChange={handleChange}
                value={message}
              />
              <button onClick={handleClick} className="flex items-center">
                <img
                  src="/images/svgIcons/FamilyShareCodeX.svg"
                  alt="FamilyShareCodeX"
                />
              </button>
            </div>
            {errors.nickName && (
              <span className="inline-block pb-2 Font12 text-Message-error">
                한글, 영문 대/소문자, 숫자만 입력할 수 있어요.
              </span>
            )}
            <p className="Font12 text-GreyScale-grey02">
              입력한 정보는 언제든 수정할 수 있어요.
            </p>
          </form>
          <div className="p-4 rounded bg-GreyScale-grey05">
            <div className="flex items-center gap-0.5 mb-1">
              <img src="/images/svgIcons/BabyInfoInfo.svg" alt="BabyInfoInfo" />
              <span className="Font12sb">혹시 다태아인가요?</span>
            </div>
            <p className=" text-GreyScale-grey02 Font12">
              걱정 마세요. 마이페이지에서 아기를 추가할 수 있어요.
            </p>
          </div>
        </div>
        <section className="fixed bottom-0 w-full">
          <div className="w-full">
            <input
              type="submit"
              form="myform"
              value="다음"
              disabled={isSubmitting}
              method="post"
              formAction="../Birthday.js"
              className="w-full py-3 cursor-pointer text-GreyScale-White bg-GreyScale-grey04"
              // className="w-full py-3 cursor-pointer text-GreyScale-White bg-BrandColor-green01"
            ></input>
          </div>
        </section>
      </div>
    </>
  );
}
