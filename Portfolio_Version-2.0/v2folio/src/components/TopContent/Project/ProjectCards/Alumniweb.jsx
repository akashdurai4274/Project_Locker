import { useNavigate } from "react-router-dom";
import Gallery from "./AlumniwebGallery";

const Alumniweb = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <button onClick={() => navigate("/")}>
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
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      {/* Rounded Image */}
      <div className="relative p-2 mx-auto border-4 border-yellow-300 rounded-full bottom-[20px] w-28 h-28">
        <img
          src="Zf.png"
          className="relative h-20 rounded-lg top-1 left-3 w-15"
          alt=""
        />
      </div>
      <span className="relative bottom-4">Project II</span>
      {/* Grey Box */}
      <div className="h-[300px] overflow-auto">
        <div className="relative mt-2 bg-gray-200 rounded-md bottom-1">
          <div className="flex">
            <div className="p-2 m-2 bg-white rounded-lg shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
            <div className="mt-2">
              <p className="text-xs text-gray-600">Project title</p>
              <span className="text-sm">Alumni Website</span>
            </div>
          </div>

          <div className="flex">
            <div className="p-2 m-2 bg-white rounded-lg shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                />
              </svg>
            </div>
            <div className="mt-2">
              <p className="text-xs text-gray-600">Tools</p>
              <span className="text-sm">REACT, NODE, SQL</span>
            </div>
          </div>

          <div className="flex">
            <div className="p-2 m-2 bg-white rounded-lg shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
            <div className="mt-2">
              <p className="text-xs text-gray-600">Client</p>
              <span className="text-sm">Agni College</span>
            </div>
          </div>
        </div>
        <span>Gallery</span>
        <Gallery />
      </div>
    </div>
  );
};

export default Alumniweb;
