import img from "../../assets/MediCard/img.png";
import Card from "./Card";
import { useContext } from "react";
import { Context } from "../../store/Context";

const MedicalCards = () => {
  const { hospitals } = useContext(Context);

  return (
    <div className="bg-[linear-gradient(81deg,_#E7F0FF_9.01%,_rgba(232,241,255,0.47)_89.11%)] py-10 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8">
        {/* Cards List */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          {Array.isArray(hospitals) && hospitals.length > 0 ? (
            hospitals.map((hos, idx) => (
              <Card
                key={idx}
                hosname={hos["Hospital Name"] || hos.name}
                hosstate={hos.State}
                hoscity={hos.City}
                hosAdd={hos["Hospital Type"]}
                hosrating={hos["Hospital overall rating"]}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No hospitals found.</p>
          )}
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/3 flex justify-center items-start">
          <img
            src={img}
            alt="card-right"
            className="w-full max-w-[300px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MedicalCards;
