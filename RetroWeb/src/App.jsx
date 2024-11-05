import { Route, Routes } from "react-router-dom";
import Home from "./pages/views/Home.jsx";
import { useEffect } from "react";
import Contact from "./pages/views/Contact.jsx";

function App() {
  // useEffect(() => {
  //   const disableRightClick = (e) => e.preventDefault();
  //   document.addEventListener("contextmenu", disableRightClick);

  //   return () => {
  //     document.removeEventListener("contextmenu", disableRightClick);
  //   };
  // }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
