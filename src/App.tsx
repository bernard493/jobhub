import { useState } from "react";
import { Layouts } from "./components/Layout/Layouts";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layouts />
    </BrowserRouter>
  );
}
export default App;
