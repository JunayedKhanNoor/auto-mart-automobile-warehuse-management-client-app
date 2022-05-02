import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useInventoryDetail from "../../hooks/useInventoryDetail";
import "./InventoryDetails.css";

const InventoryDetails = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useInventoryDetail(id);
  const url = `http://localhost:5000/inventory/${id}`;
  const handleDelivered = (e) => {
    e.preventDefault();
    const { quantity, ...rest } = inventory;
    const updatedInventory = { quantity: parseInt(quantity) - 1, ...rest };
    if (parseInt(quantity) > 0) {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedInventory),
      })
        .then((response) => response.json())
        .then((data) => {
          toast("Delivered");
        });
      setInventory(updatedInventory);
    }
  };
  const handleRestock = (e) => {
    e.preventDefault();
    const reStock = e.target.stock.value;
    const { quantity, ...rest } = inventory;
    if (reStock) {
      const updatedInventory = {
        quantity: parseInt(quantity) + Number(reStock),
        ...rest,
      };
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedInventory),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          toast("Your Stock updated");
        });
      setInventory(updatedInventory);
      e.target.reset();
    }
  };
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
        <h3 className="text-center text-danger mb-3 fw-bold">
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
          onClick={handleDelivered}
        >
          Delivered
        </button>
        <div style={{ height: "15px" }}></div>
      </div>
      <div
        style={{ maxWidth: "800px", borderRadius: "50px" }}
        className="mx-auto mt-5 container shadow-lg"
      >
        <h1 style={{ color: "#22c55e" }} className="text-center">
          Please Restock your product
        </h1>
        <form onSubmit={handleRestock}>
          <input
            placeholder="Quantity"
            type="number"
            name="stock"
            id=""
            style={{ width: "200px", borderRadius: "20px" }}
            className="d-block mx-auto p-2"
          />
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
        </form>
        <div style={{ height: "15px" }}></div>
      </div>
    </div>
  );
};

export default InventoryDetails;
