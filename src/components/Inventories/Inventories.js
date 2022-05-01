import React from "react";
import useVehicles from "../../hooks/useVehicles";
import Inventory from "../Inventory/Inventory";
import "./Inventories.css";

const Inventories = () => {
  const [vehicles, setVehicles] = useVehicles(6);
  return (
    <div className="inventories-container container">
      {vehicles.map((vehicle) => (
        <Inventory key={vehicle._id} vehicle={vehicle}></Inventory>
      ))}
    </div>
  );
};

export default Inventories;
