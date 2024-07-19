import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import PropTypes from "prop-types"
const settings = {
  width: 150,
  height: 150,
};

const colclass = (col) => {
  const colors = {
    1:"aqua",
    2:"orange",
    3:"Red",
    4:"Black",
  }
  return colors[col];
}

function ArcDesign({ skill,value,col }) {
  return (
    <div className="flex flex-col items-center">
      <Gauge
        outerRadius="90%"
        innerRadius="85%"
        value= {value}
        {...settings}
        cornerRadius="50%"
        sx={() => ({
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 40,
            fill: "white",
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill: colclass(col),
            stroke: 2,
          },
          [`& .${gaugeClasses.referenceArc}`]: {
            fill: "white",
            strokeWidth: 40,
          },
        })}
      />
      <span className="mt-2 text-xl font-extrabold text-black">{skill}</span>
    </div>
  );
}

ArcDesign.propTypes = {
  skill: PropTypes.string.isRequired,
  col: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default ArcDesign;
