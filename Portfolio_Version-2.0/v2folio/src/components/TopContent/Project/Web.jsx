import Rings from "./Rings";
import Webpage from "./Webpage";

const Web = () => {
  return (
    <div className="">
      <div className="h-full bg-gray-100 border-4 border-gray-500 w-80 lg:w-full rounded-3xl">
        <div className="flex w-20 ml-2 justify-evenly ">
          <Rings col="2" />
          <Rings col="1" />
          <Rings col="3" />
        </div>
        <div className="h-1 mt-2 bg-gray-500 " />
        <div className="max-w-[700px] h-[450px] overflow-auto rounded-3xl rounded-t-none ">
          <Webpage />
        </div>
      </div>
    </div>
  );
};

export default Web;
