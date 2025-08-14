import "./header.css";
import banner_1 from "../../assets/banner/banner_1.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">TRANG CHỦ</Link>
          </li>
          <li>
            <Link to="/booking">ĐẶT LỊCH</Link>
          </li>
          <li>
            <Link to="/service">DỊCH VỤ</Link>
          </li>
          <li>
            <Link to="/about">VỀ CHÚNG TÔI</Link>
          </li>
        </ul>
      </nav>
      <img className="banner" src={banner_1} alt="banner-1"></img>
    </header>
  );
}
