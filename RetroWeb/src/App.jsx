import { Route, Routes } from "react-router-dom";
import Home from "./pages/views/Home.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
