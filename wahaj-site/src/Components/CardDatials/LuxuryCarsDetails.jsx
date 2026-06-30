import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Carousel,
  Badge,
} from "react-bootstrap";
import {
  FaWhatsapp,
  FaGasPump,
  FaUsers,
  FaCogs,
  FaCalendarAlt,
  FaCheckCircle,
  FaIdCard,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// استيراد السلايدر
import HomeSidler from "@/Components/Home/HomeSidler";
import FordBronco_blue from "@/assets/LuxCars/FordBronco_blue.webp";
import FordBronco_white from "@/assets/LuxCars/FordBronco_white.webp";
import CadillacEscalade600 from "@/assets/LuxCars/CadillacEscalade600.webp";
import CadillacEscalade600_black from "@/assets/LuxCars/CadillacEscalade600_black.webp";
import BentleyBentayga from "@/assets/LuxCars/Bentley-Bentayga.webp";
import lamborghiniurus_gray from "@/assets/LuxCars/lamborghiniurus-gray.webp";
import lamborghiniurus from "@/assets/LuxCars/lamborghiniurus.webp";
import ROX01 from "@/assets/LuxCars/ROX01.webp";
import LandRoverDefender_white from "@/assets/LuxCars/LandRoverDefender_white.webp";
import LandRoverDefender_Grey from "@/assets/LuxCars/LandRoverDefender_Grey.webp";
import LandRoverDefender_Black from "@/assets/LuxCars/LandRoverDefender_Black.webp";
import mercedesS500_white from "@/assets/LuxCars/mercedesS500-white.webp";
import mercedesS500_black from "@/assets/LuxCars/mercedesS500-black.webp";
import mercedesC500_blue from "@/assets/LuxCars/mercedesC500-blue.webp";
import mercedesC500_black from "@/assets/LuxCars/mercedesC500-black.webp";
import mercedesC500_white from "@/assets/LuxCars/mercedesC500-white.webp";
import mercedesC200 from "@/assets/LuxCars/mercedesC200.webp";
import mercedesAMG_Cla from "@/assets/LuxCars/mercedesAMG-Cla.webp";
import RangeRoverSport_Read from "@/assets/LuxCars/RangeRoverSport_Read.webp";
import RangeRoverSport_White from "@/assets/LuxCars/RangeRoverSport_White.webp";
import RangeRoverSport_Black from "@/assets/LuxCars/RangeRoverSport_Black.webp";
import MercedesG_Class500_Blue from "@/assets/LuxCars/MercedesG-Class500-Blue.webp";
import MercedesG_Class500_Black from "@/assets/LuxCars/MercedesG-Class500-Black.webp";
import RangeRoverVogue_black from "@/assets/LuxCars/Range-Rover-Vogue_black.webp";
import RangeRoverAutobiography from "@/assets/LuxCars/RangeRoverAutobiography.webp";
import RangeRoverVogue_white from "@/assets/LuxCars/Range-Rover-Vogue_white.webp";
import RangeRoverAutobiography_Black from "@/assets/LuxCars/RangeRoverAutobiography-Black.webp";
import x2 from "@/assets/LuxCars/x2.webp";
import x6 from "@/assets/LuxCars/x6.webp";
import BMW735_black from "@/assets/LuxCars/BMW735-black.webp";
import BMW740I_white from "@/assets/LuxCars/BMW740I-white.webp";
import BMW740I_Blck from "@/assets/LuxCars/BMW740I-Blck.webp";
import BMW735_white from "@/assets/LuxCars/BMW735-white.webp";
import RollsRoyceCullinan_Black from "@/assets/LuxCars/Rolls-RoyceCullinan-Black.webp";
import RollsRoyceCullinan_White from "@/assets/LuxCars/Rolls-RoyceCullinan-White.webp";

const LuxuryCarsDetails = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const luxuryCars = [
    {
      id: 1,
      name: "Ford Bronco",
      image: FordBronco_blue,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "EcoBoost" },
      features: ["سقف مكشوف", "نظام GOAT", "أداء صحراوي"],
      minAge: 21,
    },
    {
      id: 2,
      name: "Ford Bronco",
      image: FordBronco_white,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "EcoBoost" },
      features: ["سقف مكشوف", "نظام GOAT", "أداء صحراوي"],
      minAge: 21,
    },
    {
      id: 3,
      name: "Cadillac Escalade 600",
      image: CadillacEscalade600,
      year: "2025",
      specs: { passengers: 7, transmission: "أتوماتيك", engine: "V8" },
      features: ["صوت AKG", "شاشة OLED منحنية", "مساحة ضخمة"],
      minAge: 21,
    },
    {
      id: 4,
      name: "Cadillac Escalade 600",
      image: CadillacEscalade600_black,
      year: "2025",
      specs: { passengers: 7, transmission: "أتوماتيك", engine: "V8" },
      features: ["صوت AKG", "شاشة OLED منحنية", "مساحة ضخمة"],
      minAge: 21,
    },
    {
      id: 5,
      name: "Bentley Bentayga",
      image: BentleyBentayga,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V8" },
      features: ["فخامة بريطانية", "مقاعد جلد طبيعي", "نظام صوت Naim"],
      minAge: 25,
    },
    {
      id: 6,
      name: "Lamborghini Urus",
      image: lamborghiniurus_gray,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V8 Biturbo" },
      features: ["تسارع رياضي", "تصميم عدواني", "أداء فائق"],
      minAge: 25,
    },
    {
      id: 7,
      name: "Lamborghini Urus",
      image: lamborghiniurus,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V8 Biturbo" },
      features: ["تسارع رياضي", "تصميم عدواني", "أداء فائق"],
      minAge: 25,
    },
    {
      id: 8,
      name: "Rox 01",
      image: ROX01,
      year: "2025",
      specs: { passengers: 7, transmission: "أتوماتيك", engine: "Hybrid" },
      features: ["تكنولوجيا ذكية", "مساحة واسعة", "شاشات لمس"],
      minAge: 21,
    },
    {
      id: 9,
      name: "Land Rover Defender",
      image: LandRoverDefender_white,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "P400" },
      features: ["قدرات وعرة", "تصميم عصري", "دفع رباعي"],
      minAge: 21,
    },
    {
      id: 10,
      name: "Land Rover Defender",
      image: LandRoverDefender_Grey,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "P400" },
      features: ["قدرات وعرة", "تصميم عصري", "دفع رباعي"],
      minAge: 21,
    },
    {
      id: 11,
      name: "Land Rover Defender",
      image: LandRoverDefender_Black,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "P400" },
      features: ["قدرات وعرة", "تصميم عصري", "دفع رباعي"],
      minAge: 21,
    },
    {
      id: 12,
      name: "Mercedes S500",
      image: mercedesS500_white,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6 Turbo" },
      features: ["فخامة الصالون", "مقاعد مساج", "شاشة MBUX"],
      minAge: 21,
    },
    {
      id: 13,
      name: "Mercedes S500",
      image: mercedesS500_black,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6 Turbo" },
      features: ["فخامة الصالون", "مقاعد مساج", "شاشة MBUX"],
      minAge: 21,
    },
    {
      id: 14,
      name: "Mercedes S-Class",
      image: mercedesC500_blue,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6 Turbo" },
      features: ["فخامة الصالون", "مقاعد مساج", "شاشة MBUX"],
      minAge: 21,
    },
    {
      id: 15,
      name: "Mercedes S-Class",
      image: mercedesC500_black,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6 Turbo" },
      features: ["فخامة الصالون", "مقاعد مساج", "شاشة MBUX"],
      minAge: 21,
    },
    {
      id: 16,
      name: "Mercedes S-Class",
      image: mercedesC500_white,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6 Turbo" },
      features: ["فخامة الصالون", "مقاعد مساج", "شاشة MBUX"],
      minAge: 21,
    },
    {
      id: 17,
      name: "Mercedes C200",
      image: mercedesC200,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "Turbo 4" },
      features: ["تصميم رياضي", "شاشة رقمية", "اقتصادية في الاستهلاك"],
      minAge: 21,
    },
    {
      id: 18,
      name: "Mercedes CLA AMG",
      image: mercedesAMG_Cla,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "AMG Turbo" },
      features: ["تصميم كوبيه", "جنوط AMG", "أداء رياضي"],
      minAge: 21,
    },
    {
      id: 19,
      name: "Range Rover Sport",
      image: RangeRoverSport_Read,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V8 Dynamic" },
      features: ["ثبات عالي", "كاميرات 360", "هيدروليك"],
      minAge: 21,
    },
    {
      id: 20,
      name: "Range Rover Sport",
      image: RangeRoverSport_White,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V8 Dynamic" },
      features: ["ثبات عالي", "كاميرات 360", "هيدروليك"],
      minAge: 21,
    },
    {
      id: 21,
      name: "Range Rover Sport",
      image: RangeRoverSport_Black,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V8 Dynamic" },
      features: ["ثبات عالي", "كاميرات 360", "هيدروليك"],
      minAge: 21,
    },
    {
      id: 22,
      name: "Mercedes G-Class 500",
      image: MercedesG_Class500_Blue,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V8 Biturbo" },
      features: ["دفع رباعي", "شاشات ديجيتال", "إضاءة محيطية"],
      minAge: 21,
    },
    {
      id: 23,
      name: "Mercedes G-Class 500",
      image: MercedesG_Class500_Black,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V8 Biturbo" },
      features: ["دفع رباعي", "شاشات ديجيتال", "إضاءة محيطية"],
      minAge: 21,
    },
    {
      id: 24,
      name: "Range Rover Vogue",
      image: RangeRoverVogue_black,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V8" },
      features: ["ثلاجة", "نظام ميريديان", "فتحة سقف"],
      minAge: 21,
    },
    {
      id: 25,
      name: "Range Rover Autobiography",
      image: RangeRoverAutobiography,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V8" },
      features: ["فخامة قصوى", "مقاعد تنفيذية", "عزل صوتي فائق"],
      minAge: 21,
    },
    {
      id: 26,
      name: "Range Rover Vogue",
      image: RangeRoverVogue_white,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V8" },
      features: ["ثلاجة", "نظام ميريديان", "فتحة سقف"],
      minAge: 21,
    },
    {
      id: 27,
      name: "Range Rover Autobiography",
      image: RangeRoverAutobiography_Black,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V8" },
      features: ["فخامة قصوى", "مقاعد تنفيذية", "عزل صوتي فائق"],
      minAge: 21,
    },
    {
      id: 28,
      name: "BMW X2",
      image: x2,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "TwinPower" },
      features: ["تصميم كوبيه", "تقنيات حديثة", "أداء رياضي"],
      minAge: 21,
    },
    {
      id: 29,
      name: "BMW X6",
      image: x6,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "TwinPower" },
      features: ["تصميم كوبيه SUV", "جنوط رياضية", "فخامة وقوة"],
      minAge: 21,
    },
    {
      id: 30,
      name: "BMW 735",
      image: BMW735_black,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "TwinPower" },
      features: ["شاشة سينما", "تحكم باللمس", "ركن ذاتي"],
      minAge: 21,
    },
    {
      id: 31,
      name: "BMW 740i",
      image: BMW740I_white,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "TwinPower" },
      features: ["شاشة سينما", "تحكم باللمس", "ركن ذاتي"],
      minAge: 21,
    },
    {
      id: 32,
      name: "BMW 740i",
      image: BMW740I_Blck,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "TwinPower" },
      features: ["شاشة سينما", "تحكم باللمس", "ركن ذاتي"],
      minAge: 21,
    },
    {
      id: 33,
      name: "BMW 735",
      image: BMW735_white,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "TwinPower" },
      features: ["شاشة سينما", "تحكم باللمس", "ركن ذاتي"],
      minAge: 21,
    },
    {
      id: 34,
      name: "Rolls-Royce Cullinan",
      image: RollsRoyceCullinan_Black,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V12" },
      features: ["فخامة مطلقة", "مقاعد مساج", "سقف نجوم"],
      minAge: 25,
    },
    {
      id: 35,
      name: "Rolls-Royce Cullinan",
      image: RollsRoyceCullinan_White,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V12" },
      features: ["فخامة مطلقة", "مقاعد مساج", "سقف نجوم"],
      minAge: 25,
    },
  ];

  return (
    <>
      <HomeSidler />
      <div className="section-header text-center my-5 px-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="display-5 fw-bold" style={{ color: "#212741" }}>
            السيارات الفارهة
          </h1>
          <div
            className="mx-auto mt-2"
            style={{
              width: "80px",
              height: "4px",
              backgroundColor: "#fc8b1a",
              borderRadius: "10px",
            }}
          ></div>
          <p className="text-muted mt-3 fs-5">
            انطلق بفخامة لا تضاهى مع أسطولنا المميز في الكويت
          </p>
        </motion.div>
      </div>

      <Container className="my-5" dir="rtl">
        <Row className="g-4">
          {luxuryCars.map((car, index) => (
            <Col key={car.id} xs={12} md={6} xl={4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="shadow-sm border-0 h-100 car-card overflow-hidden">
                  <div
                    className="position-relative"
                    style={{ height: "230px", background: "#f8f9fa" }}
                  >
                    <Badge
                      pill
                      className="position-absolute"
                      style={{
                        top: "15px",
                        right: "15px",
                        background: "#fc8b1a",
                        zIndex: 5,
                        padding: "8px 12px",
                      }}
                    >
                      موديل {car.year}
                    </Badge>
                    <Card.Img
                      variant="top"
                      src={car.image}
                      style={{ paddingBottom: "10px" }}
                    />
                  </div>

                  <Card.Body className="p-4 text-center">
                    <Card.Title className="fw-bold mb-3 fs-4">
                      {car.name}
                    </Card.Title>

                    <Row className="g-0 bg-light rounded py-3 mb-3 text-secondary">
                      <Col xs={4} className="border-end">
                        <FaUsers color="#fc8b1a" />
                        <div className="small mt-1 fw-bold">
                          {car.specs.passengers} ركاب
                        </div>
                      </Col>
                      <Col xs={4} className="border-end">
                        <FaCogs color="#fc8b1a" />
                        <div className="small mt-1 fw-bold">
                          {car.specs.transmission}
                        </div>
                      </Col>
                      <Col xs={4}>
                        <FaGasPump color="#fc8b1a" />
                        <div className="small mt-1 fw-bold text-truncate px-1">
                          {car.specs.engine}
                        </div>
                      </Col>
                    </Row>

                    <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                      {car.features.map((f, i) => (
                        <Badge
                          key={i}
                          bg="white"
                          text="dark"
                          className="border py-2 px-2 small fw-normal"
                        >
                          <FaCheckCircle className="text-warning me-1" /> {f}
                        </Badge>
                      ))}
                    </div>

                    <div className="rental-info-box mb-3 p-2 border rounded border-danger text-danger fw-bold small bg-light">
                      <FaIdCard className="me-1" /> الحد الأدنى للعمر:{" "}
                      {car.minAge} سنة
                    </div>

                    <Button
                      variant="success"
                      href={`https://wa.me/+96590930061?text=استفسار عن حجز ${car.name}`}
                      target="_blank"
                      className="w-100 py-2 fw-bold whatsapp-btn"
                    >
                      <FaWhatsapp size={22} className="me-2" /> احجز الآن
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        .car-card { border-radius: 20px; transition: all 0.3s ease-in-out; }
        .car-card:hover { transform: translateY(-10px); box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important; }
        .whatsapp-btn { background-color: #25d366; border: none; border-radius: 12px; transition: 0.3s; }
        .whatsapp-btn:hover { background-color: #128c7e; transform: scale(1.02); }
      `}</style>
    </>
  );
};

export default LuxuryCarsDetails;
