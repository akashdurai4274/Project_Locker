import { useEffect, useState } from "react";
import Stepper from "../stepper/stepper3";
import Schools from "../Education/Schools";

const Internship = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    // Fetch the education data from the JSON file
    fetch("Detials3.json")
      .then((response) => response.json())
      .then((data) => setEducationData(data))
      .catch((error) =>
        console.error("Error fetching the education data:", error)
      );
  }, []);
  console.log(educationData);
  return (
    <div>
      <div className="flex mt-[750px] lg:mt-0 font-bold font-rajdhani max-h-[480px]">
        <Stepper id="3" />
        <div className="mt-3 ">
          <span className="text-3xl font-bold">Internship</span>
          {educationData.map((edu, index) => (
            <Schools
              key={index}
              school={edu.school}
              year={edu.year}
              detials={edu.detials}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Internship;
