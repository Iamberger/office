import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["IranYekan", "IranYekanNum"].join(","),
  },
  palette: {
    primary: {
      main: "#fff8e7",
    },
    secondary: {
      main: "#E7EEFF",
    },
    info: {
      main: "#E7EEFF",
    },
    background: {
      default: "#fff",
    },
  },
  direction: "rtl",
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: "48px",
          borderRadius: "4px",
          padding: "12px 20px",
          gap: "20px",
          textTransform: "none",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        textPrimary: {
          color: "#fff8e7",
        },
        textSecondary: {
          color: "#E7EEFF",
        },

        outlinedSecondary: {
          borderRadius: "15px",
          borderColor: "#E7EEFF",
          color: "black",
        },

        outlinedPrimary: {
          borderRadius: "15px",
          borderColor: "#fff8e7",
          color: "#fff8e7",
        },

        containedPrimary: {
          color: "#fff",
          backgroundColor: "#fff8e7",
          border: "1px solid transparent",
          fontWeight: "400",
          "&:hover": {
            backgroundColor: "rgba(122, 87, 209, 0.9)",
          },
          "&:active": {
            backgroundColor: "rgba(122, 87, 209, 0.8)",
          },
          "&:disabled": {
            color: "#fff",
            backgroundColor: "rgba(122, 87, 209, 0.04)",
          },
          borderRadius: "15px",
        },
        containedSecondary: {
          color: "#000",
          fontWeight: "400",
          border: "1px solid transparent",
          backgroundColor: "#E7EEFF !important",
          "@media (hover: hover) and (pointer: fine)": {
            "&:hover": {
              backgroundColor: "rgba(124, 219, 152, 0.8)",
            },
          },
          "&:active": {
            backgroundColor: "rgba(124, 219, 152, 1)",
          },
          "&:disabled": {
            color: "#d9d9d9",
            backgroundColor: "rgba(170, 174, 172, 1) !important",
          },
          borderRadius: "15px",
        },
        containedInfo: {
          color: "black",
          backgroundColor: "white",
          fontWeight: "400",
          border: "1px solid transparent",
          "&:hover": {
            backgroundColor: "#f5f5f5",
            border: "1px solid #c0c2c5",
          },
          "&:active": {
            backgroundColor: "white",
          },
          borderRadius: "15px",
        },
      },
    },
  },
});
