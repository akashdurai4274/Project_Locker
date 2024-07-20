import PropTypes from "prop-types";


const Rings = ({ col }) => {
  
  const color = (col) => {
    const colors = {
      1: "bg-yellow-500",
      2: "bg-red-500",
      3: "bg-green-500",
    };
    return colors[col];
  }
  return (
    <div className='flex'>
      <div className={`w-6 h-6 mt-3  border-gray-500 ${color(col)} rounded-3xl`}></div>
    </div>
  );
}

Rings.propTypes = {
  col : PropTypes.string,
}
export default Rings
