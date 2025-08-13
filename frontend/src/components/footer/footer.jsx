import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">Daisy Spa</h2>
          <p className="footer-desc">
            Chúng tôi sẽ luôn mang đến trải nghiệm khiến bạn hài lòng!
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Điều hướng</h3>
          <ul className="footer-links">
            <li>
              <a href="/">Trang chủ</a>
            </li>
            <li>
              <a href="/about">Giới thiệu</a>
            </li>
            <li>
              <a href="/services">Dịch vụ</a>
            </li>
            <li>
              <a href="/contact">Liên hệ</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Liên hệ</h3>
          <p>📍 123 Đường ABC, Quận 1, TP.HCM</p>
          <p>📞 0123 456 789</p>
          <p>📧 daisyspa@gmail.com</p>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Kết nối</h3>
          <div className="footer-social">
            <a href="#">🌐</a>
            <a href="#">📘</a>
            <a href="#">📸</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2025 DaisySpa. All rights reserved.</div>
    </footer>
  );
}
