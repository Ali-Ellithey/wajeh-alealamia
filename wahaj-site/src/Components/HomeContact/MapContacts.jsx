import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Zoom } from "react-awesome-reveal";

export const MapContacts = () => {
  // الرابط اللي بينقل المستخدم لتطبيق الخرائط مباشرة عند الضغط
  const mapUrl = "https://maps.app.goo.gl/2iACKBUu4azFAaRs5?g_st=awb";

  return (
    <div className="MapContacts">
      <Container>
        <Zoom>
          <div
            style={{
              height: "50vh",
              width: "100%",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)", // لمسة جمالية للخلفية
            }}
          >
            {/* استخدام الـ iframe المجاني والسريع بديل للمكتبة المعطلة */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.33700010041!2d47.9862113!3d29.3826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9ced733734e5%3A0x67dbbc8df0452309!2z2LTYsdmD2KnYjCDZg9mI2YrYqg!5e0!3m2!1sar!2skw!4v1721470000000!5md2"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="شركة الوهج - شرق"
            ></iframe>
          </div>
        </Zoom>

        <div className="infos">
          <div className="items">
            <i className="fa fa-envelope"></i>
            <h4>Email Address</h4>
            <a
              href="mailto:alwaehj@gmail.com"
              style={{
                textDecoration: "none",
                color: "#fc8b1a",
                fontWeight: "bold",
              }}
            >
              ehabg7289@gmail.com
            </a>{" "}
          </div>

          <div className="items">
            <i className="fa fa-phone"></i>
            <h4>Phone Number</h4>
            <a
              href="tel:+96590930061"
              style={{
                textDecoration: "none",
                color: "#fc8b1a",
                fontWeight: "bold",
              }}
            >
              +965 9093 0061
            </a>
          </div>

          <div className="items">
            <i className="fa fa-map-marked-alt"></i>
            <h4>Address</h4>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#fc8b1a",
                fontWeight: "bold",
              }}
            >
              Kuwait City - Sharq
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MapContacts;
