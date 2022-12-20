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
  ];

  const defaultProps = {
    options: data,
    getOptionLabel: (option) => option.name,
  };

  return (
    <Autocomplete
      {...defaultProps}
      disablePortal
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
      clearOnEscape={false} // esc 로 input창 clear 불가
      noOptionsText="검색 결과가 없습니다."
    />
  );
}

export default ComboBox;
