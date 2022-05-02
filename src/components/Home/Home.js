import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../Banner/Banner";
import Inventories from "../Inventories/Inventories";
import './Home.css'

const Home = () => {
  const navigate = useNavigate();
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
      <h2 className="text-center mt-5 mb-5">
        <span style={{ color: "#FF2626" }}>Inventories </span> & Here you go!!
      </h2>
      <Inventories></Inventories>
      <div className="d-flex justify-content-center my-5">
        <button className="btn p-3 manage-btn" onClick={()=>{navigate('/manageItems')}}>Manage Inventories</button>
      </div>
    </div>
  );
};

export default Home;
