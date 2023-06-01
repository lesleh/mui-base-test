import createTheme from "@mui/material/styles/createTheme";

let theme = createTheme({
  palette: {
    primary: {
      main: "#4632d8",
    },
  },
});

theme = createTheme(theme, {
  components: {
    // Name of the component
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        variant: "contained",
      },
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: 9999,
          backgroundColor: "#fff",
          color: theme.palette.primary.main,
          border: `2px solid ${theme.palette.primary.main}`,
          textTransform: "none",
          fontSize: 20,
          fontWeight: "bold",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
            border: "2px solid transparent",
          },
          "&:active": {
            boxShadow: "none",
            backgroundColor: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
          },
        },
      },
    },
  },
});

export { theme };
