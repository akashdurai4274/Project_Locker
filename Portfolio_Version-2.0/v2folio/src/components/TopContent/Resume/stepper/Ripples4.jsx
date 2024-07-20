import PropTypes from "prop-types";

const Ripples = ({ size }) => {
  const loadsize1 = (data) => {
    const size = {
      1: "bottom-[497px] lg:bottom-[250px] right-[4px]",
      2: "bottom-[300px] lg:bottom-[203px] right-[4px]",
      3: "bottom-[155px] right-[4px]",
      4: "bottom-[14px] right-[4px]",
    };
    return size[data];
  };
  const loadsize2 = (data) => {
    const size = {
      1: " bottom-[532px] lg:bottom-[285px] right-[28px]",
      2: " bottom-[335px] lg:bottom-[239px] right-[28px]",
      3: " bottom-[190px] right-[28px]",
      4: " bottom-[50px] right-[28px]",
    };
    return size[data];
  };
  return (
    <div>
      <div
        className={`relative w-3 h-3 bg-purple-500 rounded-lg ${loadsize1(
          size
        )}`}
      ></div>
      <div className={`relative circles ${loadsize2(size)}`}>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
      </div>
    </div>
  );
};

Ripples.propTypes = {
  size: PropTypes.string,
};
export default Ripples;
