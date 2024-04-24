import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar2 from "../Shared/Navbar/Navbar2";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";

const Main2 = () => {
  return (
    <>
      <Navbar2 />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Main2;
