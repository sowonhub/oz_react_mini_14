import styled from "styled-components";
import CardComponent from "./components/CardComponent.jsx";

import useTmdbTopDataHook from "./assets/data/hooks/useTmdbTopDataHook.js";
import useTmdbMainDataHook from "./assets/data/hooks/useTmdbMainDataHook.js";
import useTmdbKeywordDataHook from "./assets/data/hooks/useTmdbKeywordDataHook.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useSearchParams } from "react-router-dom";

// <-------------------- function -------------------->

export default function MainPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("keyword")?.trim();

  const tmdbTop = useTmdbTopDataHook();
  const tmdbMainData = useTmdbMainDataHook();
  const tmdbKeywordData = useTmdbKeywordDataHook(query);

  const tmdbData = query ? tmdbKeywordData : tmdbMainData;

  const canLoop = DataTransferItemList.length > 5;

  // <-------------------- return -------------------->

  return (
    <>
      <Container>
        <Top10>🏆 TOP 10</Top10>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          // pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={5}
          loop={canLoop}
          autoplay={{ display: 1000 }}
          speed={600}
          className="topSwiper"
        >
          {tmdbTop.slice(0, 10).map((api) => (
            <SwiperSlide>
              <CardComponent movie={api} key={api.id} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Popular>✨ Popular</Popular>
        <MainList>
          {tmdbData.map((movie) => (
            <CardComponent movie={movie} key={movie.id} />
          ))}
        </MainList>
      </Container>
    </>
  );
}

// <-------------------- styled-components -------------------->

const Top10 = styled.p`
  font-size: 20px;
  font-weight: 800;
  color: #ff0000;
  margin: 0px;
  padding: 20px 0px 10px 100px;
  border: white;
`;

const Popular = styled.p`
  font-size: 20px;
  font-weight: 800;
  color: white;
  padding-left: 100px;
`;

const MainList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* max-width: 1800px; */
  overflow-x: auto;
  gap: 10px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  /* min-width: 800px; */
  margin: 0 auto;
  padding: 0px;
  color: #000000;

  .Swiper {
    width: 100%;
    padding: 20px 0px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: white;
    opacity: 0.6;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    opacity: 1;
    transform: scale(1.2);
  }

  .swiper-pagination-bullet {
    background: white;
    opacity: 0.5;
  }
  .swiper-pagination-bullet-active {
    background: #ffb400;
    opacity: 1;
  }
`;
