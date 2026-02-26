import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "@/components/pages/Home";
import Checkout from "./components/pages/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
