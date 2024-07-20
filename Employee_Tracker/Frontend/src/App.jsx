// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login"; // Import your Login component
import { AuthProvider } from "./context/AuthContext"; // Ensure to import your AuthProvider
import MainPage from "./components/Mainpage/MainPage";
import Profile from "./pages/Profile";
const App = () => {
  
  return (
    <AuthProvider>
      <Router>
        {/* <Navbar /> */}
        <div className="h-full p-5 px-10 mx-auto bg-white font-base">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/employees" element={<Employeelist />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/add-employee" element={<Addemployees />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
