import BookIcon from "./BookIcon";
import Ripples from "./Ripples4";
import PropTypes from "prop-types";

const Stepper = ({ id }) => {
  const loadheight = (id) => {
    const height = {
      1: "h-[275px]",
      2: "h-[680px]",
      3: "h-[255px] lg:h-[157px]",
    };
    console.log(typeof id);
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
      <Ripples size="4" />
      <Ripples size="2" />
    </div>
  );
};

Stepper.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Stepper;
