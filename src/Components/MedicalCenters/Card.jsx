import imgcard from "../../assets/MedicalCard/imagecard.png";
import { GrLike } from "react-icons/gr";
import Slot from "./Slot";
import { useState } from "react";

const Card = ({ hosname, hosstate, hoscity, hosrating, hosAdd }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        {/* Hospital Icon + Info */}
        <div className="flex gap-4">
          <div className="bg-[#8CCFFF] rounded-full flex justify-center items-center w-[60px] h-[60px]">
            <img
              src={imgcard}
              alt="hospital"
              className="object-contain w-[65%] h-[65%]"
            />
          </div>

          <div className="font-[poppins]">
            <h3 className="text-[#14BEF0] font-semibold text-lg">{hosname}</h3>
            <li className="text-[#414146] font-bold">
              {hoscity}, {hosstate}
            </li>
            <p className="text-[#414146] text-sm">{hosAdd}</p>
            <p className="text-blue-600 text-sm cursor-pointer">more</p>

            <div className="flex gap-2 flex-wrap items-center text-sm mt-2">
              <span className="text-[#02A401] font-medium">FREE</span>
              <span className="text-[#414146] line-through">₹500</span>
              <span className="text-[#414146]">Consultation fee at clinic</span>
            </div>

            <div className="flex gap-2 items-center bg-[#00A500] w-max px-2 py-1 rounded mt-2 text-white text-sm">
              <GrLike />
              <span>{hosrating}</span>
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
            className="mt-2 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Book FREE Center Visit
          </button>
        </div>
      </div>

      {isOpen && <Slot />}
    </div>
  );
};

export default Card;
