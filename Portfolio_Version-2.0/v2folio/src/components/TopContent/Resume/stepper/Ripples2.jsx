import PropTypes from "prop-types";

const Ripples2 = ({ size }) => {
  const loadsize1 = (data) => {
    const size = {
      1: "bottom-[8px] xl:bottom-[629px] lg:bottom-[630px] right-[4px]",
      2: "bottom-[1238px] xl:bottom-[582px] lg:bottom-[583px] right-[4px]",
      3: "bottom-[1119px] xl:bottom-[512px] lg:bottom-[511px] right-[4px]",
      4: "bottom-[926px]  xl:bottom-[465px] lg:bottom-[464px] right-[4px]",
      5: "bottom-[734px]  lg:bottom-[415px] right-[4px]",
      6: "bottom-[558px] lg:bottom-[368px] right-[4px]",
    };
    return size[data];
  };
  const loadsize2 = (data) => {
    const size = {
      1: "bottom-[1202px] xl:bottom-[665px] lg:bottom-[666px] right-[28px]",
      2: "bottom-[1083px] xl:bottom-[618px] lg:bottom-[619px] right-[28px]",
      3: "bottom-[890px] xl:bottom-[548px] lg:bottom-[547px] right-[28px]",
      4: "bottom-[698px] xl:bottom-[501px] lg:bottom-[500px] right-[28px]",
      5: "bottom-[523px] lg:bottom-[451px] right-[28px]",
      6: "bottom-[404px] lg:bottom-[404px] right-[28px]",
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