import Rounded from "./Rounded"
import Projects from "./Projects";
const Projectlist = () => {
  return (
    <div className="container bg-white rounded-3xl w-[600px]">
      <div className="mx-6 mt-5">
        <span className="text-2xl font-bold">Project List</span>
      </div>
      <div className="flex justify-around mx-3 mt-2">
        <Rounded text="In Progress" value={true} />
        <Rounded text="New Assignments" value={false} />
        <Rounded text="Completed" value={false} />
      </div>
      <div className="px-5 py-4">
        <Projects id={1} text1="Hostver" text2="Cloud Provider" percent={80}/>
        <Projects id={2} text1="5c Studios" text2="Film Studio" percent={90}/>
        <Projects id={3} text1="Funder" text2="Finance" percent={87}/>
      </div>
    </div>
  );
}

export default Projectlist
