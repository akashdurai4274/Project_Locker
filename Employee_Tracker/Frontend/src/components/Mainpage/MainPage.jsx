import Navbar from "../Navbar/Navbar";
import Header from "./Header/Header";
import Second from "./Secondcontent/Second";
import Maincontent from "./Bodycontent/Maincontent";


const MainPage = ({firstpage,dash}) => {
  return (
    <div className="container flex  rounded-[40px] bg-cg">
      <div className="py-2 ml-3">
        <Navbar />
      </div>
      <div className="flex flex-col w-full space-y-10 p-7">
        <Header />
        <Second />
        <Maincontent />
      </div>
    </div>
  );
};

export default MainPage;
