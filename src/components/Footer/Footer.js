import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiOutlineYoutube } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      style={{ background: "#000" }}
      className="mb-0 mt-5 text-white overflow-hidden"
    >
      <div className="container py-3 w-100 overflow-hidden">
        <div className="row gy-2 gx-5 f-container">
          <div className="col-12 col-md-4">
            <h1 className="text-center">
              Vehicles <hr />
            </h1>
            <ul className="f-list text-center" style={{ listStyle: "none" }}>
              <li>SUVs</li>
              <li>Sedans & Wagons</li>
              <li>Electric</li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h1 className="text-center">
              Shopping Tools <hr />
            </h1>
            <ul className="f-list text-center" style={{ listStyle: "none" }}>
              <li>Find a dealer</li>
              <li>View Inventory</li>
              <li>Build</li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h1 className="text-center">
              About <hr />
            </h1>
            <ul className="f-list text-center" style={{ listStyle: "none" }}>
              <li>About Us</li>
              <li>Why Auto Mart</li>
              <li>View all Inventory</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container overflow-hidden mt-5">
        <h1 className="text-center">Stay informed</h1>
        <hr />
        <p className="text-light text-center">
          Follow us and use the following social media platforms to get in
          contact with us and to share your passion for the brand, products and
          services of Auto Mart.
        </p>
        <h2 className="text-center">Follow us</h2>
        <div className="d-flex justify-content-center my-3">
          <a
            className="text-white mx-2"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsFacebook style={{ height: "40px", width: "40px" }}></BsFacebook>
          </a>
          <a
            className="text-white mx-2"
            href="https://www.twitter.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillTwitterCircle
              style={{ height: "40px", width: "40px" }}
            ></AiFillTwitterCircle>
          </a>
          <a
            className="text-white mx-2"
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiOutlineYoutube
              style={{ height: "40px", width: "40px" }}
            ></AiOutlineYoutube>
          </a>
        </div>
        <p className="text-center mb-0">
          &copy; Copyright Auto Mart {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
