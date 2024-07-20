

// eslint-disable-next-line react/prop-types, no-unused-vars
const Continue = ({ handleclick, handlebackclick }) => {
 
  return (
    <div className="flex mt-4">
      <a
        onClick={handleclick}
        className="flex items-center justify-center w-10 h-10 px-1 py-2 my-2 text-black border-2 border-black rounded-full cursor-pointer hover:bg-black hover:text-white"
      > 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="rounded-full size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
          />
        </svg>
      </a>
    </div>
  );
}

export default Continue
