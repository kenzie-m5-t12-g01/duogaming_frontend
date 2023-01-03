import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";


function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="*" element={<HomePage/>}/>
    </Routes>
  );
}

export default RoutesMain;
