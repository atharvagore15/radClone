import { createTheme } from "@mui/material/styles";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";

const TEAL = "#357f7d";
const BORDER = "#c9cfd3";
const BORDER_HOVER = "#9aa5ab";
const FOCUS_RING = "0 0 0 3px rgba(53, 127, 125, 0.25)";

const theme = createTheme({
  palette: {
    primary: { main: TEAL },
    text: { primary: "#212529", secondary: "#6c757d" },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '"Outfit", "Helvetica Neue", Arial, sans-serif',
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: 40,
          backgroundColor: "#fff",
          "& .MuiOutlinedInput-notchedOutline": { borderColor: BORDER },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: BORDER_HOVER,
          },
          "&.Mui-focused": { boxShadow: FOCUS_RING },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: TEAL,
            borderWidth: 1,
          },
          "& .MuiOutlinedInput-input": {
            height: "100%",
            boxSizing: "border-box",
            padding: "0 12px",
          },
          "& .MuiSelect-select.MuiOutlinedInput-input": {
            display: "flex",
            alignItems: "center",
            minHeight: 0,
            paddingRight: 32,
          },
        },
      },
    },
    
    MuiPickersOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          padding: "0 12px",
          "& .MuiPickersOutlinedInput-notchedOutline": {
            borderColor: BORDER,
          },
          "&:hover .MuiPickersOutlinedInput-notchedOutline": {
            borderColor: BORDER_HOVER,
          },
          "&.Mui-focused": { boxShadow: FOCUS_RING },
          "&.Mui-focused .MuiPickersOutlinedInput-notchedOutline": {
            borderColor: TEAL,
            borderWidth: 1,
          },
        },
        sectionsContainer: { padding: "8.5px 0" },
      },
    },
  },
});

export default theme;