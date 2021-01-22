import { createMuiTheme } from "@material-ui/core/styles";
import { teal, orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: teal,
    secondary: orange,
  },
});

export default theme;
