import PropTypes from "prop-types";

const Schools = ({ school, year, detials,}) => {

  return (
    <div
      className={`flex flex-col mx-1 my-4 lg:h-auto overflow-auto`}
    >
      <span className="text-xl">{school}</span>
      <span className="text-xl text-purple-500">{year}</span>
      <p className="text-justify text-gray-400 lg:text-base text-md">
        {detials}
      </p>
    </div>
  );
};

Schools.propTypes = {
  school: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  bottom: PropTypes.number.isRequired,
  detials: PropTypes.string.isRequired,
};

export default Schools;
