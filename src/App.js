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

function App() {
  return (
    <div className="wff">
      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope"></i>{" "}
            <a href="mailto:contact@example.com">contact@example.com</a>
            <i className="bi bi-phone"></i> +1 5589 55488 55
          </div>
          <div class="d-none d-lg-flex social-links align-items-center">
            <a href="#" className="twitter">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" className="linkedin">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <header id="header" class="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="index.html">Medilab</a>
          </h1>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
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
                <a className="nav-link scrollto" href="#doctors">
                  Doctors
                </a>
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
            <span className="d-none d-md-inline">Make an</span> Appointment
          </a>
        </div>
      </header>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <h1>Welcome to Medilab</h1>
          <h2>
            We are team of talented designers making websites with Bootstrap
          </h2>
          <a href="#about" className="btn-get-started scrollto">
            Get Started
          </a>
        </div>
      </section>

      <main id="main">
        <section id="why-us" className="why-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="content">
                  <h3>Why Choose Medilab?</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor in reprehenderit Asperiores
                    dolores sed et. Tenetur quia eos. Autem tempore quibusdam
                    vel necessitatibus optio ad corporis.
                  </p>
                  <div className="text-center">
                    <a href="#" className="more-btn">
                      Learn More <i class="bx bx-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 d-flex align-items-stretch">
                <div className="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-receipt"></i>
                        <h4>Corporis voluptates sit</h4>
                        <p>
                          Consequuntur sunt aut quasi enim aliquam quae harum
                          pariatur laboris nisi ut aliquip
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-cube-alt"></i>
                        <h4>Ullamco laboris ladore pan</h4>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-images"></i>
                        <h4>Labore consequatur</h4>
                        <p>
                          Aut suscipit aut cum nemo deleniti aut omnis.
                          Doloribus ut maiores omnis facere
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                <a
                  href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                  className="glightbox play-btn mb-4"
                ></a>
              </div>

              <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                <p>
                  Esse voluptas cumque vel exercitationem. Reiciendis est hic
                  accusamus. Non ipsam et sed minima temporibus laudantium.
                  Soluta voluptate sed facere corporis dolores excepturi. Libero
                  laboriosam sint et id nulla tenetur. Suscipit aut voluptate.
                </p>

                <div className="icon-box">
                  <div className="icon">
                    <i class="bx bx-fingerprint"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Lorem Ipsum</a>
                  </h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>

                <div className="icon-box">
                  <div className="icon">
                    <i class="bx bx-gift"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Nemo Enim</a>
                  </h4>
                  <p className="description">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                  </p>
                </div>

                <div className="icon-box">
                  <div className="icon">
                    <i class="bx bx-atom"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Dine Pad</a>
                  </h4>
                  <p className="description">
                    Explicabo est voluptatum asperiores consequatur magnam. Et
                    veritatis odit. Sunt aut deserunt minus aut eligendi omnis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="counts" className="counts">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="fas fa-user-md"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="85"
                    data-purecounter-duration="1"
                    class="purecounter"
                  ></span>
                  <p>Doctors</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                <div className="count-box">
                  <i className="far fa-hospital"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="18"
                    data-purecounter-duration="1"
                    class="purecounter"
                  ></span>
                  <p>Departments</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="fas fa-flask"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="12"
                    data-purecounter-duration="1"
                    class="purecounter"
                  ></span>
                  <p>Research Labs</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="fas fa-award"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="150"
                    data-purecounter-duration="1"
                    class="purecounter"
                  ></span>
                  <p>Awards</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <h2>Services</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon">
                    <i class="fas fa-heartbeat"></i>
                  </div>
                  <h4>
                    <a href="">Lorem Ipsum</a>
                  </h4>
                  <p>
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="icon-box">
                  <div className="icon">
                    <i class="fas fa-pills"></i>
                  </div>
                  <h4>
                    <a className="">Sed ut perspiciatis</a>
                  </h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="icon-box">
                  <div className="icon">
                    <i class="fas fa-hospital-user"></i>
                  </div>
                  <h4>
                    <a href="">Magni Dolores</a>
                  </h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon">
                    <i class="fas fa-dna"></i>
                  </div>
                  <h4>
                    <a href="">Nemo Enim</a>
                  </h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon">
                    <i class="fas fa-wheelchair"></i>
                  </div>
                  <h4>
                    <a href="">Dele cardo</a>
                  </h4>
                  <p>
                    Quis consequatur saepe eligendi voluptatem consequatur dolor
                    consequuntur
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon">
                    <i class="fas fa-notes-medical"></i>
                  </div>
                  <h4>
                    <a href="">Divera don</a>
                  </h4>
                  <p>
                    Modi nostrum vel laborum. Porro fugit error sit minus
                    sapiente sit aspernatur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="departments" className="departments">
          <div className="container">
            <div className="section-title">
              <h2>Departments</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="row gy-4">
              <div className="col-lg-3">
                <ul className="nav nav-tabs flex-column">
                  <li className="nav-item">
                    <a
                      className="nav-link active show"
                      data-bs-toggle="tab"
                      href="#tab-1"
                    >
                      Cardiology
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                      Neurology
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                      Hepatology
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                      Pediatrics
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
                      Eye Care
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-9">
                <div className="tab-content">
                  <div className="tab-pane active show" id="tab-1">
                    <div className="row gy-4">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>Cardiology</h3>
                        <p className="fst-italic">
                          Qui laudantium consequatur laborum sit qui ad sapiente
                          dila parde sonata raqer a videna mareta paulona marka
                        </p>
                        <p>
                          Et nobis maiores eius. Voluptatibus ut enim blanditiis
                          atque harum sint. Laborum eos ipsum ipsa odit magni.
                          Incidunt hic ut molestiae aut qui. Est repellat minima
                          eveniet eius et quis magni nihil. Consequatur dolorem
                          quaerat quos qui similique accusamus nostrum rem vero
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="assets/img/departments-1.jpg"
                          alt=""
                          class="img-fluid"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-2">
                    <div className="row gy-4">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>Et blanditiis nemo veritatis excepturi</h3>
                        <p className="fst-italic">
                          Qui laudantium consequatur laborum sit qui ad sapiente
                          dila parde sonata raqer a videna mareta paulona marka
                        </p>
                        <p>
                          Ea ipsum voluptatem consequatur quis est. Illum error
                          ullam omnis quia et reiciendis sunt sunt est. Non
                          aliquid repellendus itaque accusamus eius et velit
                          ipsa voluptates. Optio nesciunt eaque beatae accusamus
                          lerode pakto madirna desera vafle de nideran pal
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="assets/img/departments-2.jpg"
                          alt=""
                          class="img-fluid"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-3">
                    <div className="row gy-4">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>
                          Impedit facilis occaecati odio neque aperiam sit
                        </h3>
                        <p className="fst-italic">
                          Eos voluptatibus quo. Odio similique illum id quidem
                          non enim fuga. Qui natus non sunt dicta dolor et. In
                          asperiores velit quaerat perferendis aut
                        </p>
                        <p>
                          Iure officiis odit rerum. Harum sequi eum illum
                          corrupti culpa veritatis quisquam. Neque
                          necessitatibus illo rerum eum ut. Commodi ipsam minima
                          molestiae sed laboriosam a iste odio. Earum odit
                          nesciunt fugiat sit ullam. Soluta et harum voluptatem
                          optio quae
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="assets/img/departments-3.jpg"
                          alt=""
                          class="img-fluid"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-4">
                    <div className="row gy-4">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>
                          Fuga dolores inventore laboriosam ut est accusamus
                          laboriosam dolore
                        </h3>
                        <p className="fst-italic">
                          Totam aperiam accusamus. Repellat consequuntur iure
                          voluptas iure porro quis delectus
                        </p>
                        <p>
                          Eaque consequuntur consequuntur libero expedita in
                          voluptas. Nostrum ipsam necessitatibus aliquam fugiat
                          debitis quis velit. Eum ex maxime error in consequatur
                          corporis atque. Eligendi asperiores sed qui veritatis
                          aperiam quia a laborum inventore
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="assets/img/departments-4.jpg"
                          alt=""
                          class="img-fluid"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-5">
                    <div className="row gy-4">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>
                          Est eveniet ipsam sindera pad rone matrelat sando reda
                        </h3>
                        <p className="fst-italic">
                          Omnis blanditiis saepe eos autem qui sunt debitis
                          porro quia.
                        </p>
                        <p>
                          Exercitationem nostrum omnis. Ut reiciendis
                          repudiandae minus. Omnis recusandae ut non quam ut
                          quod eius qui. Ipsum quia odit vero atque qui
                          quibusdam amet. Occaecati sed est sint aut vitae
                          molestiae voluptate vel
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="assets/img/departments-5.jpg"
                          alt=""
                          className="img-fluid"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="doctors" className="doctors">
          <div className="container">
            <div className="section-title">
              <h2>Doctors</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="assets/img/doctors/doctors-1.jpg"
                      class="img-fluid"
                      alt=""
                    ></img>
                  </div>
                  <div className="member-info">
                    <h4>Walter White</h4>
                    <span>Chief Medical Officer</span>
                    <p>
                      Explicabo voluptatem mollitia et repellat qui dolorum
                      quasi
                    </p>
                    <div className="social">
                      <a href="">
                        <i class="ri-twitter-fill"></i>
                      </a>
                      <a href="">
                        <i class="ri-facebook-fill"></i>
                      </a>
                      <a href="">
                        <i class="ri-instagram-fill"></i>
                      </a>
                      <a href="">
                        {" "}
                        <i class="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4 mt-lg-0">
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="assets/img/doctors/doctors-2.jpg"
                      class="img-fluid"
                      alt=""
                    ></img>
                  </div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Anesthesiologist</span>
                    <p>
                      Aut maiores voluptates amet et quis praesentium qui senda
                      para
                    </p>
                    <div className="social">
                      <a href="">
                        <i class="ri-twitter-fill"></i>
                      </a>
                      <a href="">
                        <i class="ri-facebook-fill"></i>
                      </a>
                      <a href="">
                        <i class="ri-instagram-fill"></i>
                      </a>
                      <a href="">
                        {" "}
                        <i class="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4">
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="assets/img/doctors/doctors-3.jpg"
                      class="img-fluid"
                      alt=""
                    ></img>
                  </div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>Cardiology</span>
                    <p>
                      Quisquam facilis cum velit laborum corrupti fuga rerum
                      quia
                    </p>
                    <div className="social">
                      <a href="">
                        <i class="ri-twitter-fill"></i>
                      </a>
                      <a href="">
                        <i class="ri-facebook-fill"></i>
                      </a>
                      <a href="">
                        <i class="ri-instagram-fill"></i>
                      </a>
                      <a href="">
                        {" "}
                        <i class="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4">
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="assets/img/doctors/doctors-4.jpg"
                      className="img-fluid"
                      alt=""
                    ></img>
                  </div>
                  <div className="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Neurosurgeon</span>
                    <p>
                      Dolorum tempora officiis odit laborum officiis et et
                      accusamus
                    </p>
                    <div className="social">
                      <a href="">
                        <i class="ri-twitter-fill"></i>
                      </a>
                      <a href="">
                        <i class="ri-facebook-fill"></i>
                      </a>
                      <a href="">
                        <i class="ri-instagram-fill"></i>
                      </a>
                      <a href="">
                        {" "}
                        <i class="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="faq section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Frequently Asked Questions</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="faq-list">
              <ul>
                <li data-aos="fade-up">
                  <i class="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    className="collapse"
                    data-bs-target="#faq-list-1"
                  >
                    Non consectetur a erat nam at lectus urna duis?{" "}
                    <i class="bx bx-chevron-down icon-show"></i>
                    <i class="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-1"
                    class="collapse show"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna
                      id volutpat lacus laoreet non curabitur gravida. Venenatis
                      lectus magna fringilla urna porttitor rhoncus dolor purus
                      non.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="100">
                  <i class="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-2"
                    className="collapsed"
                  >
                    Feugiat scelerisque varius morbi enim nunc?{" "}
                    <i class="bx bx-chevron-down icon-show"></i>
                    <i class="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-2"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Est pellentesque elit ullamcorper
                      dignissim. Mauris ultrices eros in cursus turpis massa
                      tincidunt dui.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="200">
                  <i class="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-3"
                    className="collapsed"
                  >
                    Dolor sit amet consectetur adipiscing elit?{" "}
                    <i class="bx bx-chevron-down icon-show"></i>
                    <i class="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-3"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                      sagittis orci. Faucibus pulvinar elementum integer enim.
                      Sem nulla pharetra diam sit amet nisl suscipit. Rutrum
                      tellus pellentesque eu tincidunt. Lectus urna duis
                      convallis convallis tellus. Urna molestie at elementum eu
                      facilisis sed odio morbi quis
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="300">
                  <i class="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-4"
                    className="collapsed"
                  >
                    Tempus quam pellentesque nec nam aliquam sem et tortor
                    consequat? <i class="bx bx-chevron-down icon-show"></i>
                    <i class="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-4"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Molestie a iaculis at erat pellentesque adipiscing
                      commodo. Dignissim suspendisse in est ante in. Nunc vel
                      risus commodo viverra maecenas accumsan. Sit amet nisl
                      suscipit adipiscing bibendum est. Purus gravida quis
                      blandit turpis cursus in.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="400">
                  <i class="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-5"
                    className="collapsed"
                  >
                    Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                    turpis nunc eget lorem dolor?{" "}
                    <i class="bx bx-chevron-down icon-show"></i>
                    <i class="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-5"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Laoreet sit amet cursus sit amet dictum sit amet justo.
                      Mauris vitae ultricies leo integer malesuada nunc vel.
                      Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                      eget lorem dolor sed. Ut venenatis tellus in metus
                      vulputate eu scelerisque.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="testimonials" className="testimonials">
          <div className="container">
            <div
              className="testimonials-slider swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-1.jpg"
                        className="testimonial-img"
                        alt=""
                      ></img>
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Proin iaculis purus consequat sem cure digni ssim donec
                        porttitora entum suscipit rhoncus. Accusantium quam,
                        ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                        risus at semper.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-2.jpg"
                        className="testimonial-img"
                        alt=""
                      ></img>
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Export tempor illum tamen malis malis eram quae irure
                        esse labore quem cillum quid cillum eram malis quorum
                        velit fore eram velit sunt aliqua noster fugiat irure
                        amet legam anim culpa.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-3.jpg"
                        className="testimonial-img"
                        alt=""
                      ></img>
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Enim nisi quem export duis labore cillum quae magna enim
                        sint quorum nulla quem veniam duis minim tempor labore
                        quem eram duis noster aute amet eram fore quis sint
                        minim.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-4.jpg"
                        className="testimonial-img"
                        alt=""
                      ></img>
                      <h3>Matt Brandon</h3>
                      <h4>Freelancer</h4>
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Fugiat enim eram quae cillum dolore dolor amet nulla
                        culpa multos export minim fugiat minim velit minim dolor
                        enim duis veniam ipsum anim magna sunt elit fore quem
                        dolore labore illum veniam.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-5.jpg"
                        className="testimonial-img"
                        alt=""
                      ></img>
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Quis quorum aliqua sint quem legam fore sunt eram irure
                        aliqua veniam tempor noster veniam enim culpa labore
                        duis sunt culpa nulla illum cillum fugiat legam esse
                        veniam culpa fore nisi cillum quid.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
