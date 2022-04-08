import "./App.css";
import Teams from "./Components/Teams/Teams";
import { Routes, Route } from "react-router-dom";
import Main from "./Main/Main";
import Members from "./Components/Teams/Team/Members/Members";
import SignUp from "./Components/Teams/Team/Signup/SignUp";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Teams" element={<Teams />} />
      <Route path="/myTeam" element={<Members />} />
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
  );
}

export default App;
