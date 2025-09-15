import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Theme from "./theme/Theme";
import { RouterProvider } from "react-router-dom";
import Routes from "./routing/Routes";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <RouterProvider router={Routes}/>

      </ThemeProvider>
    </>
  );
}

export default App;
