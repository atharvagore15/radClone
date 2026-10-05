import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import UserTypeSelect from "./pages/UserTypeSelect";
import ClientSignup from "./pages/ClientSignup";
import PeerSupportSignup from "./pages/PeerSupportSignup";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/UserTypeForRadley" element={<UserTypeSelect />} />
        <Route path="/patientsignup" element={<ClientSignup />} />
        <Route path="/signup" element={<PeerSupportSignup />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App
