import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import UserTypeSelect from "./pages/UserTypeSelect";
import ClientSignup from "./pages/ClientSignup";
import PeerSupportSignup from "./pages/PeerSupportSignup";
import UserTypeLogin from "./pages/UserTypeLogin";
import ClientLogin from "./pages/ClientLogin";
import PeerLogin from "./pages/PeerLogin";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/UserTypeForRadley" element={<UserTypeSelect />} />
        <Route path="/UserTypeLogin" element={<UserTypeLogin />} />
        <Route path="/patientsignup" element={<ClientSignup />} />
        <Route path="/signup" element={<PeerSupportSignup />} />
        <Route path="/patientlogin" element={<ClientLogin />} />
        <Route path="/login" element={<PeerLogin />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App
