import image from "../../assets/doctorimg.svg";
import { IoIosSearch } from "react-icons/io";
import logo from "../../assets/Doctor.png";
import img from "../../assets/Drugstore.png";
import img2 from "../../assets/Hospital.png";
import img3 from "../../assets/Capsule.png";
import img4 from "../../assets/Ambulance.png";
import SearchForm from "../SearchForm/SearchForm";

const cards = [
  { id: 1, label: "Doctors", img: logo },
  { id: 2, label: "Drugstore", img: img },
  { id: 3, label: "Hospital", img: img2 },
  { id: 4, label: "Capsule", img: img3 },
  { id: 5, label: "Ambulance", img: img4 },
];

const HeroSection = () => {
  const handleCity = (e) => {
    setSelectCity(e.target.value);
  };
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

        <div className="w-full md:w-1/2 flex justify-center xl:w-2/5">
          <img src={image} alt="doctor" className="w-4/5 md:w-full h-auto" />
        </div>

        <div className="absolute m-auto bg-white rounded-2xl shadow-xl w-[90%] sm:w-[80%] md:text-[25px] mt-6 sm:left-0 top-[80%] sm:right-0 md:top-[78%] lg:top-[77%] md:w-[92%]">
          <SearchForm />

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
