import { useEffect, useState } from "react";
import Stepper2 from "../stepper/stepper2";
import Schools from "../Education/Schools";

const Achievement = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    // Fetch the education data from the JSON file
    fetch("Detials2.json")
      .then((response) => response.json())
      .then((data) => setEducationData(data))
      .catch((error) =>
        console.error("Error fetching the education data:", error)
      );
  }, []);
  console.log(educationData);
  return (
    <div className="flex font-bold font-rajdhani mt-[870px] lg:mt-[170px] max-h-[900px]">
      <Stepper2 id="2" />
      <div className="mt-3">
        <span className="text-3xl font-bold">Achievements</span>
        {educationData.map((edu, index) => (
          <Schools
            key={index}
            school={edu.place}
            year={edu.year}
            detials={edu.detials}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievement;
