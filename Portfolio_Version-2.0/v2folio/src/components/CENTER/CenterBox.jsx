import { useEffect } from "react";
import MainPage from "./MainPage";
import Skills from "../TopContent/Skill/Skills";
import PropTypes from "prop-types";
import Resume from "../TopContent/Resume/Resume";
import "./subcss.css";
import Project from "../TopContent/Project/Project";
import Continue from "./Continue";
import Back from "./back";
import Certificate from "../TopContent/Certificate"
const CenterBox = ({ page, setPage }) => {
  useEffect(() => {
    setPage("1");
  }, [setPage]);

  const loadpage = (page) => {
    const pages = {
      1: <MainPage setPage={setPage} />,
      2: <Skills />,
      3: <Project />,
      4: <Resume />,
      5:<Certificate/>
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
    if (parseInt(page) === 5) {
      setPage(false);
    } else {
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
        {parseInt(page) !== 5 && <Continue handleclick={handleclick} />}
      </div>
    </div>
  );
};

CenterBox.propTypes = {
  page: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default CenterBox;
