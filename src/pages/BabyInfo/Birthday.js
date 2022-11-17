import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Birthday() {
  // validation
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(watch("birthday"));

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
          <div className="relative">
            <button className="absolute mt-4">
              <img
                src="images/svgIcons/BabyInfoArrowsLeft.svg"
                alt="BabyInfoArrowsLeft"
              />
            </button>
            <p className="pt-4 mb-3 text-center Font16sb">아기정보</p>
          </div>
          <div className="mb-4">
            <div className="relative h-1 mb-10 bg-GreyScale-grey04">
              <div className="absolute h-1 bg-BrandColor-green03 w-[50%]" />
            </div>
            <p className="mb-24 Font20sb">
              아기 생일을 입력해 주세요. <br />
              출산 전이시라면, <br />
              출산 예정일로 알려주세요.
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
              출생(예정)일
            </label>

            <div className="flex pb-1 mb-3 border-b">
              <input
                className="w-full p-0 border-none focus:outline-hidden Font20 placeholder:text-GreyScale-grey03"
                {...register("birthday", {
                  required: true,
                  minLength: 8,
                  maxLength: 8,
                  // valueAsNumber: true,
                  pattern: {
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                  },
                })}
                type="number"
                onChange={handleChange}
                value={message}
                placeholder="20210101"
                // maxLength="8"
              />
              <button onClick={handleClick} className="flex items-center">
                <img
                  src="/images/svgIcons/FamilyShareCodeX.svg"
                  alt="FamilyShareCodeX"
                />
              </button>
            </div>
            {errors.birthday && errors.birthday.type === "required" && (
              <span className="inline-block pb-2 Font12 text-Message-error">
                올바른 출생(예정)일을 입력해 주세요.
              </span>
            )}
            {errors.birthday && errors.birthday.type === "minLength" && (
              <span className="inline-block pb-2 Font12 text-Message-error">
                올바른 출생(예정)일을 입력해 주세요.
              </span>
            )}
            {errors.birthday && errors.birthday.type === "maxLength" && (
              <span className="inline-block pb-2 Font12 text-Message-error">
                최대 8자까지 입력할 수 있어요.
              </span>
            )}
            <p className="Font12 text-GreyScale-grey02">
              입력한 정보는 언제든 수정할 수 있어요.
            </p>
          </form>
          <div>
            <div className="flex items-center justify-center mb-2 text-center Font12 birthdayBallon">
              D+179
            </div>
          </div>
          <div>
            <div>
              <div className="flex mb-1 text-center text-[0.563rem] leading-4 font-normal">
                <div className="w-full flex justify-center h-6 py-1 bg-[#E6EFE0]">
                  <span>~129일</span>
                </div>
                <div className="w-full flex justify-center h-6 py-1 bg-[#D8EACD]">
                  <span>130~189일</span>
                </div>
                <div className="w-full flex justify-center h-6 py-1 bg-[#CAE0BB]">
                  <span>190~209일</span>
                </div>
                <div className="w-full flex justify-center h-6 py-1 bg-[#BCD7AA]">
                  <span>210~269일</span>
                </div>
                <div className="w-full flex justify-center h-6 py-1 bg-[#A7CB8F]">
                  <span>270~364일</span>
                </div>
                <div className="w-full flex justify-center h-6 py-1 bg-[#98B584]">
                  <span>365일~</span>
                </div>
              </div>
              <div className="flex text-center text-[0.625rem] leading-4 font-normal">
                <div className="w-full">
                  <span>시작 안함</span>
                </div>
                <div className="w-full">
                  <span>초기 1</span>
                </div>
                <div className="w-full">
                  <span>초기 2</span>
                </div>
                <div className="w-full">
                  <span>중기</span>
                </div>
                <div className="w-full">
                  <span>후기</span>
                </div>
                <div className="w-full">
                  <span>완료기</span>
                </div>
              </div>
            </div>
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
