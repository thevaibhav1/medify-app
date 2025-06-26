import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Slottime from "./Slottime";
import { generateDateTabs } from "../../utils/generateDateTabs";

const Slot = ({ id }) => {
  const [info, setInfo] = useState("");

  const dateTabs = generateDateTabs();

  const handleDate = (date) => {
    setInfo({
      date: date,
      id: id,
    });
  };

  return (
    <div className="mt-4 px-4">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={5}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
      >
        {dateTabs.map((item, index) => (
          <SwiperSlide key={item.date}>
            <div
              onClick={() => handleDate(item.date)}
              className={`text-center cursor-pointer pb-2 ${
                item.date === info.date
                  ? "border-b-4 border-blue-500"
                  : "border-b border-gray-200"
              }`}
            >
              <p className="text-gray-800 font-semibold text-sm">{item.date}</p>
              <p className="text-green-600 text-xs">
                {item.slots} Slots Available
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Time Slots */}
      <Slottime selectDate={info} />
    </div>
  );
};

export default Slot;
