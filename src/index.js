import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./index.css";
import "./fullcalendar-vars.css";
import "./image-gallery.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);
