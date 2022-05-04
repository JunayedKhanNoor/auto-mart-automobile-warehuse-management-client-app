import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import useVehicles from "../../hooks/useVehicles";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./ManageItems.css";

const ManageItems = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch("https://morning-ridge-10289.herokuapp.com/inventoryCount")
      .then((res) => res.json())
      .then((data) => {
        const page = Math.ceil(data.count / pageSize);
        setPageCount(page);
        console.log(pageCount);
      });
  }, [pageCount, pageSize]);
  useEffect(() => {
    fetch(
      `https://morning-ridge-10289.herokuapp.com/inventoriesPage?page=${page}&size=${pageSize}`
    )
      .then((res) => res.json())
      .then((data) => {
        setInventories(data);
      });
  }, [page, pageSize]);
  let [ID, setID] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setID(id);
  };
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useVehicles();
  let no = page * 10;
  const number = () => {
    no = no + 1;
    return no;
  };
  const navigateToDetail = (id) => {
    navigate(`/inventory/${id}`);
  };
  const handleModal = () => {
    console.log(ID);
    const url = `https://morning-ridge-10289.herokuapp.com/inventory/${ID}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = vehicles.filter((vehicle) => vehicle._id !== ID);
        setVehicles(remaining);
        const remainingPagination = inventories.filter(
          (vehicle2) => vehicle2._id !== ID
        );
        setInventories(remainingPagination);
      });
    handleClose();
    return;
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
            <th>Stock Update</th>
            <th>Remove from stock</th>
          </tr>
        </thead>
        <tbody>
          {inventories.map((vehicle) => (
            <tr key={vehicle._id}>
              <td>{number()}</td>
              <td>{vehicle.name}</td>
              <td className="supplier">{vehicle.supplierName}</td>
              <td>{vehicle.quantity}</td>
              <td
                onClick={() => {
                  navigateToDetail(vehicle._id);
                }}
              >
                <button className="btn btn-primary mx-auto d-block"> Update Stock</button>
              </td>
              <td
                onClick={() => {
                  handleShow(vehicle._id);
                }}
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
      <div className="pagination">
        {[...Array(pageCount).keys()].map((number) => (
          <button
            onClick={() => {
              setPage(number);
            }}
            className={page === number && "selected"}
          >
            {number + 1}
          </button>
        ))}
      </div>
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
