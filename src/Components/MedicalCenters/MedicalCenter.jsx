import TopSection from "../TopSection/TopSection";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import MedicalCards from "./MedicalCards";
import SearchForm from "../SearchForm/SearchForm";
import { useContext } from "react";
import { Context } from "../../store/Context";
const MedicalCenter = () => {
  const { hospitals, selectedCity } = useContext(Context);
  console.log(hospitals);
  return (
    <>
      <div className="bg-[linear-gradient(81deg,_#E7F0FF_9.01%,_rgba(232,241,255,0.47)_89.11%)] pb-20 ">
        <TopSection />
        <NavBar check={false} />

        <div className="bg-[#2AA8FF] relative flex items-center justify-center rounded-b-[16px] h-16 pb-32 sm:pb-20  ">
          <div className=" bg-[#FFFFFF] absolute top-8 rounded-2xl w-[80%]   ">
            <SearchForm />
          </div>
        </div>

        <div className="mt-30 ">
          <div className="flex justify-center items-center flex-col ">
            <h1 className="font-[poppins] font-medium w-[80%] text-[24px] leading-[100%] tracking-[0]  align-middle">
              {hospitals.length} medical centers available in{" "}
              {selectedCity.toLowerCase()}
            </h1>
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
