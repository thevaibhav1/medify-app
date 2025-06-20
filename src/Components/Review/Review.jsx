import icon1 from "../../assets/Review/icon1.png";
import icon2 from "../../assets/Review/icon2.png";
import icon3 from "../../assets/Review/icon3.png";
import icon4 from "../../assets/Review/icon4.png";

const Review = () => {
  return (
    <div className="bg-[linear-gradient(81deg,_#E7F0FF_9.01%,_rgba(232,241,255,0.47)_89.11%)] mx-auto p-4 pt-6">
      <div className="flex flex-col md:flex-row md:justify-around gap-6">
        {/* Left Text Section */}
        <div className="flex p-2.5 flex-col w-full md:w-[50%] justify-center text-center md:text-left">
          <p className="text-[#2AA7FF] font-[poppins] font-semibold text-[17px] leading-[18px] tracking-[0] align-middle">
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </p>
          <h2 className="font-[poppins] font-semibold text-[48px] leading-[67px] tracking-[0] align-middle text-[#1B3C74]">
            Our Families
          </h2>
          <p className="font-[inter] font-medium text-[17px] leading-[240%] tracking-[0] align-middle text-[#77829D]">
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist, we
            can provide referrals or advice about the type of practitioner you
            require. We treat all enquiries sensitively and in the strictest
            confidence.
          </p>
        </div>

        {/* Middle Column */}
        <div className="flex p-2.5 flex-col gap-5 justify-start w-full md:w-auto items-center md:items-start">
          <div className="bg-[#FFFFFF] w-full p-5  max-w-[180px] text-center flex justify-center flex-col items-center">
            <img src={icon1} alt="icon" className="w-[70%]" />
            <h2 className="font-[poppins] font-semibold text-[30px] leading-[48px] tracking-[0] text-center align-middle">
              5000+
            </h2>
            <p className="font-[poppins] font-medium text-[10px] leading-[28px] tracking-[0] text-center align-middle">
              Happy Patients
            </p>
          </div>
          <div className="bg-[#FFFFFF] p-5 w-full max-w-[180px] text-center flex justify-center flex-col items-center">
            <img src={icon2} alt="icon" className="w-[70%]" />
            <h2 className="font-[poppins] font-semibold text-[30px] leading-[48px] tracking-[0] text-center align-middle">
              1000+
            </h2>
            <p className="font-[poppins] font-medium text-[10px] leading-[28px] tracking-[0] text-center align-middle">
              Laboratories
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex p-2.5 flex-col gap-5 mt-6 md:mt-10 w-full md:w-auto items-center md:items-start">
          <div className="bg-[#FFFFFF] p-5 w-full max-w-[180px] text-center flex justify-center flex-col items-center">
            <img src={icon3} alt="icon" className="w-[70%]" />
            <h2 className="font-[poppins] font-semibold text-[30px] leading-[48px] tracking-[0] text-center align-middle">
              200+
            </h2>
            <p className="font-[poppins] font-medium text-[10px] leading-[28px] tracking-[0] text-center align-middle">
              Hospitals
            </p>
          </div>
          <div className="bg-[#FFFFFF] p-5 w-full max-w-[180px] text-center flex justify-center flex-col items-center">
            <img src={icon4} alt="icon" className="w-[70%]" />
            <h2 className="font-[poppins] font-semibold text-[30px] leading-[48px] tracking-[0] text-center align-middle">
              700+
            </h2>
            <p className="font-[poppins] font-medium text-[10px] leading-[28px] tracking-[0] text-center align-middle">
              Expert Doctors
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
