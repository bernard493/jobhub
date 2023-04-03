import { useEffect ,useState } from "react";
import { Layouts } from "./components/Layout/Layouts";
import { BrowserRouter } from "react-router-dom";
// import * as te from "tw-elements";





function App() {

  // useEffect(() => {
  //   const importTE = async () => {
  //     await import("tw-elements");
  //   };
  //   importTE();
  // }, []);


  return (
    <BrowserRouter>
      <Layouts />
    </BrowserRouter>
  );
}
export default App;
