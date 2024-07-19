import PropTypes from "prop-types";
import Roundeddetial from "./Roundeddetial";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import ArcDesign from "./Gauge";

export function Accordian({
  Image,
  Name,
  Role,
  percent,
  value,
  indent,
  openIndex,
  setOpenIndex,
}) {
  const handleOpen = () => {
    setOpenIndex(openIndex === value ? null : value);
  };

  return (
    <div className="container mt-5">
      <Accordion
        open={openIndex === value}
        className={`mb-2 border pl-2 ${
          openIndex === value
            ? "rounded-3xl bg-gradient-to-r from-[#f3eeff] to-[#f6efff] text-white"
            : "rounded-full"
        } border-blue-gray-100`}
      >
        <AccordionHeader
          onClick={handleOpen}
          className="transition-colors border-b-0"
        >
          <Roundeddetial
            Image={Image}
            Name={Name}
            Role={Role}
            percent={percent}
            indent={indent}
            isOpen={openIndex === value}
          />
        </AccordionHeader>
        {openIndex === value && (
          <AccordionBody className="">
            <hr className="mt-2" />
            <div className="flex flex-wrap justify-between">
              <ArcDesign skill="Problem Solving" value={80} col={1} />
              <ArcDesign skill="Work Consistency" value={90} col={2} />
              <ArcDesign skill="Design Skill" value={85} col={3} />
              <ArcDesign skill="Animation Skill" value={70} col={4} />
            </div>
          </AccordionBody>
        )}
      </Accordion>
    </div>
  );
}

Accordian.propTypes = {
  Image: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  indent: PropTypes.string.isRequired,
  Role: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  openIndex: PropTypes.number,
  setOpenIndex: PropTypes.func.isRequired,
};

export default Accordian;
