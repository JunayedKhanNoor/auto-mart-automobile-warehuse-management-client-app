import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./MyItems.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { signOut } from "firebase/auth";
import Loading from "../Loading/Loading";
import { Button, Modal } from "react-bootstrap";

const MyItems = () => {
  const [user, loading] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      const url = `https://morning-ridge-10289.herokuapp.com/myItems?email=${email}`;
      if (email) {
        try {
          const { data } = await axios.get(url, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          });
          setMyItems(data);
        } catch (error) {
          console.log(error.message);
          if (error.response.status === 403 || error.response.status === 401) {
            signOut(auth);
            navigate("/login");
          }
        }
      }
    };
    getOrders();
  }, [user, navigate]);
  let [ID, setID] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setID(id);
  };
  const handleModal = () => {
    console.log(ID);
    const url = `https://morning-ridge-10289.herokuapp.com/inventory/${ID}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = myItems.filter((vehicle) => vehicle._id !== ID);
        setMyItems(remaining);
        /* const remainingPagination = inventories.filter((vehicle2) => vehicle2._id !== ID);
        setInventories(remainingPagination); */
      });
    handleClose();
    return;
  };
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-center my-5 text-primary fw-bold">
        Oh Helle, these are your Items...
      </h1>
      <h3 className="text-center fw-bold">
        Your total items: {myItems?.length}
      </h3>
      <div>
        {myItems.map((item) => (
          <div
            key={item?._id}
            className="item-container d-flex mx-auto my-2 p-2"
          >
            <img
              style={{ height: "90px", width: "90px", borderRadius: "50px" }}
              src={item?.img}
              alt=""
            />
            <h3>{item?.name}</h3>
            <h4>Price: $ {item?.price}</h4>
            <button
              className="btn btn-danger rounded-pill p-2"
              onClick={() => {
                handleShow(item._id);
              }}
            >
              <RiDeleteBin6Line className="text-white me-2"></RiDeleteBin6Line>{" "}
              Delete
            </button>
          </div>
        ))}
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

export default MyItems;
