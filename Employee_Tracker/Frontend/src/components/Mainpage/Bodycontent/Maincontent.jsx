import Projectlist from "./Project/Projectlist";
import TeamPerformance from "./Team/TeamPerformance";

const Maincontent = () => {
  return (
    <div className="flex">
      <TeamPerformance />
      <Projectlist />
    </div>
  );
};

export default Maincontent;
