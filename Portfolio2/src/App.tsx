import { BrowserRouter, Routes, Route } from "react-router-dom";
import "typeface-open-sans";
import "typeface-josefin-sans";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
