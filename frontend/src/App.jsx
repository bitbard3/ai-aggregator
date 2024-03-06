import { Routes, Route } from "react-router-dom";
import Navigate from "./pages/Navigate";
import Voice from "./pages/Voice";
import Beats from "./pages/Beats";
import Images from "./pages/Images";
function App() {
  return (
    <>
      <Routes>
        <Route path="/models" element={<Navigate />}></Route>
        <Route path="/voice" element={<Voice />}></Route>
        <Route path="/beats" element={<Beats />}></Route>
        <Route path="/image" element={<Images />}></Route>
      </Routes>
    </>
  );
}

export default App;
