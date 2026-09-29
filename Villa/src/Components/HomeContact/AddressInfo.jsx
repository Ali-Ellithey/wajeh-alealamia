import React from "react";
import Container from "react-bootstrap/Container";

export const AddressInfo = () => {
  return (
    <div className="AddressInfo py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <div className="infos d-flex flex-wrap justify-content-around gap-4 text-center">
          {/* البريد الإلكتروني */}
          <div
            className="items p-4 bg-white shadow-sm rounded-4 flex-fill"
            style={{ minWidth: "250px", borderTop: "4px solid #0d6efd" }}
          >
            <div className="icon-box mb-3 text-primary fs-2">
              <i className="fa fa-envelope"></i>
            </div>
            <h4 className="fw-bold fs-5 mb-2" style={{ color: "#212741" }}>
              البريد الإلكتروني
            </h4>
            <a
              href="mailto:info.dentalclinic@gmail.com"
              className="text-decoration-dict text-muted text-decoration-none"
            >
              info.dentalclinic@gmail.com
            </a>
          </div>

          {/* رقم الهاتف (مصري) */}
          <div
            className="items p-4 bg-white shadow-sm rounded-4 flex-fill"
            style={{ minWidth: "250px", borderTop: "4px solid #0d6efd" }}
          >
            <div className="icon-box mb-3 text-primary fs-2">
              <i className="fa fa-phone"></i>
            </div>
            <h4 className="fw-bold fs-5 mb-2" style={{ color: "#212741" }}>
              رقم الهاتف
            </h4>
            <a
              href="tel:+201012345678"
              className="text-muted text-decoration-none dir-ltr"
              style={{ direction: "ltr", display: "inline-block" }}
            >
              +20 101 234 5678
            </a>
          </div>

          {/* العنوان (الجيزة - فيصل - الطوابق) مع خريطة جوجل */}
          <div
            className="items p-4 bg-white shadow-sm rounded-4 flex-fill"
            style={{ minWidth: "250px", borderTop: "4px solid #0d6efd" }}
          >
            <div className="icon-box mb-3 text-primary fs-2">
              <i className="fa fa-map-marked-alt"></i>
            </div>
            <h4 className="fw-bold fs-5 mb-2" style={{ color: "#212741" }}>
              العنوان
            </h4>
            <a
              href="https://maps.google.com/?q=Faisal,+Al-Tawabiq,+Giza"
              target="_blank"
              rel="noreferrer"
              className="text-muted text-decoration-none"
            >
              الجيزة - فيصل - محطة الطوابق
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AddressInfo;
