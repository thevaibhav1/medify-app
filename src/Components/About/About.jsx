import logo from "../../assets/Vector.svg";
import { FiFacebook } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
const About = () => {
  const info = [
    "About Us",
    "Our Pricing",
    "Our Gallery",
    "Appointment",
    "Privacy Policy",
  ];

  return (
    <section className="bg-[#1B3C74]">
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 px-5 justify-evenly p-8">
        {/* Left Logo and Socials */}
        <div className="flex w-max flex-col justify-between items-center md:items-start">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-[#2AA8FF] p-1.5 rounded">
              <img src={logo} alt="Logo" className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-semibold text-[#2AA8FF]">Medify</h4>
          </div>
          <div className="flex gap-2">
            <div className="bg-[#FFFFFF] p-2 rounded-[100px] text-[#2AA7FF]">
              <FiFacebook />
            </div>
            <div className="bg-[#FFFFFF] p-2 rounded-[100px] text-[#2AA7FF]">
              <FaTwitter />
            </div>
            <div className="bg-[#FFFFFF] p-2 rounded-[100px] text-[#2AA7FF]">
              <BsYoutube />
            </div>
            <div className="bg-[#FFFFFF] p-2 rounded-[100px] text-[#2AA7FF]">
              <BsPinterest />
            </div>
          </div>
        </div>

        {[1, 2, 3].map((col) => (
          <div
            key={col}
            className="flex w-max flex-col items-center md:items-start"
          >
            {info.map((item, index) => (
              <div
                key={index}
                className="flex items-center mb-3 text-[#FFFFFF]"
              >
                <IoIosArrowForward className="mr-1" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
