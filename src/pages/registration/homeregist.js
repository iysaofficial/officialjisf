import Navigation from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer";
import "./registration.css";

function HomeRegist() {
  return (
    <>
    <Navigation />
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto text-sm md:text-lg lg:text-5xl">
                REGISTRATION FORM
              </h1>
              <h3 className="mx-auto mt-5 mb-2 text-sm md:text-lg lg:text-2xl">
                Choose Your Citizenship Category for Registration JISF 2026
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            <a
              href="/homeindo"
              className="btn btn-custom text-center me-lg-5 m-2"
            >
              INDONESIAN CITIZEN<i className="fa-solid fa-earth-americas"></i>
            </a>
            <a
              href="/homeinter"
              className="btn btn-custom text-center me-lg-5 m-2"
            >
              INTERNATIONAL CITIZEN{" "}
              <i className="fa-solid fa-earth-americas"></i>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomeRegist;
