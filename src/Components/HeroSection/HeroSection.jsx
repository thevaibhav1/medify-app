import image from "../../assets/doctorimg.svg";

const HeroSection = () => {
  return (
    <>
      <div className="bg-[linear-gradient(81deg,_#E7F0FF_9.01%,_rgba(232,241,255,0.47)_89.11%)] flex flex-col md:flex-row justify-around    p-4 md:p-8 md:pb-0    ">
        {/* Text Section */}
        <div className="w-full md:w-[35%] flex flex-col items-start">
          <div className="flex flex-col gap-4">
            <h5 className="font-poppins font-medium text-[24px] md:text-[31px] leading-[38px] md:leading-[68px] text-[#102851]">
              Skip the travel! Find Online
            </h5>
            <h2 className="font-poppins font-bold text-[32px] md:text-[50px] leading-[48px] md:leading-[68px] text-[#000000]">
              Medical <span className="text-[#2AA7FF]">Centers</span>
            </h2>
            <p className="font-poppins font-normal text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#5C6169]">
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </p>
            <button className="bg-[#2AA8FF] text-white px-4 py-2 rounded font-poppins font-medium text-[14px] w-1/2 sm:w-1/3 mt-6">
              Find Centers
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[40%] mt-6 md:mt-0 flex justify-center">
          <img src={image} alt="doctor" className="w-[80%] md:w-full h-auto" />
        </div>
      </div>

      {/* Debug box */}
      <div className="w-[80%] h-[250px] bg-white "></div>
    </>
  );
};

export default HeroSection;
