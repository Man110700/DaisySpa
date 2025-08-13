import "./header.css";
import banner_1 from "../../assets/banner/banner_1.png";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="">TRANG CHỦ</a>
          </li>
          <li>
            <a href="">ĐẶT LỊCH</a>
          </li>
          <li>
            <a href="">DỊCH VỤ</a>
          </li>
          <li>
            <a href="">VỀ CHÚNG TÔI</a>
          </li>
        </ul>
      </nav>
      <img class="banner" src={banner_1} alt="banner-1"></img>
    </header>
  );
}
