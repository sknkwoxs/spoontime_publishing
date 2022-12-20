import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function ComboBox() {
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
      name: "x-data",
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

  return (
    <Autocomplete
      {...defaultProps}
      disablePortal={false} // true인 경우 Popper콘텐츠는 상위 구성 요소의 DOM 계층 구조 아래에 있습니다.
      disableClearable
      id="autocomplete-combo-box"
      fullWidth={true}
      sx={{
        "& fieldset": { border: "none" },
      }}
      renderInput={(params) => (
        <TextField {...params} placeholder="식단 검색" />
      )}
      forcePopupIcon={false} // ArrowDropDownIcon 노출 하지 않음
      clearOnEscape={false} // esc 로 input창 clear 불가능
      handleHomeEndKeys={false} // home, end key 사용 불가
      clearOnBlur={false} // focus시 입력 텍스트가 지워지지 않음
      noOptionsText="검색 결과가 없습니다."
    />
  );
}

export default ComboBox;
