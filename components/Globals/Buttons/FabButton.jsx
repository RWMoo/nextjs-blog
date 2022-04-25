import { FaShare } from "react-icons/fa";

const FabButton = ({ icon, bgColor }) => {
  return (
    <button
      className={`w-10 h-10 rounded-full shadow-sm hover:shadow-lg flex justify-center items-center ${bgColor}`}
    >
      {icon}
    </button>
  );
};

export default FabButton;
