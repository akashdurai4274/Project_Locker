import DashBoard from "./components/Dashboard";
import Profile from "./components/Profile";
import Employeelist from "./components/Employeelist";
import Addemployee from "./components/Addemployee";
import Logo from "./components/Logo";
import Logout from "./components/Logout";
const Navbar = () => {
  return (
    <div className="flex-col w-16 p-2 bg-white rounded-full">
      <Logo />
      <div className="mt-5 space-y-5">
        {/* <DashBoard /> */}
        <Profile />
        <Employeelist />
        <Addemployee />
      </div>
      <div className="mt-44">
        <Logout />
      </div>
    </div>
  );
};

export default Navbar;
