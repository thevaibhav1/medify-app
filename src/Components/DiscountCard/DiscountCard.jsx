// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core styles
import "swiper/css/navigation"; // Navigation buttons (optional)
import "swiper/css/pagination"; // Pagination (optional)

// Import Swiper modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import images
import imagecard1 from "../../assets/imagecard1.png";
import imagecard2 from "../../assets/imagecard2.png";

const DiscountCard = () => {
  return (
    <div className="relative mt-[38em] sm:mt-[22em] md:mt-[18em] lg:mt-[15em] w-[98%] mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide>
          <img src={imagecard1} alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagecard2} alt="image2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagecard1} alt="image3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagecard1} alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagecard2} alt="image2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagecard1} alt="image3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DiscountCard;
