import { useState } from "react";
import Accordian from "./Accordian";
import IconLoad from "./Icon";

const TeamPerformance = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="container p-3 mr-3 max-h-[700px] bg-white rounded-3xl">
      <div className="flex justify-between px-3 mt-3">
        <div>
          <span className="text-2xl font-extrabold ">Team Performance</span>
        </div>
        <div className="flex space-x-4">
          <IconLoad id={1} />
          <IconLoad id={2} />
          <IconLoad id={3} />
        </div>
      </div>
      <Accordian
        Image="boy.png"
        Name="Akash Choudri D"
        Role="Sr.Software Developer"
        percent={98}
        value={1}
        indent="indent-9"
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
      />
      <Accordian
        Image="girl2.avif"
        Name="Kothai Priyanka D"
        Role="Sr.Data Analyst"
        percent={89}
        value={2}
        indent="indent-6"
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
      />
      <Accordian
        Image="girl.avif"
        Name="Bharathi D"
        Role="Sr.Python Developer"
        percent={80}
        value={3}
        indent="indent-20"
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
      />
    </div>
  );
};

export default TeamPerformance;
