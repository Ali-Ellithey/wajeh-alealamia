// 🏎️ مصفوفة الماركات
export const MULTI_WORD_BRANDS = [
    "Mercedes-Benz",
    "Mercedes",
    "Range Rover",
    "Land Rover",
    "Rolls-Royce",
    "Rolls Royce",
    "Chevrolet",
    "Mini Cooper",
    "ROX Motor",
    "Bentley",
    "BMW",
    "cadillac",
    "ferrari",
    "porsche",
    "Lexus",
    "nissan",
    "Toyota",
    "jeep",
    "Lamborghini",
    "Hyundai",
    "Jetour",
    "Honda",
    "Chrysler",
    "Chery",
    "Changan",
    "KIA",
    "Ford",
    "GMC"
];

// 🛠️ توجيه الكلمات المفتاحية للماركة الصح
const BRAND_ALIASES = {
    "range rover": "Range Rover",
    "land rover": "Land Rover",
    "mercedes-benz": "Mercedes-Benz",
    "mercedes": "Mercedes-Benz"
};

/**
 * تستخرج اسم البراند من اسم السيارة بذكاء وبدون الاعتماد على الترتيب الحرفي فقط
 */
export const getBrandFromCarName = (carName) => {
    if (!carName) return "";

    const cleanCarName = String(carName).toLowerCase().trim();

    // 🌟 الحل السحري: التحقق المباشر من الكلمات الأكثر تداخلاً أولاً
    if (cleanCarName.includes("range rover")) return "Range Rover";
    if (cleanCarName.includes("land rover")) return "Land Rover";
    if (cleanCarName.includes("mercedes")) return "Mercedes-Benz";

    // لباقي الماركات، بندور لو الاسم بيحتوي عليها
    const match = MULTI_WORD_BRANDS.find((brand) =>
        cleanCarName.includes(brand.toLowerCase())
    );

    const rawBrand = match || carName.split(" ")[0];
    const key = rawBrand.toLowerCase().trim();

    return BRAND_ALIASES[key] || rawBrand;
};

/**
 * تحوّل الاسم لـ slug نظيف
 */
export const toSlug = (str) => {
    if (!str) return "";
    return str
        .trim()
        .toLowerCase()
        .replace(/[\s_]+/g, "-")
        .replace(/[^\w-]/g, "");
};