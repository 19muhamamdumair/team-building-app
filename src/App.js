import "./App.css";
import Teams from "./Components/Teams/Teams";
import { Routes, Route } from "react-router-dom";
import Main from "./Main/Main";
import './App.css'
import Members from "./Components/Teams/Team/Members/Members";
import NewMember from "./Components/Teams/Team/Signup/NewMember";
import CreateTeam from "./Components/Teams/Team/CreateTeam/CreateTeam";
import Todo from "./Components/Todo/Todo";
import UserRole from "./Components/UserRoleForm/UserRole";
import Login from "./Components/Login/Login";
import MainRegistration from "./Components/Main Registration/MainRegistration";
import AssignRole from "./Components/AssignUserRole/AssignRole";
import Logout from "./Components/Logout/Logout";
import SplashScreen from "./Components/SplashScreen/SplashScreen";
import UpdateTeam from "./Components/Teams/Team/UpdateTeam/UpdateTeam";
import FacebookLogin from "./Components/Login/SocialMediaLogin/FacebookLogin/Facebook";
import Facebook from "./Components/Login/SocialMediaLogin/FacebookLogin/Facebook";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Teams" element={<Teams />} />
      <Route path="/myTeam" element={<Members />} />
      <Route path="/add-member" element={<NewMember/>}/>
      <Route path="/create-team" element={<CreateTeam/>}/>
      <Route path="/update-team" element={<UpdateTeam/>}/>
      <Route path="/todo" element={<Todo/>}/>
      <Route path="/user-role" element={<UserRole/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/registeration" element={<MainRegistration/>}/>
      <Route path="/assign-role" element={<AssignRole/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/loading..." element={<SplashScreen/>}/>
      <Route path="/facebook-login" element={<Facebook/>}/>
    </Routes>
  );
}

export default App;
