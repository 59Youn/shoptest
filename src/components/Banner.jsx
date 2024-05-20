import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import style from "../css/Banner.module.css";

const Banner = () => {
  return (
    <section className={style.bannerCon}>
      <h2 hidden>배너리스트</h2>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className={style.bannerList}
      >
        <SwiperSlide className={style.slide}>
          <img src="img/Img_bg1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className={style.slide}>
          <img src="img/Img_bg2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className={style.slide}>
          <img src="img/Img_bg3.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
