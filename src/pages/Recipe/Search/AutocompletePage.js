import { useState, useEffect } from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Popper } from "@mui/material";

function ComboBox() {
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
      name: "Stefanie",
      description: "I love her",
    },
    {
      id: "2",
      name: "Jasmin",
      description: "I miss her",
    },
    {
      id: "3",
      name: "Angie",
      description: "I hate her",
    },
    {
      id: "4",
      name: "Jackson",
      description: "I  her",
    },
    {
      id: "5",
      name: "Tom",
      description: "I hate ",
    },
    {
      id: "6",
      name: "Chris",
      description: " hate her",
    },
    {
      id: "7",
      name: "Ro",
      description: "I hate her",
    },
    {
      id: "8",
      name: "Qwer",
      description: "I hate her",
    },
    {
      id: "9",
      name: "Wan",
      description: "I hate her",
    },
    {
      id: "10",
      name: "Kim",
      description: "I hate her",
    },
    {
      id: "11",
      name: "dad",
      description: "I hate her",
    },
    {
      id: "12",
      name: "x-daa",
      description: "I hate her",
    },
    {
      id: "13",
      name: "zzz",
      description: "I hate her",
    },
    {
      id: "14",
      name: "test14",
      description: "I hate her",
    },
    {
      id: "15",
      name: "test15",
      description: "I hate her",
    },
    {
      id: "16",
      name: "test16",
      description: "I hate her",
    },
    {
      id: "17",
      name: "test17",
      description: "I hate her",
    },
    {
      id: "18",
      name: "test18",
      description: "I hate her",
    },
    {
      id: "19",
      name: "test19",
      description: "I hate her",
    },
    {
      id: "20",
      name: "test20",
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
