import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Appprojects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the JSON data (replace 'data.json' with the path to your JSON file)
    fetch("Detial4.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:" + error));
  }, []);

  console.log(data);
  return (
    <div className="flex">
      {data.map((item, index) => (
        <Box
          key={index}
          img={item.imgUrl}
          topic={item.topic}
          color={item.color}
          data={item.datas}
        />
      ))}
    </div>
  );
};

const Box = ({ img, topic, color, data }) => {
  const navigate = useNavigate();
  const colorClass =
    {
      red: "bg-red-50 border-2 border-red-50 hover:border-2 hover:border-pink-200",
      green:
        "bg-emerald-50 border-emerald-50 hover:border-2 border-2 hover:border-teal-200",
      blue: "bg-blue-50 border-emerald-50 hover:border-2 border-2 hover:border-teal-200",
      sky: "bg-sky-50 border-sky-50 hover:border-2 border-2 hover:border-sky-200",
      violet:
        "bg-violet-50 border-violet-50 hover:border-2 border-2 hover:border-purple-300",
      yellow:
        "bg-yellow-100 border-yellow-100 hover:border-2 border-2 hover:border-yellow-300",
      // Add more colors if needed
    }[color] || "bg-gray-100"; // Default to gray if color is not specified

  const handleClick = (data) => {
    const page =
      {
        1: "/zfmech",
        2: "/alumni",
        3: "/ems",
        4: "/anpr",
        5: "/placeprep",
      }[data] || "/";
    navigate(page);
  };

  return (
    <div className={`w-40 mr-4 rounded-lg shadow-lg ${colorClass}`}>
      <div className="flex justify-between mr-2">
        <img
          src={img}
          alt={topic}
          className="object-cover w-10 h-10 m-2 transition-transform duration-200 rounded-full hover:scale-110"
        />
        <button onClick={() => handleClick(data)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`rounded-full size-6 hover:border-current`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      <div className="p-2">
        <h3 className="text-xl font-semibold">{topic}</h3>
      </div>
    </div>
  );
};

Box.propTypes = {
  color: PropTypes.string,
  topic: PropTypes.string,
  img: PropTypes.string,
  data: PropTypes.string,
};

export default Appprojects;
