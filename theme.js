// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'Roboto', sans-serif",
    body: "'Open Sans', sans-serif",
  },
  colors: {
    primary: "#2c5282",
    secondary: "#1a202c",
    accent: "#38b2ac",
  },
});

export default theme;
