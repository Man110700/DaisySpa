import "./booking_register.css";

export default function Booking_register() {
  return (
    <section className="booking-register">
      <div class="date-show booking-register-child">
        <div class="date">
          <p id="day">DAY</p>
          <hr />
          <p id="mont">MONTH</p>
        </div>
        <p id="year">YEAR</p>
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
