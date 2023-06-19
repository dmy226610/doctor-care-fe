import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ handleTogger, on }) {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <a href="index.html">Medilab</a>
        </h1>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <Link as={Link} to="/" className="nav-link scrollto active">
                Home
              </Link>
            </li>
            <li>
              <Link as={Link} to="/about" className="nav-link scrollto">
                about
              </Link>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#departments">
                Departments
              </a>
            </li>
            <li>
              <Link as={Link} to="/doctor" className="nav-link scrollto">
                Doctors
              </Link>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Drop Down</span> <i class="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>{" "}
                    <i class="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <a href="#appointment" className="appointment-btn scrollto">
          
          <Link as={Link} to="/appointment" className="nav-link scrollto">
          <span className="d-none d-md-inline">Make an</span> Appointment
              </Link>
        </a>
      </div>
    </header>
  );
}
