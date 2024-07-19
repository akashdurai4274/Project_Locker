const BoxStack = ({ color, icon, text1, text2 }) => {
  const coloor = (data) => {
    const colors = {
      1: "bg-yellow-200",
      2: "bg-green-200",
    };
    return colors[data];
  };
  return (
    <div
      className={`rounded-3xl ${coloor(
        color
      )}  flex p-1  items-center space-x-4 w-[290px]`}
    >
      <div className="p-1 bg-white rounded-full">
        <img src={icon} alt="" className="w-10 h-10 p-2" />
      </div>
      <div className="flex items-center pr-3 justify-around  w-[200px]">
        <span className="text-lg font-bold text-">{text1}</span>
        <span className="text-4xl font-bold">{text2}</span>
      </div>
    </div>
  );
};

export default BoxStack;
