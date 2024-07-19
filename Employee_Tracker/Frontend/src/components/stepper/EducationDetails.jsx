import PropTypes from "prop-types";

const EducationDetails = ({ details }) => {
  return (
    <div className="w-3/4">
      {details.map((edu, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-bold">{edu.school}</h3>
          <p className="text-gray-600">{edu.year}</p>
          <p className="mt-2">{edu.details}</p>
        </div>
      ))}
    </div>
  );
};

EducationDetails.propTypes = {
  details: PropTypes.array.isRequired,
};

export default EducationDetails;
