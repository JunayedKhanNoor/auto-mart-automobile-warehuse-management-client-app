import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../Banner/Banner";
import Inventories from "../Inventories/Inventories";
import './Home.css';
import {SiBmw, SiMercedes,SiFord,SiChevrolet} from 'react-icons/si';

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
      <div style={{backgroundColor:'#fee2e2'}}>
        <div className="container row py-4  mx-auto">
        <div className="col-sm-12 col-md-5 detail">
          <h1><i>Why Choose Us</i></h1>
          <h1>Our premium clients</h1>
        </div>
        <div className="col-sm-12 col-md-7">
          <SiBmw className="mx-3 company-logo" style={{height:'100px',width:'100px'}}></SiBmw>
          <SiMercedes className="mx-3 company-logo" style={{height:'100px',width:'100px'}}></SiMercedes>
          <SiFord className="mx-3 company-logo" style={{height:'100px',width:'100px'}}></SiFord>
          <SiChevrolet className="mx-3 company-logo" style={{height:'100px',width:'100px'}}></SiChevrolet>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
