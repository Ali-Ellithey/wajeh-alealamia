import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// استيراد مكونات Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// استيراد ستايلات Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// --- استيراد الصور مباشرة باستخدام الـ Alias لضمان عملها بعد الـ Build ---
import cover from "@/assets/cover.webp";
import sport1 from "@/assets/sport1.webp";
import sport2 from "@/assets/sport2.webp";
import sport3 from "@/assets/sport3.webp";
import lux from "@/assets/Lux.webp";
import suv from "@/assets/Suv.webp";
import suv2 from "@/assets/Suv2.webp";
import suv3 from "@/assets/Suv3.webp";
import bag from "@/assets/BagCar.webp";
import bag2 from "@/assets/BagCar2.webp";

const imgs = {
  cover,
  sport1,
  sport2,
  sport3,
  lux,
  suv,
  suv2,
  suv3,
  bag,
  bag2,
};

export const Services = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fleetData = [
    {
      key: "luxury",
      images: [imgs.cover, imgs.lux, imgs.lux],
      path: "/luxury-cars-details",
    },
    {
      key: "suv",
      images: [imgs.sport1, imgs.sport2, imgs.sport3],
      path: "/suv-cars-details",
    },
    {
      key: "family",
      images: [imgs.bag, imgs.bag2, imgs.bag],
      path: "/family-cars-details",
    },
    {
      key: "economy",
      images: [imgs.suv, imgs.suv2, imgs.suv3],
      path: "/economy-cars-details",
    },
  ];

  return (
    <div
      className="Services py-5"
      id="Services"
      style={{ backgroundColor: "#f9f9f9" }}
    >
      <Container>
        <div className="title text-center mb-5">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="fw-bold display-6"
          >
            {t("fleet.title")}
          </motion.h1>
          <div
            className="mx-auto mb-3"
            style={{ width: "80px", height: "4px", backgroundColor: "#fc8b1a" }}
          ></div>
          <h6
            className="text-muted mx-auto"
            style={{ maxWidth: "800px", lineHeight: "1.8" }}
          >
            {t("fleet.subtitle")}
          </h6>
        </div>

        <Row className="gx-4 gy-4">
          {fleetData.map((item) => (
            <Col key={item.key} xs={12} lg={6}>
              <Card className="h-100 shadow-sm border-0 overflow-hidden fleet-card">
                <div
                  className="card-slider-wrapper"
                  style={{ aspectRatio: "16 / 9", position: "relative" }}
                >
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                    effect="fade"
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop={true}
                    style={{ width: "100%", height: "100%" }}
                  >
                    {item.images.map((imgSrc, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={imgSrc}
                          alt={`${item.key}-${index}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <Card.Body className="d-flex flex-column text-center p-4">
                  <Card.Title
                    className="fw-bold fs-4 mb-3"
                    style={{ color: "#212741" }}
                  >
                    {t(`fleet.categories.${item.key}.name`)}
                  </Card.Title>
                  <Card.Text className="text-muted flex-grow-1 fs-6">
                    {t(`fleet.categories.${item.key}.desc`)}
                  </Card.Text>

                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Button
                      as={Link}
                      to={item.path}
                      variant="warning"
                      className="w-100 mt-3 fw-bold py-2 custom-fleet-btn text-white"
                    >
                      {t("fleet.more_btn")}
                    </Button>
                  </motion.div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        .fleet-card { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); border-radius: 20px; }
        .fleet-card:hover { transform: translateY(-12px); box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important; }
        
        .custom-fleet-btn {
          background-color: #fc8b1a !important;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
        }
        
        /* ضبط أيقونات Swiper لتكون متناسقة */
        .swiper-button-next, .swiper-button-prev {
          color: #fff !important;
          background: rgba(33, 39, 65, 0.5); /* لون داكن شفاف ليناسب هوية الموقع */
          width: 40px !important;
          height: 40px !important;
          border-radius: 50%;
          --swiper-navigation-size: 16px;
          transition: 0.3s;
        }
        
        .swiper-button-next:after, .swiper-button-prev:after {
          font-weight: bold;
        }

        .swiper-button-next:hover, .swiper-button-prev:hover {
          background: #fc8b1a;
          transform: scale(1.1);
        }

        .swiper-pagination-bullet-active {
          background: #fc8b1a !important;
          width: 20px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default Services;
