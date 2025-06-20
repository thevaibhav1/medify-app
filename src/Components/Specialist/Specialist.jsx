import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import d1 from "../../assets/Specialist/d1.png";
import d2 from "../../assets/Specialist/d2.png";
import d3 from "../../assets/Specialist/d3.png";
import d4 from "../../assets/Specialist/d4.png";
import d5 from "../../assets/Specialist/d5.png";
import "./Specialist.css";
const Specialist = () => {
  const doctors = [
    {
      id: 1,
      label: "Doctor1",
      img: d1,
      name: "Dr. Heena Sachdeva",
      spec: "Orthopadics",
    },
    {
      id: 2,
      label: "Doctor2",
      img: d2,
      name: "Dr. Ahmad Stevens",
      spec: "Medicine",
    },
    {
      id: 3,
      label: "Doctor3",
      img: d3,
      name: "Dr. Ankur Sharma",
      spec: "Medicine",
    },
    {
      id: 4,
      label: "Doctor4",
      img: d4,
      name: "Dr. Ahmad Khan",
      spec: "Neurologist",
    },
    {
      id: 5,
      label: "Doctor5",
      img: d5,
      name: "Dr. Lesley Hull",
      spec: "Medicine",
    },
  ];

  return (
    <div className="bg-[#FFFFFF]">
      <h2 className="text-center font-semibold pb-5 text-[35px] leading-[67px] pt-5 capitalize font-poppins text-[#1B3C74]">
        Our Medical Specialist
      </h2>

      <div className="px-6 flex w-[80%] m-auto">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          //   initialSlide={0.6}
          //   centeredSlides={false}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3.5 },
          }}
          className="swiper"
        >
          {doctors.map((doc) => (
            <SwiperSlide key={doc.id} className="w-[100%] h-auto">
              <div className="flex flex-col items-center bg-gradient-to-br from-[#E1F3FF] to-[#2AA7FF]  rounded-t-[250px] p-6 pb-0 h-[80%]   ">
                <img
                  src={doc.img}
                  alt={doc.label}
                  className="w-[80] h-fill-available"
                />
              </div>
              <div className="flex flex-col items-center pt-5 pb-5">
                <p className="font-[Poppins] font-normal text-2xl leading-[48px] tracking-normal text-[#1B3C74] text-center align-middle">
                  {doc.name}
                </p>
                <span className="font-[Poppins] font-medium text-base leading-[27px] tracking-normal text-[#2AA7FF] text-center align-middle">
                  {doc.spec}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center mt-4">
        <button className="bg-[#2AA8FF] text-white px-4 py-2 mb-5 rounded font-poppins font-medium text-[14px]">
          View All
        </button>
      </div>
    </div>
  );
};

export default Specialist;
