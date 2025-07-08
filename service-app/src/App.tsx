import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPages from "./pages/MainPages/MainPages";

function App() {
  return (
    <>
      <BrowserRouter basename="/service">
        <Routes>
          <Route path="/main" element={<MainPages />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
