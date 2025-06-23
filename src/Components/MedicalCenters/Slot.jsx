import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Slottime from "./Slottime";
import { generateDateTabs } from "../../utils/generateDateTabs";

const Slot = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const dateTabs = generateDateTabs();

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
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {dateTabs.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`text-center cursor-pointer pb-2 ${
                index === activeIndex
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
      <Slottime />
    </div>
  );
};

export default Slot;
