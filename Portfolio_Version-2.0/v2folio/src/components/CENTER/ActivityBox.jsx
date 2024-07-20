import PropTypes from "prop-types";

const ActivityBox = (props) => {
  const loadata = (data) => {
    const icons = {
      1: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          color="rgb(80, 255, 80)"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
          />
        </svg>
      ),
      2: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          color="rgb(255, 176, 28)"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      ),
      3: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          color="rgb(255, 251, 0)"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
          />
        </svg>
      ),
      4: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          color="violet"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
          />
        </svg>
      ),
    };
    return icons[data];
  };

  const { id, data, color, topic } = props;

  const colorClass =
    {
      red: "bg-red-50 border-2 border-red-50 hover:border-2 hover:border-pink-200",

      green:
        "bg-emerald-50 border-emerald-50 hover:border-2 border-2 hover:border-teal-200",
      blue: "bg-blue-50",
      sky: "bg-sky-50",
      violet:
        "bg-violet-50  border-violet-50 hover:border-2 border-2 hover:border-purple-300",
      yellow:
        "bg-yellow-100  border-yellow-100 hover:border-2 border-2 hover:border-yellow-300",
      // Add more colors if needed
    }[color] || "bg-gray-100"; // Default to gray if color is not specified

  return (
    <div
      className={`flex flex-col w-[330px] p-4 rounded-xl ${colorClass} h-50 mt-5`}
    >
      <p className="flex space-x-3 text-justify">
        <span className="p-2 bg-white shadow-xl rounded-3xl">
          {loadata(id)}
        </span>
        <span className="mt-2 text-xl font-bold font-rajdhani">{topic}</span>
      </p>
      <p className="mt-3 text-justify font-rajdhani">{data}</p>
    </div>
  );
};

ActivityBox.propTypes = {
  id: PropTypes.string,
  data: PropTypes.string,
  color: PropTypes.string,
  topic: PropTypes.string,
  range: PropTypes.string,
};

export default ActivityBox;
