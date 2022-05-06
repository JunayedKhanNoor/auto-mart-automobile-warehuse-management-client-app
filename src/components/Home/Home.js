import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../Banner/Banner";
import Inventories from "../Inventories/Inventories";
import "./Home.css";
import CountUp from "react-countup";
import { SiBmw, SiMercedes, SiFord, SiChevrolet } from "react-icons/si";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./style.css";
import { EffectCards } from "swiper";
import review1 from "../../Images/r1.jpg";
import review2 from "../../Images/r2.jpg";
import review3 from "../../Images/r3.jpg";
import Loading from "../Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Banner></Banner>
      <h1 className="text-center mt-5 mb-5" data-aos="fade-up">
        Latest{" "}
        <span className="fw-bold" style={{ color: "#FF2626" }}>
          {" "}
          Featured{" "}
        </span>{" "}
        Automobile
      </h1>
      <hr />
      <div className="features-container">
        <div className="count" data-aos="fade-up">
          <div className="text-white">
            <CountUp className="fs-1 fw-bold" start={0} end={100} />
            <span className="fs-1 fw-bold">+</span>
            <h4 className="count-text">
              {" "}
              <span className="text-danger">Total </span> Cars{" "}
            </h4>
          </div>
          <div className="text-white">
            <CountUp className="fs-1 fw-bold" start={0} end={20} />
            <h4 className="count-text">
              {" "}
              <span className="text-danger">Verified </span>Dealers
            </h4>
          </div>
          <div className="text-white">
            <CountUp className="fs-1 fw-bold" start={0} end={400} />
            <h4 className="count-text">
              {" "}
              <span className="text-danger">Active </span>User
            </h4>
          </div>
        </div>
      </div>
      <h2 className="text-center mt-5 mb-5">
        <span style={{ color: "#FF2626" }}>Inventories </span> & Here you go!!
      </h2>
      <Inventories></Inventories>
      <div className="d-flex justify-content-center my-5">
        <button
          className="btn p-3 manage-btn"
          onClick={() => {
            navigate("/manageItems");
          }}
        >
          Manage Inventories
        </button>
      </div>
      <div style={{ backgroundColor: "#fee2e2" }}>
        <div className="container row py-4  mx-auto">
          <div className="col-sm-12 col-md-5 detail">
            <h1>
              <i>Why Choose Us</i>
            </h1>
            <h1>Our premium clients</h1>
          </div>
          <div className="col-sm-12 col-md-7">
            <SiBmw
              className="mx-3 company-logo"
              style={{ height: "100px", width: "100px" }}
            ></SiBmw>
            <SiMercedes
              className="mx-3 company-logo"
              style={{ height: "100px", width: "100px" }}
            ></SiMercedes>
            <SiFord
              className="mx-3 company-logo"
              style={{ height: "100px", width: "100px" }}
            ></SiFord>
            <SiChevrolet
              className="mx-3 company-logo"
              style={{ height: "100px", width: "100px" }}
            ></SiChevrolet>
          </div>
        </div>
      </div>
      <div className="text-center my-3">
        <p className="text-secondary">What Our Happy Clients say about us</p>
        <h1>OUR TESTIMONIAL</h1>
        <div
          className="bg-danger mb-2 mx-auto"
          style={{ width: "100px", height: "2px" }}
        ></div>
        <div
          className="bg-danger mx-auto"
          style={{ width: "50px", height: "2px" }}
        ></div>
      </div>
      <div className="overflow-hidden">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div className="img-container">
              <img className="review-img" src={review1} alt="" />
            </div>
            <div className="text-center container">
              <h4 className="text-dark fw-bold">Mellisa Doe</h4>
              <small className="text-white">
                Reached out to AutoMart.com regarding a listing they have.
                Advised them that the price they have listed is $10k lower than
                the dealership.{" "}
              </small>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="img-container">
              <img className="review-img" src={review2} alt="" />
            </div>
            <div className="text-center container">
              <h4 className="text-dark fw-bold">Anny Baret</h4>
              <small className="text-muted fs-6">
                MEGAN, told me that sometimes there are errors and that I would
                need to contact the dealer for correct pricing, HOWEVER never
                said AutoMart.com would address the issue with the dealership.{" "}
              </small>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="img-container">
              <img className="review-img" src={review3} alt="" />
            </div>
            <div className="text-center container">
              <h4 className="text-white fw-bold">Naomi Watson</h4>
              <small className="text-white fs-6">
                Wondering how an offering is determined to be a "good buy" or
                other rating. My observation is that it is Not consistent and
                raises question how valid this feature is presented.
              </small>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default Home;
