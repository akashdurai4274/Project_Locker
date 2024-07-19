import { useState, useEffect } from "react";
import Stepper from "./Stepper";
import EducationDetails from "./EducationDetails";

const MainPages = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    // Fetch the education data from the JSON file
    fetch("detials.json")
      .then((response) => response.json())
      .then((data) => setEducationData(data))
      .catch((error) =>
        console.error("Error fetching the education data:", error)
      );
  }, []);

  return (
    <div className="flex flex-col p-4 lg:flex-row lg:p-8">
      <Stepper steps={educationData} />
      <EducationDetails details={educationData} />
    </div>
  );
};

export default MainPages;
