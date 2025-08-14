import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <Header />    
      <main>
        <Outlet /> {/* Hiển thị nội dung page theo route */}
      </main>
      <Footer />
    </div>
  );
}
