import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Row.scss";

const Row: React.FC<{
  heading: string;
  className: string;
}> = ({ heading, className }) => {
  return (
    <section className={className}>
      <h3>{heading}</h3>
      <div>
        <Swiper
          slidesPerView={className === 'Row' ? 9.4 : 7.4}
          spaceBetween={5}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide">
              <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Row;
