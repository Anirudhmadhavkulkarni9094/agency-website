import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#171717",
    },
    background: {
      default: "#FAF9F5",
      paper: "#FAF9F5",
    },
    text: {
      primary: "#171717",
    },
  },

  typography: {
    fontFamily: "var(--font-geist-sans), Arial, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          fontWeight: 600,
          padding: "0.75rem 1.5rem",
          textTransform: "none",
          transition: "background-color 180ms ease, transform 180ms ease",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#333333",
            boxShadow: "none",
            transform: "translateY(-1px)",
          },
        },
      },
    },
  },
});

export default theme;
