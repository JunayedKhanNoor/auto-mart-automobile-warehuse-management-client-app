import React, { useEffect } from "react";
import "./Inventory.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Inventory = ({ vehicle }) => {
    useEffect(() => {
        AOS.init({
          duration : 1500
        });
      }, []);
  const { img, name, description, supplierName, price, quantity, _id } =
    vehicle;
  return (
    <div>
      <div className="card h-100" style={{borderRadius:'20px'}} data-aos="fade-up">
        <img src={img} className="card-img-top image" style={{height:'400px',objectFit:'cover',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}} alt="..." />
        <div className="card-body">
          <h2 className="card-title fw-bold">{name}</h2>
          <p className="card-text">{description}</p>
          <h4>Price:$ {price}</h4>
          <h4>Total stock:{quantity}</h4>
          <small className="text-muted">Seller:{supplierName}</small>
        </div>
        <button className="update-button">Update Inventory</button>
      </div>
    </div>
  );
};

export default Inventory;
