import PropTypes from "prop-types";

const Ripples = ({ size }) => {
  const loadsize1 = (data) => {
    const size = {
      1: "bottom-[860px] xl:bottom-[365px] lg:bottom-[369px] right-[4px]",
      2: "bottom-[495px] xl:bottom-[245px] lg:bottom-[249px] right-[4px]",
      3: "bottom-[155px] right-[4px]",
      4: "bottom-[14px] right-[4px]",
    };
    return size[data];
  };
  const loadsize2 = (data) => {
    const size = {
      1: " bottom-[896px] xl:bottom-[401px] lg:bottom-[405px] right-[28px]",
      2: " bottom-[531px] xl:bottom-[280px] lg:bottom-[285px] right-[28px]",
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
}
export default Ripples;
