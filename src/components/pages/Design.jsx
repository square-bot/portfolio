import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import SwiperCore, {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
} from "swiper";
import styled from "styled-components";

import "swiper/modules/scrollbar/scrollbar.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Keyboard, Scrollbar, Navigation, Pagination]);

const collection = [
  {
    id: 1,
    src: "/img/front page.jpg",
    mobile: "../../assets/img/mobile/front page.m.jpg",
    title: "front page portfolio",
  },

  {
    id: 2,
    src: "img/portfolio-1.jpg",
    mobile: "../../assets/img/mobile/portfolio-1.m.jpg",
    title: "portfolio",
  },
  {
    id: 3,
    src: "img/portfolio-2.jpg",
    mobile: "../../assets/img/mobile/portfolio-2.m.jpg",
    title: "portfolio",
  },
  {
    id: 4,
    src: "img/portfolio-3.jpg",
    mobile: "../../assets/img/mobile/portfolio-3.m.jpg",
    title: "portfolio",
  },
  {
    id: 5,
    src: "img/portfolio-4.jpg",
    mobile: "../../assets/img/mobile/portfolio-4.m.jpg",
    title: "portfolio",
  },
  {
    id: 6,
    src: "img/d2d-1.jpg",
    title: "door to door international",
  },
  {
    id: 7,
    src: "img/d2d-2.jpg",
    title: "door to door international",
  },
  {
    id: 8,
    src: "img/d2d-3.jpg",
    title: "door to door international",
  },
  {
    id: 9,
    src: "img/d2d-4.jpg",
    title: "door to door international",
  },
  {
    id: 10,
    src: "img/pub-1.jpg",
    title: "red bear white bear pub",
  },
  {
    id: 11,
    src: "img/pub-2.jpg",
    title: "red bear white bear pub",
  },
  {
    id: 12,
    src: "img/pub-3.jpg",
    title: "red bear white bear pub",
  },
  {
    id: 13,
    src: "img/pub-4.jpg",
    title: "red bear white bear pub",
  },
  {
    id: 14,
    src: "img/dorian's pizza.jpg",
    title: "dorian's pizza",
  },
];

const MainWrapper = styled.div``;

const SwiperWrapper = styled.div`
  margin-top: 200px;
  height: 70vh;
  .mySwiper {
    height: 100%;
  }
`;

const Image = styled.img`
  display: block;
  height: 100%;
  margin: 0 auto;
`;

const designContainer = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 1,
      type: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 1,
      type: "easeInOut",
    },
  },
};

export default function Design() {
  return (
    <MainWrapper
      as={motion.div}
      variants={designContainer}
      initial={"hidden"}
      animate={"show"}
      exit="exit"
    >
      <SwiperWrapper>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          centerInsufficientSlides={true}
          spaceBetween={0}
          slidesPerGroupSkip={1}
          // centeredSlidesBounds={true}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            976: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            // 958: {
            //   slidesPerView: 3,
            //   slidesPerGroup: 2,
            // },
          }}
          scrollbar={false}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {collection.map((item) => (
            <SwiperSlide key={item.id}>
              <Image src={item.src} alt={item.title} />
            </SwiperSlide>
          ))}
          ...
        </Swiper>
      </SwiperWrapper>
      {/* <Portfolio src={front} /> */}
    </MainWrapper>
  );
}
