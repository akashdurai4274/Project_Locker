import { useEffect, useState } from "react";
import Schools from "../Resume/Education/Schools";
import Stepper2 from "./Prostep";
import GitHub from "@mui/icons-material/GitHub";
/* import Stepper from "../stepper/stepper";
import Schools from "./Schools";
 */
const Education = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    // Fetch the education data from the JSON file
    fetch("Detials5.json")
      .then((response) => response.json())
      .then((data) => setEducationData(data))
      .catch((error) =>
        console.error("Error fetching the education data:", error)
      );
  }, []);
  console.log(educationData);
  return (
    <div>
      <div className="flex font-bold font-rajdhani max-h-[980px]">
        <Stepper2 id="3" />
        <div className="mt-3 ">
          <span className="text-3xl font-bold">Projects </span>
          {educationData.map((edu, index) => (
            <Schools
              key={index}
              school={edu.school}
              year={edu.year}
              detials={edu.detials}
            />
          ))}
          <a
            target="new"
            href="https://github.com/akashdurai4274/Project_locker/tree/main"
            className="px-5 py-3 space-x-2 text-lg text-white bg-black rounded-lg"
          >
            <GitHub style={{ color: "#fff", height:"25px", width:"25px", marginBottom:"4px"}} />
            <span> Code in Git</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
