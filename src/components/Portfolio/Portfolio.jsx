import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
// import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        grabCursor={true}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <div className="image">
            <img src={Sidebar} alt="" />
            <a
              href="https://pc-doctor-8a268.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <img src={Ecommerce} alt="" />
            <a
              href="https://warehouse-management-23433.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <div>
              <img src={MusicApp} alt="" />
              <a
                href="https://photographer-c8d8a.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <div className='image'>
          <img src={HOC} alt="" />
          </div> */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
