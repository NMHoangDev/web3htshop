import React, { useRef } from "react";
// import './Slider.module.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Autoplay, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import styles from "./Slider.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);
export const Slider = () => {
  const sliders = [
    {
      image:
        "https://media.istockphoto.com/id/1324734873/photo/vietnamese-fishermen-are-doing-basketry-for-fishing-equipment-at-morning-in-thu-sy-village.jpg?b=1&s=170667a&w=0&k=20&c=5WwgExcw6oI5Z7Et7zgJoA8Z17kg_es3-QSZUDDp-9M=",
      title: "LÀNG NGHỀ ĐAN ĐÓ - THỦ SỸ",
      subtitle: "Nét Đẹp Văn Hóa Truyền Thống Hưng Yên",
      description:
        "Chào mừng đến với Làng Nghề Đan Đó Thủ Sỹ! Nơi tỏa sáng với những sản phẩm đan đó tinh xảo, thủ công. Mỗi sản phẩm không chỉ là một tác phẩm nghệ thuật, mà còn là sự kết hợp hài hòa giữa truyền thống và hiện đại. Hãy để chúng tôi mang vẻ đẹp này đến gần bạn! ",
    },
    {
      image:
        "https://www.gomnghethuat.com/wp-content/uploads/chuot-gom-cac-buoc-lam-ra-san-pham-gom.jpg",
      title: "GỐM SỨ BÁT TRÀNG",
      subtitle: "Thương hiệu gốm sự số 1 Việt Nam",
      description:
        "Thương hiệu Gốm Minh Đường thuộc Công ty TNHH Thương mại & Sản xuất Gốm Bát Tràng Việt Nam. Chúng tôi chuyên sản xuất, phân phối và trưng bày các sản phẩm gốm sứ Bát Tràng chính hãng tới tay người tiêu dùng với giá xuất xưởng, không qua trung gian. ",
    },
    {
      image:
        "https://globalopentour.com/wp-content/Content/images/non-la-lang-chuong-ha-noi-1.jpeg",
      title: "LÀNG NÓN CHUÔNG - HÀ NỘI",
      subtitle: "Nét Đẹp Truyền Thống Trên Bức Tranh Đô Thị Hiện Đại",
      description:
        "Làng Nón Chuông - biểu tượng văn hóa Việt Nam, chúng tôi tự hào giới thiệu những sản phẩm độc đáo, lâu đời của làng nghề này. Khám phá không gian truyền thống và vẻ đẹp của các sản phẩm nón, từ truyền thống đến hiện đại, đều chứa đựng câu chuyện và tinh hoa của dân tộc. Hãy đến và tạo điểm nhấn độc đáo cho ngôi nhà của bạn với những tác phẩm nghệ thuật thủ công Việt Nam tại Làng Nón Chuông! ",
    },
    {
      image:
        "https://cdn.tripways.com/2020/08/01121046/Chinese-Silk-rolls-833x521.jpg",
      title: "DỆT LỤA VIỆT NAM",
      subtitle: "Dệt Lụa Việt: Sắc Màu Truyền Thống",
      description:
        "Mời bạn đến thăm các làng nghề dệt lụa Việt Nam, nơi tôn vinh sự sáng tạo và tinh hoa của những nghệ nhân tài hoa. Hãy cùng khám phá bộ sưu tập đặc sắc, từ những chiếc áo dài mang đậm dấu ấn truyền thống đến những tấm vải trang trí độc đáo, mỗi tác phẩm đều là minh chứng cho nghệ thuật và văn hóa phong phú của Việt Nam. Hãy cùng chúng tôi bắt đầu một hành trình khám phá sự tinh tế và thanh nhã của nghệ thuật dệt lụa Việt Nam! ",
    },
  ];
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className={cx("mySwiper")}
      >
        {sliders.map((slide) => (
          <SwiperSlide key={slide.image} className={cx("swiper-slide")}>
            <div className={cx("content")}>
              <div className={cx("sub-content")}>
                <div className={cx("title")} data-swiper-parallax="-300">
                  <p>{slide.title}</p>
                </div>
                <div className={cx("subtitle")} data-swiper-parallax="-200">
                  <p>{slide.subtitle}</p>
                </div>
                <div className={cx("text")} data-swiper-parallax="-100">
                  <p>{slide.description}</p>
                </div>
              </div>
            </div>
            <img src={slide.image} alt={slide.title} />
            <div className={cx("overlay")}>.</div>
          </SwiperSlide>
        ))}
        <div className={cx("autoplay-progress")} slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
