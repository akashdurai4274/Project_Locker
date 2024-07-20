import Mobile from "@mui/icons-material/SmartphoneOutlined";
import Email from "@mui/icons-material/MailOutlined";
import Location from "@mui/icons-material/LocationOn";
import Calendar from "@mui/icons-material/CalendarMonth";
import PropTypes from "prop-types";

const DetialSection = (props) => {
  function loadicon(data) {
    const icon = {
      1: <Mobile style={{ color: "rgb(255, 61, 61)" }} />,
      2: <Email style={{ color: "rgb(112, 255, 112)" }} />,
      3: <Location style={{ color: "tomato" }} />,
      4: <Calendar style={{ color: "rgb(255, 85, 255)" }} />,
    };
    return icon[data];
  }
  const { id, detial, subdetial } = props;
  return (
    <div className="flex flex-row mb-3 ">
      <div className="p-1 bg-white rounded-md shadow-md">
        <span>{loadicon(id)}</span>
      </div>
      <div className="flex flex-col mx-3">
        <span className="text-xs text-gray-600 font-rajdhani">{detial}</span>
        <span className="text-sm text-gray-800 font-rajdhani">{subdetial}</span>
      </div>
    </div>
  );
};

DetialSection.propTypes = {
  id: PropTypes.string.isRequired,
  detial: PropTypes.string.isRequired,
  subdetial: PropTypes.string.isRequired,
};
export default DetialSection;
