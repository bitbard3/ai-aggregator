import { Routes, Route } from "react-router-dom";
import Navigate from "./pages/Navigate";
import Voice from "./pages/Voice";
import Beats from "./pages/Beats";
function App() {
  return (
    <>
      <Routes>
        <Route path="/models" element={<Navigate />}></Route>
        <Route path="/voice" element={<Voice />}></Route>
        <Route path="/beats" element={<Beats />}></Route>
      </Routes>
    </>
  );
}

export default App;
