import image from "../../assets/doctorimg.svg";
import { IoIosSearch } from "react-icons/io";
import logo from "../../assets/Doctor.png";
import img from "../../assets/Drugstore.png";
import img2 from "../../assets/Hospital.png";
import img3 from "../../assets/Capsule.png";
import img4 from "../../assets/Ambulance.png";
const cards = [
  { id: 1, label: "Doctors", img: logo },
  { id: 2, label: "Drugstore", img: img },
  { id: 3, label: "Hospital", img: img2 },
  { id: 4, label: "Capsule", img: img3 },
  { id: 5, label: "Ambulance", img: img4 },
];

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-[linear-gradient(81deg,_#E7F0FF_9.01%,_rgba(232,241,255,0.47)_89.11%)] relative flex flex-col md:flex-row justify-around p-4 md:p-8">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <div className="flex flex-col gap-4 lg:gap-0 md:gap-0">
            <h5 className="font-poppins font-medium text-[24px] md:text-[25px] leading-[38px] md:leading-[68px] lg:text-[32px] text-[#102851]">
              Skip the travel! Find Online
            </h5>
            <h2 className="font-poppins font-bold text-[32px] md:text-[30px] lg:text-[50px] leading-[48px] md:leading-[68px] text-[#000000]">
              Medical <span className="text-[#2AA7FF]">Centers</span>
            </h2>
            <p className="font-poppins font-normal text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-[#5C6169]">
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </p>
            <button className="bg-[#2AA8FF] text-white px-4 py-2 rounded font-poppins font-medium text-[14px] w-1/2 sm:w-1/3 mt-6">
              Find Centers
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center xl:w-2/5">
          <img src={image} alt="doctor" className="w-4/5 md:w-full h-auto" />
        </div>

        {/* Search Form */}
        <div className="absolute m-auto bg-white rounded-2xl shadow-xl w-[90%] sm:w-[80%] md:text-[25px] mt-6 sm:left-0 top-[80%] sm:right-0 md:top-[78%] lg:top-[77%] md:w-[92%]">
          <form className="flex flex-col sm:flex-row gap-4 justify-evenly items-center p-5 mt-5">
            {/* Input 1 */}
            <div className="relative w-full sm:w-64 text-[16px]">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <IoIosSearch className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-poppins"
              />
            </div>

            {/* Input 2 */}
            <div className="relative w-full sm:w-64 text-[16px]">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <IoIosSearch className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-poppins"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md hover:bg-blue-600 transition  font-poppins py-2 w-[15%] text-[16px] min-w-20"
            >
              Submit
            </button>
          </form>

          <h2 className="font-poppins font-medium text-[20px] leading-[20px] tracking-[0.4px] text-[#102851] text-center m-5">
            You may be looking for
          </h2>

          <div className="flex flex-wrap justify-center gap-4 m-5">
            {cards.map(({ id, label, img }) => (
              <div
                key={id}
                className="flex flex-col gap-2 bg-[#FAFBFE] p-5 rounded-[8px] w-[45%] sm:w-[30%] md:w-[18%] items-center"
              >
                <img src={img} alt={label} />
                <h5 className="font-poppins font-normal text-[18px] leading-[18px] tracking-[0.36px] text-center">
                  {label}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Placeholder Section */}
    </>
  );
};

export default HeroSection;
