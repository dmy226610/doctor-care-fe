export default function Header() {
  return (
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
  );
}
