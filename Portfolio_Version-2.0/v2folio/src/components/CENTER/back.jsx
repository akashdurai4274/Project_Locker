

const Back = ({ handleclick, handlebackclick }) => {
  return (
    <div className="flex mt-4">
      <a
        onClick={handlebackclick}
        className="flex items-center justify-center w-10 h-10 py-2 my-2 text-black border-2 border-black rounded-full cursor-pointer hover:bg-black hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg>
      </a>
    </div>
  );
};

export default Back;
