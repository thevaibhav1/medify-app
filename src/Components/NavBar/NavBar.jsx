import { Link } from "react-router-dom";
import logo from "../../assets/Vector.svg";

const NavBar = ({ check }) => {
  return (
    <div
      className={`flex flex-col md:flex-row justify-around items-center ${
        check
          ? "bg-[linear-gradient(81deg,_#E7F0FF_9.01%,_rgba(232,241,255,0.47)_89.11%)]"
          : "bg-[#FFFFFF]"
      } py-4 px-4`}
    >
      {/* Logo Section */}
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <div className={`bg-[#2AA8FF] p-2 rounded`}>
          <img src={logo} alt="Logo" className="h-6 w-6" />
        </div>
        <h4 className="text-lg font-semibold text-[#2AA8FF]">Medify</h4>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:gap-6 w-full md:w-auto">
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-center">
          <Link
            to="/found"
            className="font-normal text-[14px] font-poppins text-[#000]"
          >
            Find Doctors
          </Link>
          <a
            href="#"
            className="font-normal text-[14px] font-poppins text-[#000]"
          >
            Hospitals
          </a>
          <a
            href="#"
            className="font-normal text-[14px] font-poppins text-[#000]"
          >
            Medicines
          </a>
          <a
            href="#"
            className="font-normal text-[14px] font-poppins text-[#000]"
          >
            Surgeries
          </a>
          <a
            href="#"
            className="font-normal text-[14px] font-poppins text-[#000]"
          >
            Software for Provider
          </a>
          <a
            href="#"
            className="font-normal text-[14px] font-poppins text-[#000]"
          >
            Facilities
          </a>
        </div>
        <button className="bg-[#2AA8FF] text-white px-4 py-2 rounded mt-3 md:mt-0 font-poppins font-medium text-[14px]">
          My Bookings
        </button>
      </div>
    </div>
  );
};

export default NavBar;
