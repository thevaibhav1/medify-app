import Drugstore from "../../assets/Specialisation/Drugstore.png";
import Stethoscope from "../../assets/Specialisation/Stethoscope.png";
import HeartRate from "../../assets/Specialisation/HeartRate.png";
import HRM from "../../assets/Specialisation/HRM.png";
import BS from "../../assets/Specialisation/BS.png";
import Immune from "../../assets/Specialisation/Immune.png";
import image8 from "../../assets/Specialisation/image8.png";
const SpecialisationCard = () => {
  const cards = [
    { id: 1, label: "Doctors", img: Drugstore },
    { id: 2, label: "Drugstore", img: Stethoscope },
    { id: 3, label: "Hospital", img: HeartRate },
    { id: 4, label: "Capsule", img: HRM },
    { id: 5, label: "Ambulance", img: BS },
    { id: 6, label: "Clinic", img: Immune },
    { id: 7, label: "Vaccine", img: Drugstore },
    { id: 8, label: "Therapy", img: image8 },
  ];
  return (
    <div className="bg-[linear-gradient(81deg,_#E7F0FF_9.01%,_rgba(232,241,255,0.47)_89.11%)]">
      <h2 className="text-center font-semibold text-[35px] leading-[67px] pt-5  align-middle capitalize font-poppins text-[#1B3C74]">
        Find By Specialisation
      </h2>
      <div className="flex flex-wrap justify-center gap-4 m-5">
        {cards.map(({ id, label, img }) => (
          <div
            key={id}
            className="flex flex-col gap-2 bg-[#FAFBFE] p-5 rounded-[8px] w-[48%] md:w-[22%] items-center"
          >
            <img src={img} alt={label} />
            <h5 className="font-poppins font-normal text-[18px] leading-[18px] tracking-[0.36px] text-center">
              {label}
            </h5>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-[#2AA8FF] text-white px-4 py-2 mb-5 rounded font-poppins font-medium text-[14px]">
          View All
        </button>
      </div>
    </div>
  );
};
export default SpecialisationCard;
