
import BookIcon from "./BookIcon";
import Ripples from "./Ripples";
import PropTypes from "prop-types";

const Stepper = ({ id }) => {

  const loadheight = (id) => {
    const height = {
      1: "h-[885px] lg:h-[294px] xl:h-[390px]",
      2: "h-[680px]",
    };
    console.log(typeof (id));
    return height[id];
  };
  
  
  return (
    <div>
      <div className="relative w-12 h-12 bg-black rounded-lg top-2 right-5 threed">
        <BookIcon id={id} />
      </div>
      <div
        className={`w-1 rounded-lg shadow-lg ${loadheight(
          id
        )} threeds shadow-black-100`}
      ></div>
      <Ripples size="1" />
      <Ripples size="2" />
      <Ripples size="3" />
    </div>
  );
};

Stepper.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Stepper;
