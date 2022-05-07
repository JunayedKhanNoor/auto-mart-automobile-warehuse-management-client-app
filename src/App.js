import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import InventoryDetails from "./components/InventoryDetails/InventoryDetails";
import MyItems from "./components/MyItems/MyItems";
import ManageItems from "./components/ManageItems/ManageItems";
import AddItems from "./components/AddItems/AddItems";
import Blogs from "./components/Blogs/Blogs";
import RequiredAuth from "./components/RequiredAuth/RequiredAuth";
import { ToastContainer } from "react-toastify";
import Inventories from "./components/Inventories/Inventories";
import WhyAutoMart from "./components/WhyAutoMart/WhyAutoMart";

function App() {
  return (
    <div className="bg-light m-0">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/inventory" element={<Inventories></Inventories>}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequiredAuth>
              <InventoryDetails></InventoryDetails>
            </RequiredAuth>
          }
        ></Route>
        <Route path="/myItems" element={<MyItems></MyItems>}></Route>
        <Route
          path="/manageItems"
          element={
            <RequiredAuth>
              <ManageItems></ManageItems>
            </RequiredAuth>
          }
        ></Route>
        <Route path="/addItems" element={<AddItems></AddItems>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/whyAutoMart" element={<WhyAutoMart></WhyAutoMart>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer> 
      <ToastContainer />
    </div>
  );
}

export default App;
