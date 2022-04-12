import "./App.css";
import Teams from "./Components/Teams/Teams";
import { Routes, Route } from "react-router-dom";
import Main from "./Main/Main";
import Members from "./Components/Teams/Team/Members/Members";
import NewMember from "./Components/Teams/Team/Signup/NewMember";
import CreateTeam from "./Components/Teams/Team/CreateTeam/CreateTeam";
import Todo from "./Components/Todo/Todo";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Teams" element={<Teams />} />
      <Route path="/myTeam" element={<Members />} />
      <Route path="/add-member" element={<NewMember/>}/>
      <Route path="/create-team" element={<CreateTeam/>}/>
      <Route path="/todo" element={<Todo/>}/>
    </Routes>
  );
}

export default App;
