import React, { useEffect } from "react";
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

// --- 1. استيراد المكونات ---
import HomeSidler from "@/Components/Home/HomeSidler";

import hRV_Silver from "@/assets/EconomyCars/HR-v-salver.webp";
import hRV_White from "@/assets/EconomyCars/HR-v-white.webp";
import hRV_Blue from "@/assets/EconomyCars/HR-v-blue.webp";
import changanCS35Plus_Black from "@/assets/EconomyCars/Changan-CS35-Plus-black.webp";
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
import chrysler300_White from "@/assets/EconomyCars/Chrysler300-white.webp";
import chrysler300_Black from "@/assets/EconomyCars/Chrysler300-black.webp";
import chrysler300_Silver from "@/assets/EconomyCars/Chrysler300.webp";
import jetour_White from "@/assets/EconomyCars/Jetour-white.webp";
import jetour_Black from "@/assets/EconomyCars/Jetour-black.webp";
import jetour_Silver from "@/assets/EconomyCars/JETOUR-salver.webp";
import yaris_Silver from "@/assets/EconomyCars/Yaris-salver.webp";
import yaris_Gray from "@/assets/EconomyCars/Yairs-gray.webp";
import raize_Black from "@/assets/EconomyCars/Raize-black.webp";
import raize_White from "@/assets/EconomyCars/Raize-white.webp";
import camry_Gray from "@/assets/EconomyCars/Camry-gray.webp";
import kia_K4_Silver from "@/assets/EconomyCars/k4-.webp";
import kia_K4_Gray from "@/assets/EconomyCars/k4.webp";
import kia_Pegas_White from "@/assets/EconomyCars/Pegas-white2024.webp";
import kia_Pegas_Silver from "@/assets/EconomyCars/Pegas-salver2024.webp";
import kia_Pegas_Blue from "@/assets/EconomyCars/Pegas-blue2024.webp";
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
import camry_Silver from "@/assets/EconomyCars/Camry-salver.webp";
import yaris_Silver2 from "@/assets/EconomyCars/Yaris-salver-.webp";
import yaris_White from "@/assets/EconomyCars/Yaris-white.webp";
import corollaCross from "@/assets/EconomyCars/Corolla-Cross.webp";
import rav4_2025 from "@/assets/EconomyCars/RAV42025.webp";
import urbanCruiser_Red from "@/assets/EconomyCars/Urban-Cruiser.webp";
import rav4_Gray from "@/assets/EconomyCars/Rave4-gray.webp";
import rav4_White from "@/assets/EconomyCars/Rave4-white.webp";
import prado_Silver from "@/assets/EconomyCars/Prado.webp";
import prado_White from "@/assets/EconomyCars/Prado-white.webp";
import prado_Black from "@/assets/EconomyCars/prado-black.webp";
import urbanCruiser_Black from "@/assets/EconomyCars/Urban-Cruiser-black.webp";
import urbanCruiser_Gray from "@/assets/EconomyCars/Urban-Cruiser-gray.webp";
import urbanCruiser_White from "@/assets/EconomyCars/Urban-Cruiser-white.webp";
import lexusES250_White from "@/assets/EconomyCars/Lexus-ES250-white.webp";
import lexusES250_Black from "@/assets/EconomyCars/Lexus-ES250-black.webp";
import lexusES250_Gray from "@/assets/EconomyCars/Lexus-ES250-gray.webp";
import kiaSeltos_White from "@/assets/EconomyCars/Seltos-c2.webp";
import kiaSeltos_Red from "@/assets/EconomyCars/Seltos-c1.webp";
import kiaSeltos_Gray from "@/assets/EconomyCars/Seltos-c.webp";
const EconomyCarsDetails = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const economyCars = [
    {
      id: 1,
      name: "Honda HR-V",
      image: hRV_Silver,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5L" },
      features: [
        "تصميم كروس أوفر أنيق",
        "اقتصادي في الوقود",
        "مساحة داخلية واسعة",
      ],
      minAge: 21,
    },
    {
      id: 2,
      name: "Honda HR-V",
      image: hRV_White,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5L" },
      features: [
        "تصميم كروس أوفر أنيق",
        "اقتصادي في الوقود",
        "مساحة داخلية واسعة",
      ],
      minAge: 21,
    },

    {
      id: 4,
      name: "Honda HR-V",
      image: hRV_Blue,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5L" },
      features: [
        "تصميم كروس أوفر أنيق",
        "اقتصادي في الوقود",
        "مساحة داخلية واسعة",
      ],
      minAge: 21,
    },
    {
      id: 5,
      name: "Changan CS35 Plus",
      image: changanCS35Plus_Black,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.4T" },
      features: ["تصميم رياضي", "تقنيات حديثة", "سعر منافس"],
      minAge: 21,
    },
    {
      id: 6,
      name: "Changan CS35 Plus",
      image: changanCS35Plus_Gray,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.4T" },
      features: ["تصميم رياضي", "تقنيات حديثة", "سعر منافس"],
      minAge: 21,
    },
    {
      id: 7,
      name: "Changan CS35 Plus",
      image: changanCS35Plus_White,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.4T" },
      features: ["تصميم رياضي", "تقنيات حديثة", "سعر منافس"],
      minAge: 21,
    },
    {
      id: 8,
      name: "Chery Tiggo 7 Pro Max",
      image: tiggo7ProMax_Black,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["SUV فاخر", "شاشة بانورامية", "نظام أمان متقدم"],
      minAge: 21,
    },
    {
      id: 9,
      name: "Chery Tiggo 7 Pro Max",
      image: tiggo7ProMax_Gray,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["SUV فاخر", "شاشة بانورامية", "نظام أمان متقدم"],
      minAge: 21,
    },
    {
      id: 10,
      name: "Chery Tiggo 7 Pro Max",
      image: tiggo7ProMax_White,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["SUV فاخر", "شاشة بانورامية", "نظام أمان متقدم"],
      minAge: 21,
    },
    {
      id: 11,
      name: "Chery Omoda 5",
      image: omoda5_White,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["تصميم كوبيه رياضي", "إضاءة LED", "مقصورة ذكية"],
      minAge: 21,
    },
    {
      id: 12,
      name: "Chery Omoda 5",
      image: omoda5_Black,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["تصميم كوبيه رياضي", "إضاءة LED", "مقصورة ذكية"],
      minAge: 21,
    },
    {
      id: 13,
      name: "Chery Omoda 5",
      image: omoda5_Blue,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["تصميم كوبيه رياضي", "إضاءة LED", "مقصورة ذكية"],
      minAge: 21,
    },
    {
      id: 14,
      name: "Chery Omoda 5",
      image: omoda5_Silver,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["تصميم كوبيه رياضي", "إضاءة LED", "مقصورة ذكية"],
      minAge: 21,
    },
    {
      id: 15,
      name: "Geely Emgrand",
      image: geelyEmgrand_White,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5L" },
      features: ["سيدان أنيقة", "اقتصادية في الوقود", "تقنيات السلامة الحديثة"],
      minAge: 21,
    },
    {
      id: 16,
      name: "Geely Emgrand",
      image: geelyEmgrand_Silver,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5L" },
      features: ["سيدان أنيقة", "اقتصادية في الوقود", "تقنيات السلامة الحديثة"],
      minAge: 21,
    },
    {
      id: 17,
      name: "Geely Emgrand",
      image: geelyEmgrand_Black,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5L" },
      features: ["سيدان أنيقة", "اقتصادية في الوقود", "تقنيات السلامة الحديثة"],
      minAge: 21,
    },
    {
      id: 18,
      name: "Geely Coolray",
      image: coolray_White,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5T" },
      features: ["كروس أوفر رياضي", "تصميم عصري جريء", "أداء قوي"],
      minAge: 21,
    },
    {
      id: 19,
      name: "Geely Coolray",
      image: coolray_Black,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5T" },
      features: ["كروس أوفر رياضي", "تصميم عصري جريء", "أداء قوي"],
      minAge: 21,
    },
    {
      id: 20,
      name: "Geely Coolray",
      image: coolray_Silver,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5T" },
      features: ["كروس أوفر رياضي", "تصميم عصري جريء", "أداء قوي"],
      minAge: 21,
    },
    {
      id: 21,
      name: "Hyundai Elantra N",
      image: hyundaiElantraN_Gray,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "2.0T" },
      features: ["إصدار رياضي N", "فرامل حمراء", "أداء سباقات"],
      minAge: 21,
    },
    {
      id: 22,
      name: "Hyundai Elantra N",
      image: hyundaiElantraN_White,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "2.0T" },
      features: ["إصدار رياضي N", "فرامل حمراء", "أداء سباقات"],
      minAge: 21,
    },
    {
      id: 23,
      name: "Hyundai Tucson",
      image: tucson2025_White,
      year: "2025",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["تصميم 2025 المحدث", "شاشة بانورامية", "نظام أمان متقدم"],
      minAge: 21,
    },
    {
      id: 24,
      name: "Hyundai Tucson",
      image: tucson2025_Silver,
      year: "2025",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["تصميم 2025 المحدث", "شاشة بانورامية", "نظام أمان متقدم"],
      minAge: 21,
    },
    {
      id: 25,
      name: "Hyundai Tucson",
      image: tucson2025_Black,
      year: "2025",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["تصميم 2025 المحدث", "شاشة بانورامية", "نظام أمان متقدم"],
      minAge: 21,
    },
    {
      id: 26,
      name: "Hyundai Tucson",
      image: tucson2025_Gray,
      year: "2025",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["تصميم 2025 المحدث", "شاشة بانورامية", "نظام أمان متقدم"],
      minAge: 21,
    },
    {
      id: 27,
      name: "Hyundai Tucson",
      image: tucson2023_Blue,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["SUV عملي", "تقنية هايبرد", "مساحة واسعة"],
      minAge: 21,
    },
    {
      id: 28,
      name: "Hyundai Tucson",
      image: tucson2023_White,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["SUV عملي", "تقنية هايبرد", "مساحة واسعة"],
      minAge: 21,
    },
    {
      id: 29,
      name: "Hyundai Tucson",
      image: tucson2023_Gray,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["SUV عملي", "تقنية هايبرد", "مساحة واسعة"],
      minAge: 21,
    },
    {
      id: 30,
      name: "Chrysler 300",
      image: chrysler300_White,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6/V8" },
      features: ["سيدان فارهة", "تصميم أمريكي كلاسيكي", "محرك قوي"],
      minAge: 21,
    },
    {
      id: 31,
      name: "Chrysler 300",
      image: chrysler300_Black,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6/V8" },
      features: ["سيدان فارهة", "تصميم أمريكي كلاسيكي", "محرك قوي"],
      minAge: 21,
    },
    {
      id: 32,
      name: "Chrysler 300",
      image: chrysler300_Silver,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6/V8" },
      features: ["سيدان فارهة", "تصميم أمريكي كلاسيكي", "محرك قوي"],
      minAge: 21,
    },
    {
      id: 33,
      name: "Jetour T2",
      image: jetour_White,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5T" },
      features: ["تصميم مغامرات", "4x4 قوي", "مظهر عسكري أنيق"],
      minAge: 21,
    },
    {
      id: 34,
      name: "Jetour T2",
      image: jetour_Black,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5T" },
      features: ["تصميم مغامرات", "4x4 قوي", "مظهر عسكري أنيق"],
      minAge: 21,
    },
    {
      id: 35,
      name: "Jetour T2",
      image: jetour_Silver,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5T" },
      features: ["تصميم مغامرات", "4x4 قوي", "مظهر عسكري أنيق"],
      minAge: 21,
    },
    {
      id: 36,
      name: "Toyota Yaris",
      image: yaris_Silver,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5L" },
      features: ["اقتصادية في الوقود", "سهلة القيادة", "موثوقة وعملية"],
      minAge: 21,
    },
    {
      id: 37,
      name: "Toyota Yaris",
      image: yaris_Gray,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5L" },
      features: ["اقتصادية في الوقود", "سهلة القيادة", "موثوقة وعملية"],
      minAge: 21,
    },
    {
      id: 38,
      name: "Toyota Raize",
      image: raize_Black,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.0T" },
      features: ["كروس أوفر صغير", "اقتصادي", "تصميم شبابي"],
      minAge: 21,
    },
    {
      id: 39,
      name: "Toyota Raize",
      image: raize_White,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.0T" },
      features: ["كروس أوفر صغير", "اقتصادي", "تصميم شبابي"],
      minAge: 21,
    },
    {
      id: 40,
      name: "Toyota Camry",
      image: camry_Gray,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "2.5L" },
      features: ["سيدان فارهة", "تقنية هايبرد", "راحة فائقة"],
      minAge: 21,
    },
    {
      id: 41,
      name: "Kia K4",
      image: kia_K4_Silver,
      year: "2025",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5T" },
      features: ["تصميم عصري جديد", "شاشة ذكية كبيرة", "أداء متميز"],
      minAge: 21,
    },
    {
      id: 42,
      name: "Kia K4",
      image: kia_K4_Gray,
      year: "2025",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5T" },
      features: ["تصميم عصري جديد", "شاشة ذكية كبيرة", "أداء متميز"],
      minAge: 21,
    },

    // ── Kia Pegas ────────────────────────────────────────
    {
      id: 43,
      name: "Kia Pegas",
      image: kia_Pegas_White,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.4L" },
      features: ["اقتصادية في الوقود", "سيدان عملية", "سهلة القيادة"],
      minAge: 21,
    },
    {
      id: 44,
      name: "Kia Pegas",
      image: kia_Pegas_Silver,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.4L" },
      features: ["اقتصادية في الوقود", "سيدان عملية", "سهلة القيادة"],
      minAge: 21,
    },
    {
      id: 45,
      name: "Kia Pegas",
      image: kia_Pegas_Blue,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.4L" },
      features: ["اقتصادية في الوقود", "سيدان عملية", "سهلة القيادة"],
      minAge: 21,
    },

    // ── Kia K5 2022 ──────────────────────────────────────
    {
      id: 46,
      name: "Kia K5",
      image: kia_K5_Silver_2022,
      year: "2022",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["تصميم رياضي أنيق", "إضاءة LED متطورة", "مقصورة فاخرة"],
      minAge: 21,
    },
    {
      id: 47,
      name: "Kia K5",
      image: kia_K5_White_2022,
      year: "2022",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["تصميم رياضي أنيق", "إضاءة LED متطورة", "مقصورة فاخرة"],
      minAge: 21,
    },
    {
      id: 48,
      name: "Kia K5",
      image: kia_K5_Black_2022,
      year: "2022",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["تصميم رياضي أنيق", "إضاءة LED متطورة", "مقصورة فاخرة"],
      minAge: 21,
    },

    // ── Kia K5 2025 ──────────────────────────────────────
    {
      id: 49,
      name: "Kia K5",
      image: kia_K5_White_2025,
      year: "2025",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["تصميم 2025 المحدث", "تقنيات ذكية متطورة", "أداء قوي"],
      minAge: 21,
    },
    {
      id: 50,
      name: "Kia K5",
      image: kia_K5_Gray_2025,
      year: "2025",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["تصميم 2025 المحدث", "تقنيات ذكية متطورة", "أداء قوي"],
      minAge: 21,
    },
    {
      id: 51,
      name: "Kia K5",
      image: kia_K5_Black_2025,
      year: "2025",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["تصميم 2025 المحدث", "تقنيات ذكية متطورة", "أداء قوي"],
      minAge: 21,
    },

    // ── Kia Sportage (Classic) ────────────────────────────
    {
      id: 52,
      name: "Kia Sportage",
      image: kia_Sportage_Gold,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["SUV عائلي فاخر", "تصميم جريء", "مساحة واسعة"],
      minAge: 21,
    },
    {
      id: 53,
      name: "Kia Sportage",
      image: kia_Sportage_Gray,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["SUV عائلي فاخر", "تصميم جريء", "مساحة واسعة"],
      minAge: 21,
    },
    {
      id: 54,
      name: "Kia Sportage",
      image: kia_Sportage_Black,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["SUV عائلي فاخر", "تصميم جريء", "مساحة واسعة"],
      minAge: 21,
    },
    {
      id: 55,
      name: "Kia Sportage",
      image: kia_Sportage_Silver,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["SUV عائلي فاخر", "تصميم جريء", "مساحة واسعة"],
      minAge: 21,
    },
    {
      id: 56,
      name: "Kia Sportage",
      image: kia_Sportage_White,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["SUV عائلي فاخر", "تصميم جريء", "مساحة واسعة"],
      minAge: 21,
    },

    // ── Kia Sportage 2025 ─────────────────────────────────
    {
      id: 57,
      name: "Kia Sportage",
      image: kia_Sportage_Blue_2025,
      year: "2025",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: [
        "تصميم 2025 الجديد",
        "شاشة بانورامية ضخمة",
        "نظام أمان متكامل",
      ],
      minAge: 21,
    },
    {
      id: 58,
      name: "Kia Sportage",
      image: kia_Sportage_Black_2025,
      year: "2025",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: [
        "تصميم 2025 الجديد",
        "شاشة بانورامية ضخمة",
        "نظام أمان متكامل",
      ],
      minAge: 21,
    },
    {
      id: 59,
      name: "Kia Sportage",
      image: kia_Sportage_Gray_2025,
      year: "2025",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: [
        "تصميم 2025 الجديد",
        "شاشة بانورامية ضخمة",
        "نظام أمان متكامل",
      ],
      minAge: 21,
    },
    {
      id: 60,
      name: "Kia Sportage",
      image: kia_Sportage_White_2025,
      year: "2025",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: [
        "تصميم 2025 الجديد",
        "شاشة بانورامية ضخمة",
        "نظام أمان متكامل",
      ],
      minAge: 21,
    },
    {
      id: 61,
      name: "Toyota Camry",
      image: camry_Silver,
      year: "2025",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "2.5L" },
      features: ["سيدان فارهة", "تقنية هايبرد", "راحة فائقة"],
      minAge: 21,
    },

    // ── Toyota Yaris ──────────────────────────────────────
    {
      id: 62,
      name: "Toyota Yaris",
      image: yaris_Silver2,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5L" },
      features: ["اقتصادية في الوقود", "سهلة القيادة", "موثوقة وعملية"],
      minAge: 21,
    },
    {
      id: 63,
      name: "Toyota Yaris",
      image: yaris_White,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5L" },
      features: ["اقتصادية في الوقود", "سهلة القيادة", "موثوقة وعملية"],
      minAge: 21,
    },

    // ── Toyota Corolla Cross ──────────────────────────────
    {
      id: 64,
      name: "Toyota Corolla Cross",
      image: corollaCross,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.8L Hybrid" },
      features: ["هايبرد اقتصادي", "كروس أوفر عملي", "تقنيات سلامة متقدمة"],
      minAge: 21,
    },

    // ── Toyota RAV4 2025 ─────────────────────────────────
    {
      id: 65,
      name: "Toyota RAV4",
      image: rav4_2025,
      year: "2025",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "2.5L" },
      features: ["SUV عائلي قوي", "دفع رباعي", "تصميم 2025 المحدث"],
      minAge: 21,
    },

    // ── Toyota RAV4 (Classic) ────────────────────────────
    {
      id: 66,
      name: "Toyota RAV4",
      image: rav4_Gray,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "2.5L" },
      features: ["SUV عائلي قوي", "دفع رباعي", "مساحة واسعة"],
      minAge: 21,
    },
    {
      id: 67,
      name: "Toyota RAV4",
      image: rav4_White,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "2.5L" },
      features: ["SUV عائلي قوي", "دفع رباعي", "مساحة واسعة"],
      minAge: 21,
    },

    // ── Toyota Land Cruiser Prado ─────────────────────────
    {
      id: 68,
      name: "Toyota Land Cruiser Prado",
      image: prado_Silver,
      year: "2024",
      specs: { passengers: 7, transmission: "أتوماتيك", engine: "2.8L Diesel" },
      features: [
        "SUV فاخر 7 مقاعد",
        "قدرة على الطرق الوعرة",
        "تصميم كلاسيكي أيقوني",
      ],
      minAge: 21,
    },
    {
      id: 69,
      name: "Toyota Land Cruiser Prado",
      image: prado_White,
      year: "2024",
      specs: { passengers: 7, transmission: "أتوماتيك", engine: "2.8L Diesel" },
      features: [
        "SUV فاخر 7 مقاعد",
        "قدرة على الطرق الوعرة",
        "تصميم كلاسيكي أيقوني",
      ],
      minAge: 21,
    },
    {
      id: 70,
      name: "Toyota Land Cruiser Prado",
      image: prado_Black,
      year: "2024",
      specs: { passengers: 7, transmission: "أتوماتيك", engine: "2.8L Diesel" },
      features: [
        "SUV فاخر 7 مقاعد",
        "قدرة على الطرق الوعرة",
        "تصميم كلاسيكي أيقوني",
      ],
      minAge: 21,
    },

    // ── Toyota Urban Cruiser ──────────────────────────────
    {
      id: 71,
      name: "Toyota Urban Cruiser",
      image: urbanCruiser_Red,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5L Hybrid" },
      features: ["كروس أوفر هايبرد", "تصميم شبابي عصري", "اقتصادي في المدينة"],
      minAge: 21,
    },
    {
      id: 72,
      name: "Toyota Urban Cruiser",
      image: urbanCruiser_Black,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5L Hybrid" },
      features: ["كروس أوفر هايبرد", "تصميم شبابي عصري", "اقتصادي في المدينة"],
      minAge: 21,
    },
    {
      id: 73,
      name: "Toyota Urban Cruiser",
      image: urbanCruiser_Gray,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5L Hybrid" },
      features: ["كروس أوفر هايبرد", "تصميم شبابي عصري", "اقتصادي في المدينة"],
      minAge: 21,
    },
    {
      id: 74,
      name: "Toyota Urban Cruiser",
      image: urbanCruiser_White,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5L Hybrid" },
      features: ["كروس أوفر هايبرد", "تصميم شبابي عصري", "اقتصادي في المدينة"],
      minAge: 21,
    },

    // ── Lexus ES250 ───────────────────────────────────────
    {
      id: 75,
      name: "Lexus ES250",
      image: lexusES250_White,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "2.5L" },
      features: ["سيدان فاخرة", "راحة استثنائية", "تقنيات لكزس المتطورة"],
      minAge: 25,
    },
    {
      id: 76,
      name: "Lexus ES250",
      image: lexusES250_Black,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "2.5L" },
      features: ["سيدان فاخرة", "راحة استثنائية", "تقنيات لكزس المتطورة"],
      minAge: 25,
    },
    {
      id: 77,
      name: "Lexus ES250",
      image: lexusES250_Gray,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "2.5L" },
      features: ["سيدان فاخرة", "راحة استثنائية", "تقنيات لكزس المتطورة"],
      minAge: 25,
    },

    // ── Kia Seltos ────────────────────────────────────────
    {
      id: 78,
      name: "Kia Seltos",
      image: kiaSeltos_White,
      year: "2025",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["SUV عصري أنيق", "تقنيات ذكية متقدمة", "تصميم جريء"],
      minAge: 21,
    },
    {
      id: 79,
      name: "Kia Seltos",
      image: kiaSeltos_Red,
      year: "2025",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["SUV عصري أنيق", "تقنيات ذكية متقدمة", "تصميم جريء"],
      minAge: 21,
    },
    {
      id: 80,
      name: "Kia Seltos",
      image: kiaSeltos_Gray,
      year: "2025",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.6T" },
      features: ["SUV عصري أنيق", "تقنيات ذكية متقدمة", "تصميم جريء"],
      minAge: 21,
    },
  ];

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
          {economyCars.map((car, index) => (
            <Col key={car.id} xs={12} md={6} xl={4}>
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
                    <Card.Img
                      variant="top"
                      src={car.image}
                      style={{
                        objectFit: "cover",
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </div>

                  <Card.Body className="p-4 text-center">
                    <Card.Title
                      className="fw-bold mb-3 fs-4"
                      style={{ color: "#212741" }}
                    >
                      {car.name}
                    </Card.Title>

                    <Row className="g-0 mb-3 bg-light p-2 rounded border">
                      <Col xs={4} className="border-start small fw-bold">
                        <FaUsers
                          color="#fc8b1a"
                          className="d-block mx-auto mb-1"
                        />
                        {car.specs.passengers} ركاب
                      </Col>
                      <Col xs={4} className="border-start small fw-bold">
                        <FaCogs
                          color="#fc8b1a"
                          className="d-block mx-auto mb-1"
                        />
                        {car.specs.transmission}
                      </Col>
                      <Col xs={4} className="small fw-bold">
                        <FaGasPump
                          color="#fc8b1a"
                          className="d-block mx-auto mb-1"
                        />
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
                        <FaIdCard className="me-1" /> الحد الأدنى للعمر:{" "}
                        {car.minAge} سنة
                      </div>
                    </div>

                    <Button
                      variant="success"
                      href={`https://wa.me/+96590930061?text=مرحباً، أريد استئجار ${car.name}`}
                      target="_blank"
                      className="w-100 py-2 fw-bold shadow-sm whatsapp-btn"
                    >
                      <FaWhatsapp size={22} className="me-2" /> احجزها الآن
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
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
