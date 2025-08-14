import "./home.css";
import Booking_register from "../../components/section/booking_register/booking_register";
import Header from "../../components/header/header";
import Services from "../../components/section/services/services";
import Booking from "../booking/booking.jsx";
import Service1 from "../service1/service1.jsx";
import Service2 from "../service2/service2.jsx";
import Service3 from "../service3/service3.jsx";
import Footer from "../../components/footer/footer.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Booking_register />
        <Services />
      </main>
      <Booking />
      <Service1 />
      <Service2 />
      <Service3 />
      <Footer />
    </>
  );
}
