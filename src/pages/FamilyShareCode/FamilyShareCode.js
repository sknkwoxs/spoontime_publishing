import { useState } from "react";
import { useForm } from "react-hook-form";

export default function FamilyShareCode() {
  // validation
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(watch("code"));

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
          <p className="py-4 mb-10 text-center Font16sb">가족 공유 코드</p>
          <p className="mb-6 Font20sb">
            가족 공유 코드가 있다면
            <br /> 입력해 주세요.
          </p>
          <p className="mb-16 Font12 text-GreyScale-grey02">
            가족 공유 코드를 입력하면 이미 등록된 아기의 정보를
            <br /> 바로 공유 받을 수 있어요.
          </p>

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
              가족 공유 코드
            </label>

            <div className="flex pb-1 mb-3 border-b">
              <input
                className="w-full p-0 border-none focus:outline-hidden Font20 placeholder:text-GreyScale-grey03"
                {...register("code", {
                  required: true,
                  max: 255,
                  min: 1,
                  maxLength: 8,
                  // 공유코드관련 validate처리와 error message 논의 필요
                  validate: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/,
                })}
                onChange={handleChange}
                value={message}
                type="text"
                placeholder="3e024K"
              />
              <button onClick={handleClick} className="flex items-center">
                <img
                  src="/images/svgIcons/FamilyShareCodeX.svg"
                  alt="FamilyShareCodeX"
                />
              </button>
            </div>
            {errors.code && (
              <span className="inline-block pb-2 Font12 text-Message-error">
                올바른 출생(예정)일을 입력해 주세요.
              </span>
            )}
            <p className="Font12 text-GreyScale-grey02">
              가족 공유 코드가 없어요.&nbsp;
              <button className="underline text-BrandColor-green01">
                새로운 아기를 등록할게요.
              </button>
            </p>
          </form>
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
