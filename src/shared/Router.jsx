import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import BottomNav from "../components/layout/BottomNav";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <BottomNav />
    </BrowserRouter>
  );
};

export default Router;
