// import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const PublicLayout = () => {
  return (
    <>
      {/* <Navbar /> */}

      <main>
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default PublicLayout;