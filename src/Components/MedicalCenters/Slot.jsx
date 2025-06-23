import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Slottime from "./Slottime";

const Slot = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const today = new Date();
  for (let i = 0; i <= 7; i++) {
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + i);

    const weekday = futureDate.toLocaleDateString("en-US", {
      weekday: "short",
    });
    const day = futureDate.getDate();
    const month = futureDate.toLocaleDateString("en-US", { month: "short" });

    const formattedDate = `${weekday}, ${day} ${month}`;
    console.log(formattedDate);
  }

  const dateTabs = [
    { date: "Today", slots: 11 },
    { date: "Tomorrow", slots: 17 },
    { date: "Fri, 5 May", slots: 18 },
    { date: "Sat, 6 May", slots: 14 },
    { date: "Sun, 7 May", slots: 12 },
    { date: "Mon, 8 May", slots: 16 },
  ];

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
