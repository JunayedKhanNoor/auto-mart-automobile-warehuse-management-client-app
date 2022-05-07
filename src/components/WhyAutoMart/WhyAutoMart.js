import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import about2 from "../../Images/about2.jpg";
import search from "../../Images/search-car.gif";
import { MdContactPhone } from "react-icons/md";

const WhyAutoMart = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div>
      <div className="text-center my-3" style={{ color: "#11468F" }}>
        <h1 className="mt-4">Why Auto Mart</h1>
        <small>The way it should be</small>
      </div>
      <div
        className="my-2 py-5 bg-white d-md-flex align-items-center"
        style={{ color: "#11468F" }}
      >
        <img
          style={{ objectFit: "cover", maxWidth: "100%" }}
          src={about2}
          alt=""
        />
        <h1 className="text-center mt-3" data-aos="fade-up">
          We only sell the best.
        </h1>
      </div>
      <div className="my-5  bg-white">
        <div className="container d-md-flex align-items-center">
          <img
            style={{ height: "250px", objectFit: "cover" }}
            src={search}
            alt=""
          />
          <h4 className="text-center" style={{ color: "#11468F" }} data-aos="fade-up">
            The most flexible car-buying experience ever
          </h4>
        </div>
        <div className="row gx-5 gy-2 px-5">
          <div className="shadow-lg col-12 col-md-3 p-2 mx-auto">
            <h3 style={{ color: "#11468F" }}>Carefully chosen</h3>
            <p>
              Millions of cars are ruled out by our vetting process, and we
              never sell cars with flood damage, frame damage, or salvage
              history.
            </p>
          </div>
          <div className="shadow-lg col-12 col-md-3 p-2 mx-auto">
            <h3 style={{ color: "#11468F" }}>125+ details we inspect</h3>
            <p>
              Anything that doesn't meet our standards is repaired or replaced
              by our highly trained technicians.
            </p>
          </div>
          <div className="shadow-lg col-12 col-md-3 p-2 mx-auto">
            <h3 style={{ color: "#11468F" }}>Auto Mart Certified quality</h3>
            <p>
              We spend hours replacing parts, fixing major dents or scratches,
              and detailing to make your car feel like new. Then we give each
              car a final quality check.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h3 style={{ color: "#11468F" }}>Contact Us</h3>
        <div
          className="mx-auto p-5 d-md-flex align-items-center justify-content-around"
          style={{ maxWidth: "900px", border: "1px solid #11468F" }}
        >
          <div>
            <MdContactPhone
              style={{ color: "#11468F", height: "100px", width: "100px" }}
            ></MdContactPhone>
          </div>
          <div>
            <h4 style={{ color: "#11468F" }}>
              Want to talk to someone over the phone? Give us a call:
            </h4>
            <h1 style={{ color: "#11468F" }}>(913) 384-6697000</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyAutoMart;
