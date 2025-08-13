import "./services.css";
import Services_content from "./services_content/services_cotent";

export default function Services() {
  return (
    <section className="services">
      <nav>
        <ul>
          <li>
            <h1>DỊCH VỤ CỦA CHÚNG TÔI</h1>
          </li>
          <li>
            <a>ĐIỀU TRỊ MỤN CHUYÊN SÂU</a>
          </li>
          <li>
            <a>DƯỠNG TRẮNG</a>
          </li>
          <li>
            <a>PHỤC HỒI TỪ BÊN TRONG</a>
          </li>
        </ul>
      </nav>
      <Services_content />
    </section>
  );
}
