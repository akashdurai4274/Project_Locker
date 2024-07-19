import PropTypes from "prop-types";

const Roundeddetial = ({ Image, Name, Role, percent, isOpen, indent }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center space-x-3">
        <img src={Image} className="w-12 h-12 rounded-full" alt="" />
        <div className="flex flex-col">
          <span className="text-black">{Name}</span>
        </div>
        <span className={`${indent} text-md ${isOpen ? "text-gray-500 text-sm" : ""}`}>
          {Role}
        </span>
      </div>
      <div className="flex items-center mr-2 space-x-8">
        <span className="text-2xl font-bold text-black">{percent}%</span>
        <div className="w-2 h-2 bg-green-400 rounded-full" />
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

Roundeddetial.propTypes = {
  Image: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  indent: PropTypes.string.isRequired,
  Role: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Roundeddetial;
