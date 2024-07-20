import Appprojects from "./Appprojects";
import Clients from "./Clients";

const AppScreen = () => {
  return (
    
      <div className="flex flex-col font-rajdhani">
        <div className="p-2 mx-auto border-4 rounded-full w-28 h-28 border-sky-200">
          <img
            src="akash.jpg"
            className="rounded-full "
            alt=""
          />
        </div>
        <span className="mx-auto text-lg">Akash Choudri Durai</span>
        <span className="mx-auto text-sm font-bold">Full Stack Developer</span>
        <br />

        <div className="h-64 overflow-auto">
          <span className="text-xl font-bold">Projects</span>
          <div className="flex h-[150px] w-[200px] mt-1 overflow-auto">
            <Appprojects/>
          </div>
          <span className="text-xl font-bold">Clients</span>
          <div className="flex mt-1 overflow-auto">
            <Clients />
          </div>
        </div>
      </div>
  );
};

export default AppScreen;
