import PropTypes from "prop-types";

const Ripples2 = ({ size }) => {
  const loadsize1 = (data) => {
    const size = {
      1: "bottom-[953px] lg:bottom-[757px] right-[4px]",
      2: "bottom-[833px] lg:bottom-[663px] right-[4px]",
      3: "bottom-[570px] lg:bottom-[470px] right-[4px]",
      4: "bottom-[473px] lg:bottom-[397px] right-[4px]",
      5: "bottom-[299px] lg:bottom-[299px] right-[4px]",
    };
    return size[data];
  };
  const loadsize2 = (data) => {
    const size = {
      1: "bottom-[989px] lg:bottom-[793px] right-[28px]" /* 1 */,
      2: "bottom-[869px] lg:bottom-[699px] right-[28px]" /* 2 */,
      3: "bottom-[606px] lg:bottom-[506px] right-[28px]" /* 3 */,
      4: "bottom-[509px] lg:bottom-[433px] right-[28px]" /* 4 */,
      5: "bottom-[335px] lg:bottom-[335px] right-[28px]" /* 5*/,
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

Ripples2.propTypes = {
  size: PropTypes.string,
};
export default Ripples2;
