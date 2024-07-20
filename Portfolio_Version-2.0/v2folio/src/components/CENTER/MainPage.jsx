import About from "./About"
import What_i_do from "./What_i_do"
import PropTypes from "prop-types";

const MainPage = ({ setPage }) => {
 
  return (
    <div>
      <About />
      <What_i_do />
    </div>
  );
}

MainPage.propTypes = {
  setPage: PropTypes.func,
};
export default MainPage
