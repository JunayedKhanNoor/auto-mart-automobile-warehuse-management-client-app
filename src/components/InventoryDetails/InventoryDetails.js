import React from "react";
import { useParams } from "react-router-dom";
import useInventoryDetail from "../../hooks/useInventoryDetail";
import "./InventoryDetails.css";

const InventoryDetails = () => {
  const { id } = useParams();
  const [inventory] = useInventoryDetail(id);
  console.log(inventory.name);
  return (
    <div>
      <div
        style={{ maxWidth: "800px", borderRadius: "50px" }}
        className="mx-auto mt-5 container shadow-lg"
      >
        <h1 className="text-center text-primary fw-bold">{inventory.name}</h1>
        <img
          src={inventory.img}
          style={{ objectFit: "cover", height: "400px", borderRadius: "50px" }}
          className="w-100 mb-5"
          alt=""
        />
        <p>{inventory.description}</p>
        <h3 className="text-center text-primary">Price: ${inventory.price}</h3>
        <h3 className="text-center text-primary mb-3">
          Total Stock:{inventory.quantity}
        </h3>
        <button
          style={{
            background: "#22c55e",
            color: "#fff",
            border: "none",
            width: "200px",
            borderRadius: "10px",
            letterSpacing: "2px",
          }}
          className="mx-auto p-2 d-block fw-bold inventory-btn"
        >
          Delivered
        </button>
        <div style={{ height: "15px" }}></div>
      </div>
      <div
        style={{ maxWidth: "800px", borderRadius: "50px" }}
        className="mx-auto mt-5 container shadow-lg"
      >
          <h1 style={{color:'#22c55e'}} className="text-center">Please Restock your product</h1>
          <input placeholder="Quantity" type="number" name="quantity" id="" style={{width:'200px',borderRadius:'20px'}} className="d-block mx-auto p-2"/>
          <button
          style={{
            background: "#22c55e",
            color: "#fff",
            border: "none",
            width: "200px",
            borderRadius: "10px",
            letterSpacing: "2px",
          }}
          className="mx-auto mt-2 p-2 d-block fw-bold inventory-btn"
        >
          Restock
        </button>
        <div style={{ height: "15px" }}></div>
      </div>
    </div>
  );
};

export default InventoryDetails;
