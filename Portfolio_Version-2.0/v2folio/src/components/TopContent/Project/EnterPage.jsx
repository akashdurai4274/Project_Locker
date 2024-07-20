import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Zfmech from "./ProjectCards/Zfmech";
import Alumniweb from "./ProjectCards/Alumniweb";
import Anpr from "./ProjectCards/Anpr";
import App from "./App";

const EnterPage = () => {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/zfmech" element={<Zfmech />} />
            <Route path="/alumni" element={<Alumniweb />} />
            <Route path="/ems" element={<Alumniweb />} />
            <Route path="/anpr" element={<Anpr />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default EnterPage;
