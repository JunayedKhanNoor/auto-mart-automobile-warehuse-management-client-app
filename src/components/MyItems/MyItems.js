import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./MyItems.css";
import { RiDeleteBin6Line } from "react-icons/ri";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const email = user?.email;
    const url = `http://localhost:5000/myItems?email=${email}`;
    /* axios.get(url).then((response) => {
      console.log(response);
      setMyItems(response.data);
    }); */
    const getItems = async () => {
      try {
        axios
          .get(url, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
          .then((response) => {
            console.log(response.data);
            setMyItems(response.data);
          });
      } catch (error) {
        console.log(error.message);
      }
    };
    getItems();
  }, [user?.email]);
  return (
    <div>
      <h1 className="text-center my-5 text-primary fw-bold">
        Oh Helle, these are your Items...
      </h1>
      <h3 className="text-center fw-bold">
        Your total items: {myItems.length}
      </h3>
      <div>
        {myItems.map((item) => (
          <div
            key={item._id}
            className="item-container d-flex mx-auto my-2 p-2"
          >
            <img
              style={{ height: "90px", width: "90px", borderRadius: "50px" }}
              src={item.img}
              alt=""
            />
            <h3>{item.name}</h3>
            <h4>Price: $ {item.price}</h4>
            <button className="btn btn-danger rounded-pill p-2">
              <RiDeleteBin6Line className="text-white me-2"></RiDeleteBin6Line>{" "}
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
