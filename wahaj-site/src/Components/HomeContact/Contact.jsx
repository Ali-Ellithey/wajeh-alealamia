import React, { useEffect } from "react";
import { useTranslation } from "react-i18next"; // استيراد الهوك

export const Contact = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="contactHome">
        <h2>{t("contact_title")}</h2> {/* استخدام المفتاح المترجم */}
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Contact;
