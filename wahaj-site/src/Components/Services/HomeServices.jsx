import React from "react";
import { useTranslation } from "react-i18next"; // استيراد الهوك

export const HomeServices = () => {
  const { t } = useTranslation(); // تفعيل دالة الترجمة

  return (
    <div className="ServicesHome">
      <h2>{t("services_title")}</h2> {/* استخدام المفتاح المترجم */}
    </div>
  );
};

export default HomeServices;
