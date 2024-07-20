import { useState } from "react";
import CenterBox from "./CENTER/CenterBox";
import LeftBox from "./LEFT/LeftBox";
import TopBox from "./TOP/TopBox";

const MainPage = () => {
  const [page, setPage] = useState("");
  return (
    <div className="">
      <div className="flex justify-center p-10 mx-auto lg:pt-10 lg:justify-end lg:mx-24">
        <TopBox setPage={setPage} />
      </div>
      <div className="flex flex-wrap lg:flex-nowrap lg:flex-row lg:mx-20">
        <div className="">
          <LeftBox page={page} />
        </div>
        <CenterBox page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default MainPage;
