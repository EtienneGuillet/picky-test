"use client";

import Image from "next/image";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

type CarouselProps = {
  image_urls: string[];
};

function Carousel({ image_urls }: CarouselProps) {
  return (
    <Swiper
      className="!m-0"
      slidesPerView={"auto"}
      scrollbar={{ draggable: true }}
      modules={[Scrollbar]}
    >
      {image_urls.map((image_url, index) => (
        <SwiperSlide className="!w-fit" key={index}>
          <Image
            src={image_url}
            alt={image_url}
            width={300}
            height={300}
            className="w-[300px] h-auto aspect-square object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
