import { useState, useEffect } from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Popper } from "@mui/material";

function ComboBox(
  { options, label, placeholder, onChange, value, ...props },
  ref
) {
  // 외부 화면 스크롤 방지
  useEffect(() => {
    document.body.style.cssText = `
                      position: fixed;
                      top: -${window.scrollY}px;
                      overflow-y: scroll;
                      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  const data = [
    {
      id: "1",
      name: "가지",
      description: "I love her",
    },
    {
      id: "2",
      name: "소고기가지죽",
      description: "I miss her",
    },
    {
      id: "3",
      name: "닭고기가지죽",
      description: "I hate her",
    },
    {
      id: "4",
      name: "흑미소고기가지죽",
      description: "I  her",
    },
    {
      id: "5",
      name: "밤죽",
      description: "I hate ",
    },
    {
      id: "6",
      name: "닭고기가지연두부죽",
      description: " hate her",
    },
    {
      id: "7",
      name: "전복죽",
      description: "I hate her",
    },
    {
      id: "8",
      name: "팥죽",
      description: "I hate her",
    },
    {
      id: "9",
      name: "호박죽",
      description: "I hate her",
    },
    {
      id: "10",
      name: "어죽",
      description: "I hate her",
    },
    {
      id: "11",
      name: "죽부인",
      description: "I hate her",
    },
    {
      id: "12",
      name: "어죽부인",
      description: "I hate her",
    },
    {
      id: "13",
      name: "죽이야기",
      description: "I hate her",
    },
    {
      id: "14",
      name: "본죽",
      description: "I hate her",
    },
    {
      id: "15",
      name: "주근깨",
      description: "I hate her",
    },
    {
      id: "16",
      name: "쭉쭉이",
      description: "I hate her",
    },
    {
      id: "17",
      name: "쪽잠",
      description: "I hate her",
    },
    {
      id: "18",
      name: "족발",
      description: "I hate her",
    },
    {
      id: "19",
      name: "조옥발",
      description: "I hate her",
    },
    {
      id: "20",
      name: "삼족",
      description: "I hate her",
    },
  ];

  const defaultProps = {
    options: data,
    getOptionLabel: (option) => option.name,
  };

  const [hasText, setHasText] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue == "") {
      setHasText(false);
    }
  }, [inputValue]);

  console.log(!!hasText);

  const [searchTerms, setSearchTerms] = useState([]);

  const handleRemoveKeyword = (keyword) => {
    setSearchTerms(searchTerms.filter((item) => item !== keyword));
  };

  return (
    <Autocomplete
      {...defaultProps}
      disablePortal={false} // true인 경우 포탈이 사용되지 않습니다.
      disableClearable={true} // true인 경우 선택된 옵션을 지울 수 있는 x 버튼이 표시되지 않습니다.
      id="autocomplete-combo-box"
      fullWidth={true}
      sx={{
        "& fieldset": { border: "none" },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="식단 검색"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
            setHasText(event.target.value !== "");
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              setSearchTerms([...searchTerms, inputValue]); // 검색어 추가
            }
          }}
        />
      )}
      forcePopupIcon={false} // true인 경우 항상 팝업 아이콘이 표시됩니다.
      clearOnEscape={false} // true인 경우 escape 키를 누르면 선택이 지워집니다.
      handleHomeEndKeys={false} // true인 경우 홈 및 엔드 키가 작동합니다.
      clearOnBlur={false} // true인 경우 포커스를 잃어 버리면 선택이 지워집니다.
      noOptionsText="검색 결과가 없습니다."
      PopperComponent={(props) => <Popper {...props}>{props.children}</Popper>}
    />
  );
}

export default ComboBox;
