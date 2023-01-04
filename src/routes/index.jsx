import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
// import CardGame from "../pages/Home/components/Cards";


function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      {/* {CardGame.map(game => <Route path={`/${game.name}`} element={<HomePage/>}/>)} */}
      <Route path="*" element={<HomePage/>}/>
    </Routes>
  );
}

export default RoutesMain;
