import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import useVehicles from "../../hooks/useVehicles";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const ManageItems = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useVehicles();
  let no = 0;
  const number = () => {
    no = no + 1;
    return no;
  };
  const handleModal = () => {
      
    handleClose();
    return 
  };
  return (
    <div className="container bg-white shadow-lg p-5">
      <h1 className="text-center my-5">Welcome to manage inventories!!!</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Supplier Name</th>
            <th>Product in stock</th>
            <th>Remove from stock</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle._id}>
              <td>{number()}</td>
              <td>{vehicle.name}</td>
              <td>{vehicle.supplierName}</td>
              <td>{vehicle.quantity}</td>
              <td
                onClick={handleShow}
                className="ps-3 pt-1 col-2"
                role="button"
              >
                <RiDeleteBin6Line
                  style={{ height: "25px", width: "25px" }}
                  className="text-danger me-2"
                ></RiDeleteBin6Line>{" "}
                DELETE{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-center my-5">
        <button
          className="btn p-3 manage-btn"
          onClick={() => {
            navigate("/addItems");
          }}
        >
          Add new Vehicle
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure, to delete from store?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleModal}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManageItems;
