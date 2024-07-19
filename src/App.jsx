import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/style/index.css";
import Home from "./pages/home";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
