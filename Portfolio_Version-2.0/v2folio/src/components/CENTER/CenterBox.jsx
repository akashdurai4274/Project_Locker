import { useEffect } from "react";
import MainPage from "./MainPage";
import Skills from "../TopContent/Skill/Skills";
import Back from "./back";
import Certificate from "../TopContent/Certificate"
const CenterBox = ({ page, setPage }) => {
  useEffect(() => {
    setPage("1");
  }, [setPage]);

  const loadpage = (page) => {
    const pages = {
      1: <MainPage setPage={setPage} />
      2:<Certificate/>
    };
    return pages[page];
  };

  const color =
    {
      1: "bg-white p-5 lg:p-14 ",
      2: "bg-white p-5 lg:p-14 bg-gradient-to-r from-blue-200 to-pink-200",
      3: "bg-white p-5 lg:p-14",
      4: "bg-white",
    }[page] || "bg-white";

  const handleclick = () => {
      setPage((prevPage) => (parseInt(prevPage) + 1).toString());
    }
  };

  const handlebackclick = () => {
    setPage((prevPage) => (parseInt(prevPage) - 1).toString());
  };

  return (
    <div
      className={`w-full lg:w-4/5 mx-3 lg:mx-5 mb-5 lg:mb-20 ${color} rounded-xl max-h-2/5 border-2`}
    >
      {loadpage(page)}
      <div className="flex justify-around">
        {parseInt(page) !== 1 && <Back handlebackclick={handlebackclick} />}
       
      </div>
    </div>
  );
};

CenterBox.propTypes = {
  page: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default CenterBox;
