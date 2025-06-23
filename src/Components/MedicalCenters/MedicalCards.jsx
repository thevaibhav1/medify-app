import imgcard from "../../assets/MedicalCard/imagecard.png";
import { GrLike } from "react-icons/gr";
import img from "../../assets/MediCard/img.png";

import Slot from "./Slot";
import { useState } from "react";

const MedicalCards = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[linear-gradient(81deg,_#E7F0FF_9.01%,_rgba(232,241,255,0.47)_89.11%)]  ">
      <div className="flex justify-center px-4">
        <div className="flex flex-col md:flex-row justify-center mt-5 gap-8 w-full max-w-[1200px]">
          {/* Card */}
          <div className="flex bg-white p-5 rounded-2xl flex-col gap-4 w-full md:w-[65%]">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              {/* Hospital Icon & Text */}
              <div className="flex gap-2">
                <div className="bg-[#8CCFFF] rounded-full flex justify-center items-center w-[60px] h-[40px] sm:w-[60px] sm:h-[60px]">
                  <img
                    src={imgcard}
                    alt="hospital"
                    className="object-contain w-[65%] h-[65%]"
                  />
                </div>

                <div className="font-[poppins]">
                  <h5 className="text-[#14BEF0] font-semibold">
                    Fortis Hospital Richmond Road
                  </h5>
                  <p className="text-[#414146] font-bold">
                    Banglore, Karnataka
                  </p>
                  <p className="text-[#414146] text-sm">
                    Smilessence Center for Advanced Dentistry + 1
                  </p>
                  <p className="text-blue-600 text-sm cursor-pointer">more</p>

                  <div className="flex gap-2 flex-wrap items-center text-sm mt-1">
                    <span className="text-[#02A401] font-medium">FREE</span>
                    <span className="text-[#414146] line-through">₹500</span>
                    <span className="text-[#414146]">
                      Consultation fee at clinic
                    </span>
                  </div>

                  <div className="flex gap-2 items-center bg-[#00A500] w-max px-2 rounded-[3.5px] mt-2 text-white text-sm">
                    <GrLike />
                    <span>5</span>
                  </div>
                </div>
              </div>

              {/* Right Button Side */}
              <div className="flex flex-col items-end justify-end">
                <p className="text-green-600 font-semibold text-sm">
                  Available Today
                </p>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="mt-2 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Book FREE Center Visit
                </button>
              </div>
            </div>

            {isOpen && <Slot />}
          </div>

          {/* Image on Right */}
          <div className="w-full md:w-[35%] flex items-start">
            <img
              src={img}
              alt="card-right"
              className="object-fill w-[70%] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalCards;
