import { useEffect, useState } from "react";
import { Layouts } from "./components/Layout/Layouts";
import { BrowserRouter } from "react-router-dom";
// import * as te from "tw-elements";
import { ThemeProvider } from "@material-tailwind/react";

function App() {
  // useEffect(() => {
  //   const importTE = async () => {
  //     await import("tw-elements");
  //   };
  //   importTE();
  // }, []);

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Layouts />
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
