import React from "react";
import Container from "react-bootstrap/esm/Container";
import GoogleMapReact from "google-map-react";
import { Zoom } from "react-awesome-reveal";

// تصميم مخصص وشكل مميز للماركر (الدبوس) على الخريطة
const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "#fc8b1a",
      padding: "8px 12px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "8px",
      fontWeight: "bold",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      transform: "translate(-50%, -100%)", // لتثبيت السهم في النقطة الصحيحة تماماً
      whiteSpace: "nowrap",
    }}
  >
    📍 {text}
  </div>
);

export const MapContacts = () => {
  // 👈 تم تعديل السنتر هنا ليكون داخل مدينة الكويت (منطقة شرق) مباشرة
  const defaultProps = {
    center: {
      lat: 29.3826,
      lng: 47.9888,
    },
    zoom: 15, // تم زيادة الزووم لتكون الخريطة قريبة وواضحة للمستخدم
  };

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
            }}
          >
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={29.3826}
                lng={47.9888}
                text="شركة الوهج - شرق"
              />
            </GoogleMapReact>
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
