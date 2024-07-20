

const BottomControl = () => {

  return (
    <div className="flex justify-between mx-10 mb-2">
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="4" width="16" height="16" fill="gray" />
      </svg>

      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" fill="gray" />
      </svg>

      
        <svg
          className="w-4 h-4"
          viewBox="0 0 20 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 12L5 19V5L19 12Z" fill="gray" />
        </svg>

    </div>
  );
};

export default BottomControl;
