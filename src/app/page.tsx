"use client";

import { MenuItem, TextField, ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";
import { theme } from "./theme";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Button variant="outlined" color="secondary">
          Clicky Button
        </Button>

        {/* <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> */}
      </main>
    </ThemeProvider>
  );
}
