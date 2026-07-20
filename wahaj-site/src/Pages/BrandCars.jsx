import React, { useEffect, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

import HomeSidler from "@/Components/Home/HomeSidler";
import CarCard from "@/Components/CardDatials/CarCard.jsx";
import { getBrandFromCarName, toSlug } from "@/utils/brandUtils";

import { sportsCarsGrouped } from "@/Components/CardDatials/SportsCarsDetails.jsx";
import { luxuryCarsGrouped } from "@/Components/CardDatials/LuxuryCarsDetails";
import { familyCarsGrouped } from "@/Components/CardDatials/FamilyCarsDetails";
import { economyCarsGrouped } from "@/Components/CardDatials/EconomyCarsDetails";

// ── تجميع كل السيارات من الأقسام الأربعة في مكان واحد ──────
const allCars = [
  ...sportsCarsGrouped,
  ...luxuryCarsGrouped,
  ...familyCarsGrouped,
  ...economyCarsGrouped,
];

const BrandCars = () => {
  const [searchParams] = useSearchParams();
  const brandSlug = searchParams.get("brand");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [brandSlug]);

  // 🛠️ الفلتر الشامل والذكي لحل مشاكل التداخل لـ (لاند روفر، رنج روفر، مرسيدس)
  const filteredCars = useMemo(() => {
    if (!brandSlug) return [];

    // تحويل الـ slug القادم من الـ URL لشكل قياسي آمن ونظيف
    const cleanUrlSlug = toSlug(decodeURIComponent(brandSlug));

    return allCars.filter((car) => {
      if (!car || !car.name) return false;

      const carBrandName = getBrandFromCarName(car.name);
      const carSlug = toSlug(carBrandName);

      // 🌟 أولاً: حل مشكلة عائلة الروفر (لو دايسين لاند روفر، اعرض لاند روفر ورنج روفر معاً)
      if (cleanUrlSlug === "land-rover") {
        return carSlug === "land-rover" || carSlug === "range-rover";
      }

      // 🌟 ثانياً: حل مشكلة المرسيدس (لو الرابط فيه mercedes أو mercedes-benz يعرض المرسيدس فوراً)
      if (cleanUrlSlug === "mercedes" || cleanUrlSlug === "mercedes-benz") {
        return carSlug === "mercedes-benz" || carSlug === "mercedes";
      }

      // لباقي الماركات (شيفروليه، بي إم دبليو، تويوتا...) مطابقة عادية ومباشرة
      return carSlug === cleanUrlSlug;
    });
  }, [brandSlug]);

  // اسم البراند بشكل مقروء للعرض (استرجاع الاسم الأصلي من أول سيارة مطابقة)
  const displayBrandName = filteredCars.length
    ? getBrandFromCarName(filteredCars[0].name)
    : brandSlug
      ? decodeURIComponent(brandSlug).replace(/-/g, " ")
      : "";

  return (
    <>
      <HomeSidler />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-header text-center my-5 px-3"
      >
        <Container>
          <h2
            className="display-5 fw-bold"
            style={{ color: "#212741", textTransform: "capitalize" }}
          >
            {displayBrandName}
          </h2>
          <div
            className="mx-auto mt-2"
            style={{
              width: "100px",
              height: "4px",
              backgroundColor: "#fc8b1a",
              borderRadius: "10px",
            }}
          ></div>
          <p className="text-muted mt-3 fs-5">
            <span className="fw-bold" style={{ color: "#fc8b1a" }}></span>
            حيث تبدأ الرفاهية وتكتمل متعة القيادة.
          </p>
        </Container>
      </motion.div>

      <Container className="my-5" dir="rtl">
        {filteredCars.length > 0 ? (
          <Row className="g-4">
            {filteredCars.map((car, index) => (
              /* 
                ✔️ التعديل هنا: قمنا بتغيير الـ key ليدمج الـ id مع الـ index 
                ليصبح فريداً تماماً حتى لو تكررت نفس السيارة في مصفوفات مختلفة.
              */
              <CarCard
                key={`${car.id || index}-${index}`}
                car={car}
                index={index}
              />
            ))}
          </Row>
        ) : (
          <div className="text-center py-5">
            <p className="text-muted fs-5 mb-3">
              لا توجد سيارات متاحة لهذا البراند حالياً
            </p>
            <Link
              to="/"
              className="btn"
              style={{ background: "#fc8b1a", color: "#fff" }}
            >
              الرجوع للرئيسية
            </Link>
          </div>
        )}
      </Container>

      <style>{`
        .car-card { border-radius: 20px; transition: all 0.3s ease; }
        .car-card:hover { box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important; }
        .whatsapp-btn { background-color: #25d366; border: none; border-radius: 12px; transition: 0.3s; }
        .whatsapp-btn:hover { background-color: #128c7e; transform: scale(1.02); }
      `}</style>
    </>
  );
};

export default BrandCars;
