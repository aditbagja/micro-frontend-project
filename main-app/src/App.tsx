import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Home/Homepage";
import ServiceApp from "serviceApp/ServiceApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/service/*" element={<ServiceApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
