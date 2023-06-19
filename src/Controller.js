import logo from "./logo.svg";
import "./App.css";
import "./assets/css/style.css";
import "./assets/vendor/fontawesome-free/css/all.min.css";
import "./assets/vendor/animate.css/animate.min.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import React, { useEffect, useReducer, useState } from "react";
import Navbar from "../src/components/Commons/Navbar/Navbar";
import Header from "../src/components/Commons/Header/Header";
import Footer from "./components/Commons/Footer/Footer";
import Home from "./components/Commons/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appointment from "./components/Appoinment/Appointment";
import Doctor from "./components/User/Doctor";
import Service from "./components/Service/Service";

function Controller() {
  const [on, setOn] = useState(false);

  const handleTogger = () => {
    setOn(!on);
    console.log(on);
  };
  return (
    <div className="Controller">
      <BrowserRouter>
        <Header></Header>
        <Navbar handleTogger={handleTogger} on={on} />
        <Routes>
          <Route path="/" element={<Home on={on} />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="doctor" element={<Doctor />} />
          <Route path="service" element={<Service />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
export default Controller;
