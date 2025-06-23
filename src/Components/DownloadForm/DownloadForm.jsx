import img1 from "../../assets/Downloadform/img1.png";
import img2 from "../../assets/Downloadform/img2.png";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { FaApple } from "react-icons/fa";
const DownloadForm = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-[linear-gradient(81deg,_#E7F0FF_9.01%,_rgba(232,241,255,0.47)_89.11%)] px-4 py-10">
      <div className="w-full lg:w-1/2 relative flex justify-center mb-10 lg:mb-0">
        <div className="relative">
          <img src={img1} className="w-full max-w-md" />
          <div className="absolute top-12 left-6 lg:left-5 w-full xl:left-5">
            <img src={img2} className="w-[90%] rounded-[15px]" />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 p-4">
        <h2 className="text-4xl sm:text-4xl lg:text-5xl lg:w-[60%] text-[#1B3C74] font-[poppins] font-semibold   leading-[67px] align-middle ">
          Download the <span className="text-[#2AA7FF]">Medify</span> App
        </h2>
        <p className="font-[lato] font-bold text-base leading-6 align-middle mb-6">
          Get the link to download the app
        </p>

        <form className="flex flex-col sm:flex-row items-center   mb-6">
          <div className="flex">
            <span className="px-3 py-2 bg-[#FAFBFE] gray-100 border border-gray-300 rounded-md text-gray-700 text-sm">
              +91
            </span>
            <input
              type="number"
              placeholder="Enter phone number"
              className="flex-1 w-full px-4 py-2  border border-gray-300 bg-[#FAFBFE] rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-sm ml-4"
          >
            Send SMS
          </button>
        </form>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-black text-white px-4 py-2 rounded-md flex items-center justify-center gap-2">
            <SiGoogledisplayandvideo360 />
            Google Play
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-md flex items-center justify-center gap-2">
            <FaApple />
            App Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadForm;
