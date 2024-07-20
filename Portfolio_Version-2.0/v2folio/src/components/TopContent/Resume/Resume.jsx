import Education from "./Education/Education";
import Achievement from "./Achievements/Achievement";
import Internship from "./Intership/Intership";
const Resume = () => {
  return (
    <div className="max-h-[650px] overflow-auto p-10">
      <span className="relative my-6 text-4xl font-extrabold bottom-2 font-rajdhani">
        Resume
      </span>
      <div className="w-16 h-2 mb-5 bg-purple-600 rounded-lg"></div>
      <Education />
      <Achievement />
      <Internship />
    </div>
  );
};

export default Resume;
