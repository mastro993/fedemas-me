import { FaCircleNotch } from "react-icons/fa";

const PageLoader = () => {
  return (
    <div className="w-screen h-screen fixed opacity-75 z-50 flex justify-center items-center">
      <span className="text-white opacity-75">
        <FaCircleNotch size={50} className="animate-spin" />
      </span>
    </div>
  );
};

export { PageLoader };
