import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AutocompletePage from "./AutocompletePage";

export default function Search() {
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem("keywords") || "[]")
  );

  //최근 검색어 추가
  const handleAddKeyword = (text) => {
    console.log(text);

    console.log("text", text);

    const newKeyword = {
      id: Date.now(),
      text: text,
    };
    setKeywords([newKeyword, ...keywords]);
  };

  const [keyword, setKeyword] = useState("");

  const handleKeyword = (event) => {
    setKeyword(event.target.value);

    // keyword가 있으면 default_page display: none 처리
    if (!!keyword === true) {
      document
        .getElementById("default_search_page")
        .classList.add("transform_to_autocomplete_page");
    } else {
      document
        .getElementById("default_search_page")
        .classList.remove("transform_to_autocomplete_page");
    }

    // keyword가 있으면 autocomplete_page display: none 처리
    if (!!keyword === true) {
      document
        .getElementById("autocomplete_page")
        .classList.add("transform_to_default_page");
    } else {
      document
        .getElementById("autocomplete_page")
        .classList.remove("transform_to_default_page");
    }
  };

  // Enter로 검색어 추가
  const handleEnter = (event) => {
    if (keyword && event.keyCode === 13) {
      handleAddKeyword(keyword);
      setKeyword("");
      document
        .getElementById("default_search_page")
        .classList.remove("transform_to_autocomplete_page");
    }
  };

  // input창 clear
  const handleClearInputKeyword = () => {
    setKeyword("");
    document
      .getElementById("default_search_page")
      .classList.remove("transform_to_autocomplete_page");
  };

  //keyword가 있으면 true, 없으면 false
  // console.log(!!keyword);

  useEffect(() => {
    //array 타입을 string 형태로 변환
    localStorage.setItem("keywords", JSON.stringify(keywords));
  }, [keywords]);

  //검색어 삭제
  const handleRemoveKeyword = (id) => {
    const nextKeyword = keywords.filter((thisKeyword) => {
      return thisKeyword.id !== id;
    });
    setKeywords(nextKeyword);
  };

  // 최근 검색어 삭제
  const handleClearKeywords = () => {
    setKeywords([]);
  };

  return (
    <>
      <article className="w-full">
        <div>
          {/*  */}
          {/* <div className="flex items-center gap-4 px-4 py-3">
            <div>
              <Link to="/Recipe">
                <img
                  src="/images/svgIcons/directionsLeft.svg"
                  alt="directionsLeft"
                />
              </Link>
            </div>
            <div className="relative w-full">
              <input
                id="search_input"
                className="flex w-full py-1 border-none rounded px-9 bg-GreyScale-grey05 Font14 text-GreyScale-grey01"
                type="text"
                placeholder="식단검색"
                onChange={handleKeyword}
                onKeyDown={handleEnter}
                value={keyword}
              />

              <button className="absolute top-0 h-full left-2">
                <img src="/images/svgIcons/mainSearch.svg" alt="mainSearch" />
              </button>

              <button
                className="absolute top-0 h-full right-2"
                onClick={handleClearInputKeyword}
              >
                <img src="/images/svgIcons/outlinedX.svg" alt="outlinedX" />
              </button>
            </div>
          </div> */}
          {/*  */}
          <div className="flex items-center gap-4 px-4 py-3">
            <div className="w-6 h-6">
              <Link to="/Recipe">
                <img
                  className="w-full h-full"
                  src="/images/svgIcons/directionsLeft.svg"
                  alt="directionsLeft"
                />
              </Link>
            </div>
            <div className="relative w-full">
              <AutocompletePage
                handleKeyword={handleKeyword}
                keyword={keyword}
                handleEnter={handleEnter}
                handleClearInputKeyword={handleClearInputKeyword}
              />
              {/* search 버튼 */}
              <button className="absolute top-0 h-full left-2">
                <img src="/images/svgIcons/mainSearch.svg" alt="mainSearch" />
              </button>
              {/* clear 버튼 */}
              <button
                className="absolute top-0 h-full right-2"
                onClick={handleClearInputKeyword}
              >
                <img src="/images/svgIcons/outlinedX.svg" alt="outlinedX" />
              </button>
            </div>
          </div>
          {/* recommend banner */}
          <div className="flex items-center justify-between px-4 py-[10px] mb-6 bg-BrandColor-green04 Font12sb">
            <p>식재료를 선택해서 레시피를 검색해보세요.</p>
            <button>
              <img
                src="/images/svgIcons/directionsRight.svg"
                alt="directionsRight"
              />
            </button>
          </div>
          {/* 추천 검색어 */}
          <div id="default_search_page">
            <div className="px-4 pb-6 border-b">
              <p className="mb-4 Font14sb">추천 검색어</p>
              <div className="gap-x-2">
                <button className="inline-block mr-2 mb-2 px-4 py-1 border border-GreyScale-grey01 rounded-[19px] Font12">
                  알레르기
                </button>
                <button className="inline-block mr-2 mb-2 px-4 py-1 border border-GreyScale-grey01 rounded-[19px] Font12">
                  감기
                </button>
                <button className="inline-block mr-2 mb-2 px-4 py-1 border border-GreyScale-grey01 rounded-[19px] Font12">
                  이앓이
                </button>
                <button className="inline-block mr-2 mb-2 px-4 py-1 border border-GreyScale-grey01 rounded-[19px] Font12">
                  여름
                </button>
                <button className="inline-block mr-2 mb-2 px-4 py-1 border border-GreyScale-grey01 rounded-[19px] Font12">
                  한우
                </button>
                <button className="inline-block mr-2 mb-2 px-4 py-1 border border-GreyScale-grey01 rounded-[19px] Font12">
                  아기 주도
                </button>
                <button className="inline-block mr-2 mb-2 px-4 py-1 border border-GreyScale-grey01 rounded-[19px] Font12">
                  냉이
                </button>
                <button className="inline-block mr-2 mb-2 px-4 py-1 border border-GreyScale-grey01 rounded-[19px] Font12">
                  알레르기
                </button>
              </div>
            </div>
            {/* 최근 검색 */}
            <div className="px-4">
              <div className="flex justify-between pt-6 pb-4">
                <p className="Font14sb">최근 검색</p>
                <button
                  className="Font12 text-BrandColor-green01"
                  onClick={handleClearKeywords}
                >
                  전체삭제
                </button>
              </div>
              <ul>
                {keywords.map(({ id, text }) => {
                  return (
                    <li key={id}>
                      <a
                        className="flex items-center justify-between pb-3"
                        href="#!"
                      >
                        <p className="truncate Font14">{text}</p>
                        <button
                          onClick={() => {
                            handleRemoveKeyword(id);
                          }}
                        >
                          <img
                            className="min-w-[20px] ml-4"
                            src="/images/svgIcons/x.svg"
                            alt="x"
                          />
                        </button>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* Autocomplete */}
          {/* <div id="autocomplete_page" className="hidden px-4">
            <ul className="flex flex-col gap-3 Font14 text-BrandColor-green01">
              <li>
                [식재료] 본<span className="text-BrandColor-green03">죽</span>
              </li>
            </ul>
          </div> */}
        </div>
      </article>
    </>
  );
}
