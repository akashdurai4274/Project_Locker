import DetialSection from "./DetialSection";
import NameSection from "./NameSection";
import IconBox from "./icon";

const LeftBox = ({ page }) => {
  return (
    //add p-4
    <div className={`flex-col items-center justify-center p-4 bg-white ml-16 lg:ml-0 mt-20 lg:mt-0 rounded-xl max-h-[540px] mb-20 ${page !== "1" ? "hidden lg:flex" : "flex"}`}>
      <img
        src="akash.jpg"
        alt=""
        className="relative w-40 h-40 rounded-lg bottom-14 left-1"
      />

      <div className="relative flex flex-col bottom-10 ">
        {/* Name and Designation Section */}
        <NameSection />

        {/* Social media Section */}
        <div className="flex w-40 mx-auto space-x-5 mt-30 icons">
          <IconBox id="1" />
          <IconBox id="2" />
          <IconBox id="3" />
        </div>

        {/* Detials Section */}
        <div className="p-3 mt-3 space-y-2 bg-gray-100 rounded-lg w-30">{/* w-30 */}
          <DetialSection id="1" detial="Phone" subdetial="+91 6381438956" />
          <hr className="w-48" />
          <DetialSection
            id="2"
            detial="Gmail"
            subdetial="akashdurai4274@gmail.com"
          />
          <hr className="w-48" />
          <DetialSection id="3" detial="Location" subdetial="Salem" />
          <hr className="w-48" />
          <DetialSection id="4" detial="Birthday" subdetial="Dec 4 2003" />
        </div>

        {/* Resume Download Button */}
        <div className="mx-auto mt-4">
          <a
            href="Akash_Durai.pdf"
            target="new"
            className="flex flex-row py-2 text-white bg-purple-500 border rounded-lg px-7 hover:bg-transparent hover:text-black hover:border-2 hover:border-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            <span className="mx-2 text-lg font-rajdhani">Resume</span>
            <div className="liquid"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftBox;
