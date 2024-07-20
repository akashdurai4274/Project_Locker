import { useState } from "react";

import App from "./App";
import Web from "./Web";


const Projectmain = () => {

  const [comp, setComp] = useState("2");
  
  const loadcomp = (page) => {
    const nos = {
      1: <App />,
      2: <Web/>
    }
    return nos[page];
  }
  
  return (
    <div>
      <div className="flex justify-between h-10 font-rajdhani">
        <div>
          <span className="my-6 text-4xl font-extrabold bottom-2 font-rajdhani">
            Projects
          </span>
          <div className="w-16 h-2 my-3 bg-purple-600 rounded-lg"></div>
        </div>
        {/* Tab */}
        <div className="">
          <button
            onClick={() => setComp("1")}
            className="px-5 py-2 mr-4 text-black border-2 border-black rounded-lg hover:text-white hover:bg-black"
          >
            App
          </button>
          <button
            onClick={() => setComp("2")}
            className="px-5 py-2 text-black border-2 border-black rounded-lg hover:bg-black hover:text-white hover:text-whit"
          >
            Web
          </button>
        </div>
      </div>

      <div className="mt-9 font-rajdhani ">
        {loadcomp(comp)}
      </div>
    </div>
  );
};

export default Projectmain;
