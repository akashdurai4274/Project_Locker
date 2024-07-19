// eslint-disable-next-line react/prop-types
const Rounded = ({ text,value }) => {
  return (
    <div className={`px-2 py-[2px] ${value ? "bg-black text-white" : "text-black"} hover:text-white border border-gray-300 shadow-sm px-21 hover:bg-black rounded-xl`}>
          <span className="">{text}</span>
    </div>
  )
}

export default Rounded
