import { useEffect, useState } from "react";
import "./booking_register.css";

export default function Booking_register() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const day = () => {
    if (currentTime.getDay() < 10) {
      let result = "0" + currentTime.getDay().toString();
      return result;
    }
    return currentTime.getDay();
  };

  const month = () => {
    if (currentTime.getMonth() < 10) {
      let result = "0" + currentTime.getMonth().toString();
      return result;
    }
    return currentTime.getMonth();
  };

  const year = currentTime.getFullYear().toString();

  return (
    <section className="booking-register">
      <div className="date-show booking-register-child">
        <div className="date">
          <p id="day">{day()}</p>
          <hr />
          <p id="month">{month(currentTime)}</p>
        </div>
        <p id="year">{year}</p>
      </div>
      <div className="booking-number booking-register-child">
        <h1>ĐẶT LỊCH HẸN - NHẬN ƯU ĐÃI LÊN ĐẾN 50%</h1>
        <form>
          <input type="text" placeholder="Nhập số điện thoại" />
          <button>NHẬN ƯU ĐÃI</button>
        </form>
      </div>
    </section>
  );
}
