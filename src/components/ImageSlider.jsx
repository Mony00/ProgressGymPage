import { Swiper, SwiperSlide } from "swiper/react";
import { useZoom } from "../context/Context";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

import {
  Keyboard,
  EffectCoverflow,
  Navigation,
  Pagination,
  Zoom,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";

// import { EffectCoverflow, Pagination, Navigation } from "swiper";

import styles from "./ImageSlider.module.css";

import slide_image_2 from "../assets/RF_05-10_7691.jpg";
import slide_image_3 from "../assets/RF_05-10_7750.jpg";
import slide_image_4 from "../assets/RF_05-10_7759.jpg";
import slide_image_5 from "../assets/RF_05-10_7798.jpg";
import slide_image_6 from "../assets/VAB_02-10_3328.jpg";
import slide_image_7 from "../assets/VAB_02-10_3355.jpg";

const images = [
  slide_image_2,
  slide_image_3,
  slide_image_4,
  slide_image_5,
  slide_image_6,
  slide_image_7,
];

function ImageSlider() {
  const { handleZoom, windowWidth } = useZoom();

  return (
    <div className={styles["swiper-container"]}>
      <Swiper
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        zoom={false}
        slidesPerView={1}
        spaceBetween={10}
        grabCursor={true}
        loop={true}
        onSlideChange={() => {
          // setContainerHeight("auto");
          // console.log("slide changed");
        }}
        onSwiper={() => {
          // setContainerHeight("auto");
          console.log("slide changed");
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        modules={[EffectCoverflow, Keyboard, Navigation, Pagination, Zoom]}
        // Responsive breakpoints
        breakpoints={{
          940: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            data-tooltip-content="Doubleclick to the image to zoom in"
            data-tooltip-place="top-start"
            data-tooltip-id="image-tooltip"
          >
            <img
              className={styles.image}
              src={image}
              alt="slide_image"
              loading="lazy"
              onDoubleClick={() => handleZoom(image)}
            />
          </SwiperSlide>
        ))}
        {windowWidth > 940 && <Tooltip id="image-tooltip" />}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default ImageSlider;
