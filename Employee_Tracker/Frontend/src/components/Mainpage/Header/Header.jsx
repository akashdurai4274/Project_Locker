const Header = () => {
  return (
    <div className="container flex justify-between ">
      <div className="flex items-end">
        <span className="text-3xl font-bold">Advanced EMS</span>
      </div>
      {/* Search & Name */}
      <div className="flex justify-between w-[480px]">
        <div className="flex rounded-3xl bg-white w-[230px] p-1 justify-between">
          <div className="p-2 bg-white border rounded-full shadow-2xl cursor-pointer">
            <img src="search.svg" alt="" className="w-6 h-6" />
          </div>
            <input
              type=""
              placeholder="Search here..."
              className="rounded-xl focus:outline-none"
            />
        </div>
        {/* Profile */}
        <div className="flex rounded-3xl bg-white w-[220px] p-1 justify-between">
          <div className="bg-white rounded-full shadow-2xl">
            <img src="boy.png" alt="" className="w-10 h-10 rounded-full" />
          </div>
          <div className="flex flex-col max-h-4">
            <span>Akash Durai</span>
            <span>SDE-I</span>
          </div>
          <div className="p-2 bg-white border rounded-full shadow-2xl cursor-pointer">
            <img src="setting.svg" alt="" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
