import AppScreen from "./AppScreen";
import BottomControl from "./BottomControl";
import Notch from "./Notch";
import Education from "./ProDetials";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Zfmech from "./ProjectCards/Zfmech";
import Alumniweb from "./ProjectCards/Alumniweb";
import Anpr from "./ProjectCards/Anpr";
import Ems from "./ProjectCards/Ems";
import Placeprep from "./ProjectCards/Placeprep";

const App = () => {
  return (
    <div className="flex flex-col justify-between lg:flex-row">
      <div className="mx-auto lg:mr-8">
        <div className="border-4 border-gray-500 rounded-xl w-[250px] min-w-50 h-[520px] lg:w-[240px]">
          <Notch />
          {/* <div className="absolute h-14 bottom-52 rounded-2xl bg-gray-500 w-[5px] border-2  border-gray-500 right-[79px] bottom-[400px] lg:bottom-[200px] lg:right-[504px] lg:bottom-[180px] xl:right-[583px]"></div>
          <div className="absolute  h-10  rounded-2xl bottom-36 bg-gray-500 w-[5px] border-2  border-gray-500 right-[79px] bottom-[350px] lg:bottom-[130px] lg:right-[604px] xl:bottom-[130px] xl:right-[583px]"></div> */}
          <div className="h-[450px] overflow-hidden p-3">
            <Router>
              <div>
                <Routes>
                  <Route path="/" element={<AppScreen />} />
                  <Route path="/zfmech" element={<Zfmech />} />
                  {/* <Route path="/ems" element={<Ems />} /> */}
                  {/* <Route path="/alumni" element={<Alumniweb />} /> */}
                  <Route path="/anpr" element={<Anpr />} />
                  <Route path="/placeprep" element={<Placeprep />} />
                </Routes>
              </div>
            </Router>
            {/* <AppScreen /> */}
          </div>
          <BottomControl />
        </div>
      </div>
      <div className="overflow-auto h-[510px] border-2 border-purple-100 rounded-lg pl-7 my-7 lg:my-0">
        <Education />
      </div>
    </div>
  );
};

export default App;
