import "./services_content.css";
import Src from "../../../../assets/Service_prototype.svg";

export default function Services_content() {
  return (
    <div className="services-content">
      <div className="services-content-child">
        <div className="service-content">
          <img className="product-image" src={Src} alt="Source" />
          <article>
            <h2>Điều trị mụn chuyên sâu</h2>
            <br />
            <p className="service-description">
              Điều trị mụn 13 bước chuyên sâu, kiểm soát dầu nhờn ngăn ngừa mụn
              viêm
            </p>
            <p className="service-duration">60'</p>
          </article>
        </div>
        <div className="service-button">
          <h2>Điều trị mụn chuyên sâu</h2>
          <button>
            <a>Nhận ưu đãi</a>
          </button>
        </div>
      </div>
      <div className="services-content-child">
        <div className="service-content">
          <img className="product-image" src={Src} alt="Source" />
          <article>
            <h2>Dưỡng trắng mờ thâm</h2>
            <br />
            <p className="service-description">
              Dưỡng trắng từ sâu bên trong, đánh tan sắc tố da, vết thâm, nám,
              tàn nhang.
            </p>
            <p className="service-duration">60'</p>
          </article>
        </div>
        <div className="service-button">
          <h2>Dưỡng trắng mờ thâm</h2>
          <button>
            <a>Nhận ưu đãi</a>
          </button>
        </div>
      </div>
      <div className="services-content-child">
        <div className="service-content">
          <img className="product-image" src={Src} alt="Source" />
          <article>
            <h2>Phục hồi da sau điều trị</h2>
            <br />
            <p className="service-description">
              Phục hồi và nuôi dưỡng da trắng sáng, kiểm soát các vấn đề da mụn.
            </p>
            <p className="service-duration">60'</p>
          </article>
        </div>
        <div className="service-button">
          <h2>Phục hồi da sau điều trị</h2>
          <button>
            <a>Nhận ưu đãi</a>
          </button>
        </div>
      </div>
    </div>
  );
}
