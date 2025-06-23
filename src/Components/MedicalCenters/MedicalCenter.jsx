import TopSection from "../TopSection/TopSection";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import MedicalCards from "./MedicalCards";

const MedicalCenter = () => {
  return (
    <>
      <div className="bg-[linear-gradient(81deg,_#E7F0FF_9.01%,_rgba(232,241,255,0.47)_89.11%)] pb-20 ">
        <TopSection />
        <NavBar check={false} />

        <div className="bg-[#2AA8FF] relative flex items-center justify-center rounded-b-[16px] h-16 pb-32 sm:pb-20  ">
          <div className=" bg-[#FFFFFF] absolute top-8 rounded-2xl w-[80%]   ">
            <form className="flex flex-col sm:flex-row  gap-4 justify-evenly items-center p-5 mt-5">
              {/* Input 1 */}
              <div className="relative w-full sm:w-64 text-[16px]">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <IoIosSearch className="h-5 w-5 text-gray-400" />
                </span>
                <select className="pl-10 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-[poppins]">
                  <option value="">State</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              {/* Input 2 */}
              <div className="relative w-full sm:w-64 text-[16px]">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <IoIosSearch className="h-5 w-5 text-gray-400" />
                </span>
                <select className="pl-10 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-[poppins]">
                  <option value="">City</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              {/* Submit Button */}
              <Link to="/Medical">
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-md hover:bg-blue-600 transition  font-poppins py-2 w-[15%] text-[16px] min-w-20"
                >
                  Submit
                </button>
              </Link>
            </form>
          </div>
        </div>

        <div className="mt-30 ">
          <div className="flex justify-center items-center flex-col ">
            <p className="font-[poppins] font-medium w-[80%] text-[24px] leading-[100%] tracking-[0]  align-middle">
              15 medical centers available in Alaska
            </p>
            <p className="font-[poppins] font-normal w-[80%] flex text-[16px] gap-2 leading-[100%] tracking-[0] align-middle">
              <FaRegCheckCircle /> Book appointments with minimum wait-time &
              verified doctor details
            </p>
          </div>
        </div>
        <MedicalCards />
      </div>
    </>
  );
};
export default MedicalCenter;
