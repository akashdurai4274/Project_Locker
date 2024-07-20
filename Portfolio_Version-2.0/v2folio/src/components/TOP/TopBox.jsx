import TIcons from "./TIcons";
import PropTypes from "prop-types";

const TopBox = ({ setPage }) => {
  const handleicon = (id) => {
    setPage(id)
  }
  return (
    //<div className="flex flex-wrap p-2 space-x-2 bg-white rounded-xl sm:p-4 md:space-x-4 lg:space-x-6 xl:space-x-8"></div>
    <div className="flex p-1 space-x-1 bg-white lg:space-x-2 rounded-xl ">
      <TIcons id="1" title="About" onpress={() => handleicon("1")} />
      <TIcons id="2" title="Skills" onpress={() => handleicon("2")} />
      <TIcons id="5" title="Projects" onpress={() => handleicon("3")} />
      <TIcons id="3" title="Resume" onpress={() => handleicon("4")} />
      <TIcons id="6" title="Certificate" onpress={() => handleicon("5")} />
    </div>
  );
};

TopBox.propTypes = {
  setPage: PropTypes.func,
};
export default TopBox;
