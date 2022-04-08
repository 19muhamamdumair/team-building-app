import "./App.css";
import Teams from "./Components/Teams/Teams";
import { Routes, Route } from "react-router-dom";
import Main from "./Main/Main";
import MyTeam from './Components/Teams/Team/MyTeam/MyTeam'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Teams" element={<Teams />} />
      <Route path="/myTeam" element={<MyTeam />} />
    </Routes>
  );
}

export default App;
