import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
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

import HomeSidler from "@/Components/Home/HomeSidler";

import hRV_Silver from "@/assets/EconomyCars/HR-v-salver.webp";
import hRV_White from "@/assets/EconomyCars/HR-v-white.webp";
import hRV_Blue from "@/assets/EconomyCars/HR-v-blue.webp";
import changanCS35Plus_Gray from "@/assets/EconomyCars/Changan-CS35-Plus-gray.webp";
import changanCS35Plus_White from "@/assets/EconomyCars/Changan-CS35-Plus-white.webp";
import tiggo7ProMax_Black from "@/assets/EconomyCars/Tiggo7ProMax-black.webp";
import tiggo7ProMax_Gray from "@/assets/EconomyCars/Tiggo7ProMax-gray.webp";
import tiggo7ProMax_White from "@/assets/EconomyCars/Tiggo7ProMax-white.webp";
import omoda5_White from "@/assets/EconomyCars/Omoda5-white.webp";
import omoda5_Black from "@/assets/EconomyCars/Omoda5-black.webp";
import omoda5_Blue from "@/assets/EconomyCars/Omoda5-blue.webp";
import omoda5_Silver from "@/assets/EconomyCars/Omoda5-salver.webp";
import geelyEmgrand_White from "@/assets/EconomyCars/GeelyEmgrand-white.webp";
import geelyEmgrand_Silver from "@/assets/EconomyCars/Geely-Emgrand-slaver.webp";
import geelyEmgrand_Black from "@/assets/EconomyCars/Geely-Emgrand.webp";
import coolray_White from "@/assets/EconomyCars/Coolray-white.webp";
import coolray_Black from "@/assets/EconomyCars/Coolray-black.webp";
import coolray_Silver from "@/assets/EconomyCars/Coolray.webp";
import hyundaiElantraN_Gray from "@/assets/EconomyCars/Hyundai-ElantraN.webp";
import hyundaiElantraN_White from "@/assets/EconomyCars/HyundaiElantraN-white.webp";
import tucson2025_White from "@/assets/EconomyCars/Tuson-2025-white.webp";
import tucson2025_Silver from "@/assets/EconomyCars/Tucson-salver2025.webp";
import tucson2025_Black from "@/assets/EconomyCars/Tucson-black2025.webp";
import tucson2025_Gray from "@/assets/EconomyCars/Tuson-gray2025.webp";
import tucson2023_Blue from "@/assets/EconomyCars/Tucson-blue2023.webp";
import tucson2023_White from "@/assets/EconomyCars/Tucson-white-2023.webp";
import tucson2023_Gray from "@/assets/EconomyCars/tuson-2023.webp";

import yaris_Silver from "@/assets/EconomyCars/Yaris-salver.webp";
import yaris_Gray from "@/assets/EconomyCars/Yairs-gray.webp";
import raize_White from "@/assets/EconomyCars/Raize-white.webp";
import kia_K4_Silver from "@/assets/EconomyCars/k4-.webp";
import kia_K4_Gray from "@/assets/EconomyCars/k4.webp";
import kia_Pegas_White from "@/assets/EconomyCars/Pegas-white2024.webp";
import kia_Pegas_Silver from "@/assets/EconomyCars/Pegas-salver2024.webp";
import kia_K5_Silver_2022 from "@/assets/EconomyCars/k5-salver2022.webp";
import kia_K5_White_2022 from "@/assets/EconomyCars/k5-white2022.webp";
import kia_K5_Black_2022 from "@/assets/EconomyCars/k5-black2022.webp";
import kia_K5_White_2025 from "@/assets/EconomyCars/k5-white2025.webp";
import kia_K5_Gray_2025 from "@/assets/EconomyCars/K5-gray2025.webp";
import kia_K5_Black_2025 from "@/assets/EconomyCars/k5-black2025.webp";
import kia_Sportage_Gold from "@/assets/EconomyCars/Sp-gold.webp";
import kia_Sportage_Blue_2025 from "@/assets/EconomyCars/sp-blue2025.webp";
import kia_Sportage_Gray from "@/assets/EconomyCars/sp-Gray.webp";
import kia_Sportage_Black from "@/assets/EconomyCars/sp-black.webp";
import kia_Sportage_Silver from "@/assets/EconomyCars/Sp-salver.webp";
import kia_Sportage_White from "@/assets/EconomyCars/Sp-white.webp";
import kia_Sportage_Black_2025 from "@/assets/EconomyCars/sp-black2025.webp";
import kia_Sportage_Gray_2025 from "@/assets/EconomyCars/sp-gray2025.webp";
import kia_Sportage_White_2025 from "@/assets/EconomyCars/sp-white2025.webp";
import yaris_White from "@/assets/EconomyCars/Yaris-white.webp";
import corollaCross from "@/assets/EconomyCars/Corolla-Cross.webp";
import rav4w_2023 from "@/assets/EconomyCars/RAV42025.webp";
import rav4_2023 from "@/assets/EconomyCars/ToyotaRAV4.webp";
import rav4Salver from "@/assets/EconomyCars/Urban-Cruiser.webp";

import nissanXtrailW from "@/assets/EconomyCars/nissanXtrailW.webp";
import nissanXtrailB from "@/assets/EconomyCars/nissanXtrailB.webp";
import urbanCruiser_Gray from "@/assets/EconomyCars/Urban-Cruiser-gray.webp";
import urbanCruiser_White from "@/assets/EconomyCars/Urban-Cruiser-white.webp";
import lexusES250_White from "@/assets/EconomyCars/Lexus-ES250-white.webp";
import lexusES250_Black from "@/assets/EconomyCars/Lexus-ES250-black.webp";
import lexusES250_Gray from "@/assets/EconomyCars/Lexus-ES250-gray.webp";
import kiaSeltos_White from "@/assets/EconomyCars/Seltos-c2.webp";
import kiaSeltos_Red from "@/assets/EconomyCars/Seltos-c1.webp";
import kiaSeltos_Gray from "@/assets/EconomyCars/Seltos-c.webp";
import bmwX2_white from "@/assets/EconomyCars/bmwX2_white.webp";
import mercedesC200 from "@/assets/LuxCars/mercedesC200.webp";

import territorygray from "@/assets/EconomyCars/Ford-Territory-Gray.webp";
import territorywhite from "@/assets/EconomyCars/Ford-Territory-white.webp";
import territoryblack from "@/assets/EconomyCars/Ford-Territory-black.webp";

import fordGterritory26 from "@/assets/EconomyCars/FordGTerritory26.webp";
import fordBterritory26 from "@/assets/EconomyCars/FordBTerritory26.webp";
import fordWterritory26 from "@/assets/EconomyCars/FordwTerritory26.webp";
import chrysler300c_Black from "@/assets/EconomyCars/Chrysler300-black.webp";
import chrysler300c_Silver from "@/assets/EconomyCars/Chrysler300.webp";
import chrysler300c_gray from "@/assets/EconomyCars/chrysler300c_gray.webp";
import dodgecharger_Black from "@/assets/SportsCars/dodgecharger-Black.webp";
import dodgecharger_Gray from "@/assets/SportsCars/dodgecharger-Gray.webp";
import dodgecharger_White from "@/assets/SportsCars/dodgecharger-white.webp";

import tototacamryS21 from "@/assets/EconomyCars/TOYOTACamryS21.webp";
import tototacamryG21 from "@/assets/EconomyCars/TOYOTACamryG21.webp";
import tototacamryB21 from "@/assets/EconomyCars/TOYOTACamryB21.webp";
import tototacamryW21 from "@/assets/EconomyCars/TOYOTACamryW21.webp";

import camrygold25 from "@/assets/EconomyCars/Camry-gold25.webp";
import camryWhite25 from "@/assets/EconomyCars/Camry-White25.webp";
import camrygray25 from "@/assets/EconomyCars/Camry-gray25.webp";
import camryblack25 from "@/assets/EconomyCars/Camry-black25.webp";
// ── خريطة الألوان (الاسم → كود اللون) ──────────────────
const COLOR_MAP = {
  أبيض: "#FFFFFF",
  فضي: "#C0C0C0",
  رمادي: "#808080",
  أسود: "#1a1a1a",
  أزرق: "#3b82f6",
  ذهبي: "#D4AF37",
  أحمر: "#ef4444",
};

// ── بيانات السيارات المجمّعة ──────────────────────────────
// ✅ تم تصديرها (export) عشان تُستخدم في صفحة البراند الموحّدة BrandCars.jsx
export const economyCarsGrouped = [
  {
    id: "bmw-x2-2025",
    name: "BMW X2",
    year: "2025",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "I4 Turbo" },
    features: [
      "تصميم كوبيه رياضي",
      "إضاءة داخلية تفاعلية",
      "شاشة BMW المنحنية",
    ],
    minAge: 21,
    variants: [{ color: "أبيض", image: bmwX2_white }],
  },
  {
    id: "dodge-charger-2023",
    name: "Dodge Charger",
    year: "2023",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6/V8" },
    features: ["تصميم عضلي", "أداء قوي", "صوت عادم رياضي"],
    minAge: 21,
    variants: [
      { color: "أسود", image: dodgecharger_Black },
      { color: "رمادي", image: dodgecharger_Gray },
      { color: "أبيض", image: dodgecharger_White },
    ],
  },
  {
    id: "ford-territory-2025",
    name: "Ford Territory",
    year: "2025",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "Turbo" },
    features: ["تصميم عصري", "مساحة عائلية", "اقتصادية في الاستهلاك"],
    minAge: 21,
    variants: [
      { color: "أسود", image: territoryblack },
      { color: "أبيض", image: territorywhite },
      { color: "رمادي", image: territorygray },
    ],
  },
  {
    id: "nissan-xtrail-2024",
    name: "Nissan X-Trail",
    year: "2024",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "Turbo" },
    features: ["تصميم رياضي", "شاشة لمس", "اقتصادية في الاستهلاك"],
    minAge: 21,
    variants: [
      { color: "رمادي", image: nissanXtrailB },
      { color: "أبيض", image: nissanXtrailW },
    ],
  },
  {
    id: "ford-territory-2026",
    name: "Ford Territory",
    year: "2026",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "Turbo" },
    features: ["تصميم عصري", "مساحة عائلية", "اقتصادية في الاستهلاك"],
    minAge: 21,
    variants: [
      { color: "رمادي", image: fordGterritory26 },
      { color: "أسود", image: fordBterritory26 },
      { color: "أبيض", image: fordWterritory26 },
    ],
  },
  {
    id: "hrv-2023",
    name: "Honda HR-V",
    year: "2023",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5L" },
    features: [
      "تصميم كروس أوفر أنيق",
      "اقتصادي في الوقود",
      "مساحة داخلية واسعة",
    ],
    minAge: 21,
    variants: [
      { color: "فضي", image: hRV_Silver },
      { color: "أبيض", image: hRV_White },
      { color: "أزرق", image: hRV_Blue },
    ],
  },
  {
    id: "mercedes-c200-2021",
    name: "Mercedes C200",
    year: "2021",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "Turbo 4" },
    features: ["تصميم رياضي", "شاشة رقمية", "اقتصادية في الاستهلاك"],
    minAge: 21,
    variants: [{ color: "فضي", image: mercedesC200 }],
  },
  {
    id: "chrysler300-2022",
    name: "Chrysler 300c",
    year: "2022",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6/V8" },
    features: ["سيدان فارهة", "تصميم أمريكي كلاسيكي", "محرك قوي"],
    minAge: 21,
    variants: [
      { color: "أسود", image: chrysler300c_Black },
      { color: "فضي", image: chrysler300c_Silver },
      { color: "فضي", image: chrysler300c_gray },
    ],
  },
  {
    id: "changan-cs35-2025",
    name: "Changan CS35 Plus",
    year: "2025",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.4T" },
    features: ["تصميم رياضي", "تقنيات حديثة", "سعر منافس"],
    minAge: 21,
    variants: [
      { color: "رمادي", image: changanCS35Plus_Gray },
      { color: "أبيض", image: changanCS35Plus_White },
    ],
  },
  {
    id: "tiggo7-2026",
    name: "Chery Tiggo 7 Pro Max",
    year: "2026",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
    features: ["SUV فاخر", "شاشة بانورامية", "نظام أمان متقدم"],
    minAge: 21,
    variants: [
      { color: "أسود", image: tiggo7ProMax_Black },
      { color: "رمادي", image: tiggo7ProMax_Gray },
      { color: "أبيض", image: tiggo7ProMax_White },
    ],
  },
  {
    id: "omoda5-2026",
    name: "Chery Omoda 5",
    year: "2026",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
    features: ["تصميم كوبيه رياضي", "إضاءة LED", "مقصورة ذكية"],
    minAge: 21,
    variants: [
      { color: "أبيض", image: omoda5_White },
      { color: "أسود", image: omoda5_Black },
      { color: "أزرق", image: omoda5_Blue },
      { color: "فضي", image: omoda5_Silver },
    ],
  },
  {
    id: "geely-emgrand-2025",
    name: "Geely Emgrand",
    year: "2025",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5L" },
    features: ["سيدان أنيقة", "اقتصادية في الوقود", "تقنيات السلامة الحديثة"],
    minAge: 21,
    variants: [
      { color: "أبيض", image: geelyEmgrand_White },
      { color: "فضي", image: geelyEmgrand_Silver },
      { color: "أسود", image: geelyEmgrand_Black },
    ],
  },
  {
    id: "coolray-2025",
    name: "Geely Coolray",
    year: "2025",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5T" },
    features: ["كروس أوفر رياضي", "تصميم عصري جريء", "أداء قوي"],
    minAge: 21,
    variants: [
      { color: "أبيض", image: coolray_White },
      { color: "أسود", image: coolray_Black },
      { color: "فضي", image: coolray_Silver },
    ],
  },
  {
    id: "elantra-n-2024",
    name: "Hyundai Elantra N",
    year: "2024",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "2.0T" },
    features: ["إصدار رياضي N", "فرامل حمراء", "أداء سباقات"],
    minAge: 21,
    variants: [
      { color: "رمادي", image: hyundaiElantraN_Gray },
      { color: "أبيض", image: hyundaiElantraN_White },
    ],
  },
  {
    id: "tucson-2025",
    name: "Hyundai Tucson",
    year: "2025",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
    features: ["تصميم 2025 المحدث", "شاشة بانورامية", "نظام أمان متقدم"],
    minAge: 21,
    variants: [
      { color: "أبيض", image: tucson2025_White },
      { color: "فضي", image: tucson2025_Silver },
      { color: "أسود", image: tucson2025_Black },
      { color: "رمادي", image: tucson2025_Gray },
    ],
  },
  {
    id: "tucson-2023",
    name: "Hyundai Tucson",
    year: "2023",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
    features: ["SUV عملي", "تقنية هايبرد", "مساحة واسعة"],
    minAge: 21,
    variants: [
      { color: "أزرق", image: tucson2023_Blue },
      { color: "أبيض", image: tucson2023_White },
      { color: "رمادي", image: tucson2023_Gray },
    ],
  },
  {
    id: "yaris-2022-a",
    name: "Toyota Yaris",
    year: "2022",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5L" },
    features: ["اقتصادية في الوقود", "سهلة القيادة", "موثوقة وعملية"],
    minAge: 21,
    variants: [
      { color: "فضي", image: yaris_Silver },
      { color: "رمادي", image: yaris_Gray },
      { color: "أبيض", image: yaris_White },
    ],
  },
  {
    id: "raize-2023",
    name: "Toyota Raize",
    year: "2023",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.0T" },
    features: ["كروس أوفر صغير", "اقتصادي", "تصميم شبابي"],
    minAge: 21,
    variants: [{ color: "أبيض", image: raize_White }],
  },
  {
    id: "camry-2021",
    name: "Toyota Camry",
    year: "2021",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "2.5L" },
    features: ["سيدان فارهة", "تقنية هايبرد", "راحة فائقة"],
    minAge: 21,
    variants: [
      { color: "أبيض", image: tototacamryW21 },
      { color: "فضي", image: tototacamryS21 },
      { color: "أسود", image: tototacamryB21 },
      { color: "ذهبي", image: tototacamryG21 },
    ],
  },
  {
    id: "kia-k4-2025",
    name: "Kia K4",
    year: "2025",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5T" },
    features: ["تصميم عصري جديد", "شاشة ذكية كبيرة", "أداء متميز"],
    minAge: 21,
    variants: [
      { color: "فضي", image: kia_K4_Silver },
      { color: "رمادي", image: kia_K4_Gray },
    ],
  },
  {
    id: "kia-pegas-2024",
    name: "Kia Pegas",
    year: "2024",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.4L" },
    features: ["اقتصادية في الوقود", "سيدان عملية", "سهلة القيادة"],
    minAge: 21,
    variants: [
      { color: "أبيض", image: kia_Pegas_White },
      { color: "فضي", image: kia_Pegas_Silver },
    ],
  },
  {
    id: "camry-2025",
    name: "Toyota Camry",
    year: "2025",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "2.5L" },
    features: ["سيدان فارهة", "تقنية هايبرد", "راحة فائقة"],
    minAge: 21,
    variants: [
      { color: "أبيض", image: camryWhite25 },
      { color: "فضي", image: camrygray25 },
      { color: "أسود", image: camryblack25 },
      { color: "ذهبي", image: camrygold25 },
    ],
  },
  {
    id: "kia-k5-2022",
    name: "Kia K5",
    year: "2022",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
    features: ["تصميم رياضي أنيق", "إضاءة LED متطورة", "مقصورة فاخرة"],
    minAge: 21,
    variants: [
      { color: "فضي", image: kia_K5_Silver_2022 },
      { color: "أبيض", image: kia_K5_White_2022 },
      { color: "أسود", image: kia_K5_Black_2022 },
    ],
  },
  {
    id: "kia-k5-2025",
    name: "Kia K5",
    year: "2025",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
    features: ["تصميم 2025 المحدث", "تقنيات ذكية متطورة", "أداء قوي"],
    minAge: 21,
    variants: [
      { color: "أبيض", image: kia_K5_White_2025 },
      { color: "رمادي", image: kia_K5_Gray_2025 },
      { color: "أسود", image: kia_K5_Black_2025 },
    ],
  },
  {
    id: "kia-sportage-2023",
    name: "Kia Sportage",
    year: "2023",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
    features: ["SUV عائلي فاخر", "تصميم جريء", "مساحة واسعة"],
    minAge: 21,
    variants: [
      { color: "ذهبي", image: kia_Sportage_Gold },
      { color: "رمادي", image: kia_Sportage_Gray },
      { color: "أسود", image: kia_Sportage_Black },
      { color: "فضي", image: kia_Sportage_Silver },
      { color: "أبيض", image: kia_Sportage_White },
    ],
  },
  {
    id: "kia-sportage-2025",
    name: "Kia Sportage",
    year: "2025",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
    features: ["تصميم 2025 الجديد", "شاشة بانورامية ضخمة", "نظام أمان متكامل"],
    minAge: 21,
    variants: [
      { color: "أزرق", image: kia_Sportage_Blue_2025 },
      { color: "أسود", image: kia_Sportage_Black_2025 },
      { color: "رمادي", image: kia_Sportage_Gray_2025 },
      { color: "أبيض", image: kia_Sportage_White_2025 },
    ],
  },
  {
    id: "corolla-cross-2024",
    name: "Toyota Corolla Cross",
    year: "2024",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.8L Hybrid" },
    features: ["هايبرد اقتصادي", "كروس أوفر عملي", "تقنيات سلامة متقدمة"],
    minAge: 21,
    variants: [{ color: "أبيض", image: corollaCross }],
  },
  {
    id: "rav4-2023",
    name: "Toyota RAV4",
    year: "2023",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "2.5L" },
    features: ["SUV عائلي قوي", "دفع رباعي", "تصميم 2023 المحدث"],
    minAge: 21,
    variants: [
      { color: "أبيض", image: rav4w_2023 },
      { color: "رمادي", image: rav4_2023 },
      { color: "فضي", image: rav4Salver },
    ],
  },

  {
    id: "urban-cruiser-2024",
    name: "Toyota Urban",
    year: "2024",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5L Hybrid" },
    features: ["كروس أوفر هايبرد", "تصميم شبابي عصري", "اقتصادي في المدينة"],
    minAge: 21,
    variants: [
      { color: "رمادي", image: urbanCruiser_Gray },
      { color: "أبيض", image: urbanCruiser_White },
    ],
  },
  {
    id: "lexus-es250-2023",
    name: "Lexus ES250",
    year: "2023",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "2.5L" },
    features: ["سيدان فاخرة", "راحة استثنائية", "تقنيات لكزس المتطورة"],
    minAge: 25,
    variants: [
      { color: "أبيض", image: lexusES250_White },
      { color: "أسود", image: lexusES250_Black },
      { color: "رمادي", image: lexusES250_Gray },
    ],
  },
  {
    id: "kia-seltos-2025",
    name: "Kia Seltos",
    year: "2025",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
    features: ["SUV عصري أنيق", "تقنيات ذكية متقدمة", "تصميم جريء"],
    minAge: 21,
    variants: [
      { color: "أبيض", image: kiaSeltos_White },
      { color: "أحمر", image: kiaSeltos_Red },
      { color: "رمادي", image: kiaSeltos_Gray },
    ],
  },
];

// ── كومبوننت الكارت الواحد ────────────────────────────────
const CarCard = ({ car, index }) => {
  const [selectedVariant, setSelectedVariant] = useState(0);

  return (
    <Col xs={12} md={6} xl={4}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.05 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
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
            <motion.img
              key={selectedVariant}
              src={car.variants[selectedVariant].image}
              alt={car.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
              }}
            />
          </div>

          <Card.Body className="p-4 text-center">
            <Card.Title
              className="fw-bold mb-2 fs-4"
              style={{ color: "#212741" }}
            >
              {car.name}
            </Card.Title>

            {car.variants.length > 1 && (
              <div className="d-flex justify-content-center align-items-center gap-2 mb-3 flex-wrap">
                <span className="text-muted small ms-1">اللون:</span>
                {car.variants.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedVariant(i)}
                    title={v.color}
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      backgroundColor: COLOR_MAP[v.color] || "#ccc",
                      border:
                        selectedVariant === i
                          ? "3px solid #fc8b1a"
                          : "2px solid #ccc",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      boxShadow:
                        selectedVariant === i
                          ? "0 0 0 2px #fff, 0 0 0 4px #fc8b1a"
                          : "none",
                      outline: "none",
                      padding: 0,
                    }}
                  />
                ))}
                <span
                  className="small fw-bold"
                  style={{ color: "#fc8b1a", minWidth: "40px" }}
                >
                  {car.variants[selectedVariant].color}
                </span>
              </div>
            )}

            <Row className="g-0 mb-3 bg-light p-2 rounded border">
              <Col xs={4} className="border-start small fw-bold">
                <FaUsers color="#fc8b1a" className="d-block mx-auto mb-1" />
                {car.specs.passengers} ركاب
              </Col>
              <Col xs={4} className="border-start small fw-bold">
                <FaCogs color="#fc8b1a" className="d-block mx-auto mb-1" />
                {car.specs.transmission}
              </Col>
              <Col xs={4} className="small fw-bold">
                <FaGasPump color="#fc8b1a" className="d-block mx-auto mb-1" />
                {car.specs.engine}
              </Col>
            </Row>

            <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
              {car.features.map((f, i) => (
                <Badge
                  key={i}
                  bg="white"
                  text="dark"
                  className="border py-2 px-2 fw-normal shadow-sm"
                >
                  <FaCheckCircle className="text-warning me-1" /> {f}
                </Badge>
              ))}
            </div>

            <div className="rental-info-box mb-4 p-2 border rounded bg-light shadow-inner">
              <div className="d-flex justify-content-around small text-muted mb-2 border-bottom pb-1">
                <span>
                  <FaCalendarAlt className="text-primary" /> يومي
                </span>
                <span>
                  <FaCalendarAlt className="text-primary" /> شهري
                </span>
                <span>
                  <FaCalendarAlt className="text-primary" /> سنوي
                </span>
              </div>
              <div className="text-danger fw-bold small mt-1">
                <FaIdCard className="me-1" /> الحد الأدنى للعمر: {car.minAge}{" "}
                سنة
              </div>
            </div>

            <Button
              variant="success"
              href={`https://wa.me/+96590930061?text=مرحباً، أريد استئجار ${car.name} موديل ${car.year} - اللون ${car.variants[selectedVariant].color}`}
              target="_blank"
              className="w-100 py-2 fw-bold shadow-sm whatsapp-btn"
            >
              <FaWhatsapp size={22} className="me-2" /> احجزها الآن
            </Button>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
  );
};

// ── الكومبوننت الرئيسي ────────────────────────────────────
const EconomyCarsDetails = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HomeSidler />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-header text-center my-5 px-3"
      >
        <Container>
          <h2 className="display-5 fw-bold" style={{ color: "#212741" }}>
            السيارات الاقتصادية
          </h2>
          <div
            className="mx-auto mt-2"
            style={{
              height: "4px",
              width: "100px",
              background: "#fc8b1a",
              borderRadius: "10px",
            }}
          ></div>
          <p className="text-muted mt-3 fs-5">
            خيارك الذكي للتنقل اليومي بأقل تكلفة وأعلى كفاءة
          </p>
        </Container>
      </motion.div>

      <Container className="my-5" dir="rtl">
        <Row className="g-4">
          {economyCarsGrouped.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} />
          ))}
        </Row>
      </Container>

      <style>{`
        .car-card { border-radius: 20px; transition: all 0.3s ease; }
        .car-card:hover { box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important; }
        .whatsapp-btn { background-color: #25d366; border: none; border-radius: 12px; transition: 0.3s; }
        .whatsapp-btn:hover { background-color: #128c7e; transform: scale(1.02); }
        .shadow-inner { box-shadow: inset 0 2px 4px rgba(0,0,0,0.05); }
      `}</style>
    </>
  );
};

export default EconomyCarsDetails;
