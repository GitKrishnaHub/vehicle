import { BrowserRouter as Router  } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, grey } from "@mui/material/colors";
 
const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Home/>
    </Router>
    </ThemeProvider>
  );
}

export default App;
