import React from "react";
import "./i18n";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// تغيير الاستيراد هنا
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* استخدام HashRouter يحل مشكلة الـ 404 عند الـ Refresh نهائياً */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
