import React from "react";
import Container from "react-bootstrap/Container";
import { Zoom } from "react-awesome-reveal";

export const MapContacts = () => {
  // رابط الانتقال لتطبيق الخرائط عند الضغط على العنوان
  const mapUrl = "https://maps.google.com/?q=Faisal,+Al-Tawabiq,+Giza";

  return (
    <div className="MapContacts py-5 bg-light">
      <Container>
        {/* قسم الخريطة */}
        <Zoom triggerOnce>
          <div
            className="shadow-sm rounded-4 overflow-hidden mb-5 bg-white border"
            style={{ height: "450px", width: "100%" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.1539281724!2d31.1859!3d30.0074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584711a8b7ddb5%3A0x63372c842b260f89!2z2KfZhNit2KfZhdiMINis2KfZhdiMINmF2K3Yr9mK2K8!5e0!3m2!1sar!2seg!4v1710000000000!5m2!1sar!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع العيادة - الجيزة فيصل"
            ></iframe>
          </div>
        </Zoom>

        {/* قسم معلومات التواصل */}
        <div className="row g-4 text-center justify-content-center">
          {/* البريد الإلكتروني */}
          <div className="col-lg-4 col-md-6">
            <div className="p-4 bg-white shadow-sm rounded-4 h-100 border-top border-primary border-4">
              <div className="text-primary fs-2 mb-3">
                <i className="fa fa-envelope"></i>
              </div>
              <h4 className="fw-bold fs-5 mb-2" style={{ color: "#212741" }}>
                البريد الإلكتروني
              </h4>
              <a
                href="mailto:info.dentalclinic@gmail.com"
                className="text-decoration-none text-muted fw-semibold"
                style={{ transition: "color 0.2s" }}
              >
                info.dentalclinic@gmail.com
              </a>
            </div>
          </div>

          {/* رقم الهاتف */}
          <div className="col-lg-4 col-md-6">
            <div className="p-4 bg-white shadow-sm rounded-4 h-100 border-top border-primary border-4">
              <div className="text-primary fs-2 mb-3">
                <i className="fa fa-phone"></i>
              </div>
              <h4 className="fw-bold fs-5 mb-2" style={{ color: "#212741" }}>
                رقم الهاتف
              </h4>
              <a
                href="tel:+201012345678"
                className="text-decoration-none text-muted fw-semibold"
                style={{ direction: "ltr", display: "inline-block" }}
              >
                +20 101 234 5678
              </a>
            </div>
          </div>

          {/* العنوان */}
          <div className="col-lg-4 col-md-6">
            <div className="p-4 bg-white shadow-sm rounded-4 h-100 border-top border-primary border-4">
              <div className="text-primary fs-2 mb-3">
                <i className="fa fa-map-marked-alt"></i>
              </div>
              <h4 className="fw-bold fs-5 mb-2" style={{ color: "#212741" }}>
                العنوان
              </h4>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-muted fw-semibold"
              >
                الجيزة - فيصل - محطة الطوابق
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MapContacts;
