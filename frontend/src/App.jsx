import { Routes, Route } from "react-router-dom";
import Navigate from "./pages/Navigate";
import Voice from "./pages/Voice";
function App() {
  return (
    <>
      <Routes>
        <Route path="/models" element={<Navigate />}></Route>
        <Route path="/voice" element={<Voice />}></Route>
      </Routes>
    </>
  );
}

export default App;
